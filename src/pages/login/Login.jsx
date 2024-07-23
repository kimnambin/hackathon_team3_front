import React, { useState} from 'react';
import 'pretendard/dist/web/static/pretendard.css';
import styles from './Login.module.css';
import { NavLink ,useNavigate  } from 'react-router-dom';
import UseSignupContext from '../signup/UseSignupContext'
import axios from 'axios';

export default function Login() {
  // 아이디랑 비번 초기 상태
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 커스텀 훅 사용
  const [showPw, handlePw] = UseSignupContext();

  //아이디랑 비번 입력됬을 시
  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePW2 = (e) => {
    setPw(e.target.value);
  };

  //버튼 초기 상태 (아이디랑 비번 입력 x)
  const no_btn = id !== '' && pw !== '';

  const navigate = useNavigate();

  // 로그인 버튼 클릭
  const submitLogin = async () => {
    try {
        const response = await axios.get('http://localhost:8080/Member');
        const members = response.data;
        const user = members.find(member => member.userId === id && member.password === pw);

        if (user) {
            navigate(`/profile/${id}`);
        } else {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    } catch (error) {
        console.error('로그인 요청 에러:', error);
        alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
};




  // =====================================================
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
        <div className={styles.search}>
          <input 
            type={showPw.type}
            placeholder='비밀번호를 입력해주세요.' 
            maxLength="16" 
            aria-hidden='true' 
            className={styles.inputField2}
            value={pw}
            onChange={handlePW2}
          />
          <span onClick={handlePw}>
            {showPw.visible ? 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBxVaBUcMwDPx2gozgDcgGeAPYoNmAbAArMEG7ATCB0wmSDQITFCYAmdh3jptIcukdf/dXt31JtizL3kAPQ7wn3hLr8D1iIL4Tj8TXML4KLNERvwvogt3FqIgvhUFz7jHPkAo+reMfA0eOwZ8KO+KJcdZh2vsq6P1nQ+yFSeykwLXgoBXsnwR7u2ZowKdaChzRMj5OWKkBLm37TGvDbw5TUeZ76sCfhBka8OkyipW12eTU2zcywj7RGehT2gvaahtWnRrlOGarXkOs+iW7Ra0P/gAen8n4RtDWK3ZLuNsqRCm+hP8r6PGb9rcCh4OgHVbslvAcRVxHywuO05pEyxXcmM6Cawx5Z9IcNSP4a5DBQd8YfGH5e7sjHnDeNg/QZXI2Wy6l12ivI5hjbcGn6xGXB/YUr9ZGcNAHTXql+ivWge9oDZT4t8dEhAFfOBr6G6+k8ZzBYqrqkqAdFA/IDfQwmPbWhnHa5z8wdbcOBU/nHxvoTp2YPznCAAAAAElFTkSuQmCC' alt=''>
              </img> 
            : 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgBxVbJkdpAFP3SsB1xBnIERgcolsOICGwiMBOBIYKBCGYcweAIjCOwOLAfUAaDM8BHKBa/Z0tUD6hbmDnMr1LRdL/+r//abcmFMh6PHcuyPuG7xVfAlKMsB4fDYYlvgK9fqVSWl+i0kgAg9W5ubu4x9ORy8Xe7XReH8OUa8sVikd9sNk+0Vq6XXniIpVxKPhwOC+l0+ru8dO1VwnBst9tGrVYLTtfs04npdPoZxD8NxAPbthvAvCuVShZ/MXcHDwVxYMw7wCyo92xN/RNavNCQyn6/b5fL5UfdOgg6ILvXrSMEdTUPjuTMZiSW1uIk4kgmk0kLnnnQLK9wADfKgSP5bDajxQXNph5cfKcclBVANzqI6Qox7aoxhS4a4Wl0+dBV58AOwU0DMd3VFcWy0EPc47EaGKrRaNSKw8eIF2GtkPxZ9AkW4KSuyDE0zxrcC5cmeHKFA7+3Q6sd0csgGoC4ZcDlEetm3L447Hq9btLtXwwg1ulK+fshAVvQ7DsTHPQjyY2gE+W/ExTm5XLJ2yihHyYEEkpVGIhZAs2+M0F+fLWz2WxPzNbfRgMc1IiFwse4fafClovE7Nmu666g1FQaBdY1B8xkHZZNKMp0VoUYSjfS8bfOw87l68DhlSoK1sXpGS7e39/g4rra/RD7jugloNUcnLZX1mZsrNDF2tVq9VXtle6G1fXIQ8dbjROIWUOnNJVKPeDi0F4aScShAQ31bj+7z+GBJjzwJHoJmKm5XK7PfAkfHWyz7BeeZg+7Xztyt5ac8maPCQqBvHuZTPI64n4mk3HjiCmJD8j5fO5BSUcMdRsjA4ShUywWfRMokTwS5enM+Dqi9Hkc7pf8ez77//N0/gP6TGNxpu9IZQAAAABJRU5ErkJggg==' alt=''>
              </img> 
            }
          </span>
        </div>
      </label>
      
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="checkbox_id1" name="checkbox_name" value="checkbox_value" className={styles.checkbox}/>
        <label htmlFor="checkbox_id1" className={styles.checkboxLabel}>아이디 저장</label>
      </div>

      
      <button className={`${styles.no_LoginBtn} ${no_btn ? styles.loginBtn : ''}`} onClick={submitLogin} disabled={!no_btn}>
        로그인
      </button>

      <div className={styles.btnAndText}>
        <NavLink to='/firstsignup' className={styles.loginP}>회원가입</NavLink>
        <p className={styles.loginP2}></p>
        <NavLink to='/findPw' className={styles.loginP}>비밀번호 찾기</NavLink>
      </div>
    </div>
  );
}
