import React from 'react'
import 'pretendard/dist/web/static/pretendard.css';
import styles from './Login.module.css'
import {NavLink} from 'react-router-dom'



export default function Login() {
    return  (
      <div className={styles.loginContainer}>
        {/* 왼쪽 */}
        <div className={styles.leftContainer}>
          <img src='./img/image.png' alt='' className={styles.image} />
          <p className={styles.leftText}>로그인 하고<br />웹서비스명에서<br />마음을 치유해보세요.</p>
        </div>
  
        {/* 오른쪽 */}
        <div className={styles.rightContainer}>
          <p className={styles.serviceName}>웹 서비스명</p>
          <input type='text' placeholder='아이디를 입력하세요.' className={styles.inputField} />
          <input type='text' placeholder='비밀번호를 입력해주세요.' className={styles.inputField} />
          
          {/* 체크박스 부분 */}
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="checkbox_id1" name="checkbox_name" value="checkbox_value" className={styles.checkbox}/>
            <label htmlFor="checkbox_id1" className={styles.checkboxLabel}>아이디 저장</label>
            <input type="checkbox" id="checkbox_id2" name="checkbox_name" value="checkbox_value" className={styles.checkbox}/>
            <label htmlFor="checkbox_id2" className={styles.checkboxLabel}>자동 로그인</label>
          </div>
  
          {/* 로그인 버튼 부분 및 텍스트 */}
          <div className={styles.btnAndText}>
            <button className={styles.loginBtn}>로그인</button> 
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px'}}>
              <NavLink to='/signup' className={styles.loginP}>회원가입</NavLink>
              <p className={styles.loginP2}></p>
              <NavLink to='/findPw' className={styles.loginP}>비밀번호 찾기</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };