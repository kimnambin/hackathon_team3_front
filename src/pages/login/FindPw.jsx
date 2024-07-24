import React, { useState } from 'react';
import 'pretendard/dist/web/static/pretendard.css';
import styles from './Login.module.css';
import { NavLink ,useNavigate  } from 'react-router-dom';
import usePWContext from '../../components/pw/PwContext'
import axios from 'axios';


export default function FindPw() {
  // 아이디랑 비번 초기 상태
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  //아이디랑 비번 입력됬을 시
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //버튼 초기 상태 (아이디랑 비번 입력 x)
  const no_btn = id !== '' && email !== '';


  //  버튼 클릭
  const submitFind = async () => {
    // 나중에 구현 예정
    // try {
    //     const response = await axios.get('http://localhost:8080/Member');
    //     const members = response.data;
    //     const user = members.find(member => member.userId === id && member.password === pw);

    //     if (user) {
    //         navigate(`/profile/${id}`);
    //     } else {
    //         alert('아이디 또는 비밀번호가 잘못되었습니다.');
    //     }
    // } catch (error) {
    //     console.error('로그인 요청 에러:', error);
    //     alert('서버와 연결하는 데 문제가 발생했습니다.');
    // }
};



  // =====================================================
  return (
    <div className={styles.loginContainer}>
      <p className={styles.serviceName}>비밀번호 찾기</p>

      <label className={styles.labelContainer}>
        <input 
          type='text' 
          placeholder='아이디를 입력하세요.' 
          className={styles.inputField}
          value={id}
          onChange={handleId}
        />
      </label>

      <label className={styles.labelContainer}>
        <div className={styles.search}>
          <input 
            type='text'
            placeholder='이메일을 입력하세요' 
            className={styles.inputField2}
            value={email}
            onChange={handleEmail}
          />
        </div>
      </label>
      
      <div className={styles.btnAndText2}>
      <img style={{width:'16px' , height:'16px'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgBpVRLcoJAEB3GhaWbmBMEVpZuoieIniB6ArlBzAmCJ0h5A3KCkBPoDSAbPyvIDVjpwlLzng4WIiClXQXT9HS/edN0tyYyxHXdWqVSMTVNe97v97oyh9B/sE4bjUaQFqclDfP5nMGWlHLAbwD8YTkEw0bwmnK1d7vdKAmsJcA6pVLpWwGNEWAnA3gggC2oPDDYbrfvzWbTuQCczWY9BeYBqJ91pQTwBKoO/y78pyfA2KZYrVZtSBgPZj65Ju2+79c2m82EOQZomySk2rOik9KCqtWqyycCjsQwjBBX7uPHMb8ftEnFbgCjfe2aacIYgI6hmjyQDDvcgHGUFkAWTENaKmJi81Uul01tsVg4YPdSr9cfxR0CnAA4EzJ8QFJ/rzgPUQVDkS8+cAwpiskr8twr4ijZCaD6JO4UHNjCEkqAeVB01XI3CWPZkngciT9jK7spbhdLrVPJsoDyBcpvOSw5YRyRwS5ex6fWQx+7oByg3ro59XYmLGR2EHXVz8fWU9Xeh9qiQ5F80ge+h+HAiRN12dn4Wi6XLI1POomMeRe74qEuSSSaNBeAsQBLHOedQGAIYE9t6/jWld1mu+YO2CQwlg4LOprSAAmge+v12s7K8z/ZmBSK1nECZwAAAABJRU5ErkJggg==' alt=''>
      </img>
        <p className={styles.Text}>이메일을 입력하시면,<br/> 비밀번호 변경 메일을 발송해드립니다.</p>
      </div>

      
      <button className={`${styles.no_LoginBtn} ${no_btn ? styles.loginBtn : ''}`} onClick={submitFind} disabled={!no_btn}>
        비밀번호 찾기
      </button>

      
    </div>
  )
}
