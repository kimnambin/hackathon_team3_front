import React from 'react'
import 'pretendard/dist/web/static/pretendard.css';
import styles from './Login.module.css'
import {NavLink} from 'react-router-dom'



export default function Login() {
    return  (
      // 전체 컨테이너
      <div className={styles.loginContainer}>
  
          <p className={styles.serviceName}>로그인</p>

          {/* 아이디 비번 부분 */}
          <label className={styles.labelContainer}>아이디
          <input type='text' placeholder='아이디를 입력하세요.' className={styles.inputField} />
          </label>

          <label className={styles.labelContainer}>비밀번호
          <input type='password' placeholder='비밀번호를 입력해주세요.' maxLength="16" 
          aria-hidden='true' className={styles.inputField}>
          </input>
          </label>

          {/* 체크박스 부분 */}
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="checkbox_id1" name="checkbox_name" value="checkbox_value" className={styles.checkbox}/>
            <label htmlFor="checkbox_id1" className={styles.checkboxLabel}>아이디 저장</label>
            
            <input type="checkbox" id="checkbox_id2" name="checkbox_name" value="checkbox_value" className={styles.checkbox2}/>
            <label htmlFor="checkbox_id2" className={styles.checkboxLabel}>자동 로그인</label>
          </div>
  

          {/* 로그인 버튼 부분 및 텍스트 */}
          
            <button className={styles.loginBtn}>로그인</button> 
            <div className={styles.btnAndText}>
              <NavLink to='/firstsignup' className={styles.loginP}>회원가입</NavLink>
              <p className={styles.loginP2}></p>
              <NavLink to='/findPw' className={styles.loginP}>비밀번호 찾기</NavLink>
            </div>
          </div>
       
  
    );
  };