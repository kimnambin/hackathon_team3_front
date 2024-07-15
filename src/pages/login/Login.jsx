import React, { useState } from 'react'
import 'pretendard/dist/web/static/pretendard.css';
import styles from './Login.module.css'
import {NavLink} from 'react-router-dom'



export default function Login() {

  // 아이디랑 비번 초기 상태
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //아이디랑 비번 입력됬을 시
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePW = (e) => {
    setPw(e.target.value);
  };

  //버튼 초기 상태 (아이디랑 비번 입력 x)
  const no_btn = id !== '' && pw !== '';

  return (
    <div className={styles.loginContainer}>
      <p className={styles.serviceName}>로그인</p>

      <label className={styles.labelContainer}>
        아이디
        <input 
          type='text' 
          placeholder='아이디를 입력하세요.' 
          className={styles.inputField}
          value={id}
          onChange={handleId}
        />
      </label>

      <label className={styles.labelContainer}>
        비밀번호
        <input 
          type='password' 
          placeholder='비밀번호를 입력해주세요.' 
          maxLength="16" 
          aria-hidden='true' 
          className={styles.inputField}
          value={pw}
          onChange={handlePW}
        />
      </label>

      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="checkbox_id1" name="checkbox_name" value="checkbox_value" className={styles.checkbox}/>
        <label htmlFor="checkbox_id1" className={styles.checkboxLabel}>아이디 저장</label>

        <input type="checkbox" id="checkbox_id2" name="checkbox_name" value="checkbox_value" className={styles.checkbox2}/>
        <label htmlFor="checkbox_id2" className={styles.checkboxLabel}>자동 로그인</label>
      </div>

      <button className={`${styles.no_LoginBtn} ${no_btn ? styles.loginBtn : ''}`}>
        로그인
      </button>
      
      <div className={styles.btnAndText}>
        <NavLink to='/firstsignup' className={styles.loginP}>회원가입</NavLink>
        <p className={styles.loginP2}></p>
        <NavLink to='/findPw' className={styles.loginP}>비밀번호 찾기</NavLink>
      </div>
    </div>
  );
};
  