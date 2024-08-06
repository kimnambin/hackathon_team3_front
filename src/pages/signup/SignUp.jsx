import React from 'react';
import 'pretendard/dist/web/static/pretendard.css';
import styles from './signup.module.css';
import UseSignupContext from './UseSignupContext';

export default function SignUp() {
  const {
    userId, setUserId,nickname, setNickname,birthYear, setBirthYear
    ,birthMonth, setBirthMonth,birthDay, setBirthDay,gender, setGender
    ,checkId, setCheckId,showcheckId,checkMsg, setCheckMsg,showcheckMsg,
    pw , setPw,checkPW , setCheckPW,matchpw , setMatchPW,handlePW02,
    handleCheckPW,phoneNum, setPhoneNum,handlePhone,
    showPw, setShowPw, num , setNum,
    showPw2, setShowPw2,handlePw,handlePw2,postUserData ,handleFieldChange,
    isIdAvailable, setIsIdAvailable , isNickAvailable, setIsNickAvailable,
    btn ,agree , setAgree , handleAgree , certified , setCertified ,checkNum
  } = UseSignupContext();
  

  return (
    <div className={styles.signup_container}>
      <h2 className={styles.signup_h2}>일반회원 회원가입</h2>

      {/* 개인정보 수집 부분 */}
      <div className={styles.signup_checkbox_container}>
        <input type="checkbox" className={styles.signup_checkbox} value={!agree} onClick={handleAgree} /> 
        <p className={styles.signup_checkbox_p}> (필수) 개인정보 수집/이용 동의</p>
      </div>

      {/* 아이디 부분 */}
      <div className={styles.signup_label}>
        <div className={styles.signup_id_container}>
          <p className={styles.signup_p}>아이디</p>
          <p className={styles.signup_check_p} onClick={showcheckId}>중복 확인하기</p>
        </div>
        <input type='text' className={styles.signup_input} value={userId} onChange={handleFieldChange(setUserId)}/>

        <div className={styles.signup_id_container}>
          <p></p>
          <p className={`${styles.signup_check_msg_sucess} ${isIdAvailable ? styles.signup_check_msg_sucess : ''}`}>
      {isIdAvailable ? '사용 가능한 아이디입니다.' : ''}
    </p>
    <p className={`${styles.signup_check_msg} ${!isIdAvailable && checkId === 'block' ? styles.signup_check_msg_show : ''}`}>
      {!isIdAvailable ? '이미 사용 중인 아이디입니다.' : ''}
    </p>
        </div>
      </div>

      {/* 비밀번호 부분 */}
      <div className={styles.signup_label}>
        <div className={styles.signup_pw_container}>
          <p className={styles.signup_p2}>비밀번호</p> 
          <p className={styles.signup_pw_p}> 영문/숫자 포함 6자 이상 </p>
        </div>
        <div className={styles.search}>
          <input 
            type={showPw ? 'text' : 'password'}
            maxLength="16" 
            aria-hidden='true' 
            className={styles.inputField2}
            value={pw}
            onChange={handlePW02}
          />
         <span onClick={handlePw} className={styles.iconnn}>
            {showPw ? 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBxVaBUcMwDPx2gozgDcgGeAPYoNmAbAArMEG7ATCB0wmSDQITFCYAmdh3jptIcukdf/dXt31JtizL3kAPQ7wn3hLr8D1iIL4Tj8TXML4KLNERvwvogt3FqIgvhUFz7jHPkAo+reMfA0eOwZ8KO+KJcdZh2vsq6P1nQ+yFSeykwLXgoBXsnwR7u2ZowKdaChzRMj5OWKkBLm37TGvDbw5TUeZ76sCfhBka8OkyipW12eTU2zcywj7RGehT2gvaahtWnRrlOGarXkOs+iW7Ra0P/gAen8n4RtDWK3ZLuNsqRCm+hP8r6PGb9rcCh4OgHVbslvAcRVxHywuO05pEyxXcmM6Cawx5Z9IcNSP4a5DBQd8YfGH5e7sjHnDeNg/QZXI2Wy6l12ivI5hjbcGn6xGXB/YUr9ZGcNAHTXql+ivWge9oDZT4t8dEhAFfOBr6G6+k8ZzBYqrqkqAdFA/IDfQwmPbWhnHa5z8wdbcOBU/nHxvoTp2YPznCAAAAAElFTkSuQmCC' alt=''>
              </img> 
            : 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgBxVbJkdpAFP3SsB1xBnIERgcolsOICGwiMBOBIYKBCGYcweAIjCOwOLAfUAaDM8BHKBa/Z0tUD6hbmDnMr1LRdL/+r//abcmFMh6PHcuyPuG7xVfAlKMsB4fDYYlvgK9fqVSWl+i0kgAg9W5ubu4x9ORy8Xe7XReH8OUa8sVikd9sNk+0Vq6XXniIpVxKPhwOC+l0+ru8dO1VwnBst9tGrVYLTtfs04npdPoZxD8NxAPbthvAvCuVShZ/MXcHDwVxYMw7wCyo92xN/RNavNCQyn6/b5fL5UfdOgg6ILvXrSMEdTUPjuTMZiSW1uIk4kgmk0kLnnnQLK9wADfKgSP5bDajxQXNph5cfKcclBVANzqI6Qox7aoxhS4a4Wl0+dBV58AOwU0DMd3VFcWy0EPc47EaGKrRaNSKw8eIF2GtkPxZ9AkW4KSuyDE0zxrcC5cmeHKFA7+3Q6sd0csgGoC4ZcDlEetm3L447Hq9btLtXwwg1ulK+fshAVvQ7DsTHPQjyY2gE+W/ExTm5XLJ2yihHyYEEkpVGIhZAs2+M0F+fLWz2WxPzNbfRgMc1IiFwse4fafClovE7Nmu666g1FQaBdY1B8xkHZZNKMp0VoUYSjfS8bfOw87l68DhlSoK1sXpGS7e39/g4rra/RD7jugloNUcnLZX1mZsrNDF2tVq9VXtle6G1fXIQ8dbjROIWUOnNJVKPeDi0F4aScShAQ31bj+7z+GBJjzwJHoJmKm5XK7PfAkfHWyz7BeeZg+7Xztyt5ac8maPCQqBvHuZTPI64n4mk3HjiCmJD8j5fO5BSUcMdRsjA4ShUywWfRMokTwS5enM+Dqi9Hkc7pf8ez77//N0/gP6TGNxpu9IZQAAAABJRU5ErkJggg==' alt=''>
              </img> 
            }
            </span>
        </div>
        
        {/* 비밀번호 재확인 */}
        <div className={styles.signup_pw_container2}> 
        <p className={styles.signup_p2}>비밀번호 재확인</p>
        </div>
        <div className={`${styles.search} ${matchpw ? styles.search_error : ''}`}>
          <input type={showPw2 ? 'text' : 'password'} 
            className={styles.inputField2}
            onChange={handleCheckPW}/>
         <span onClick={handlePw2} className={styles.iconnn}>
            {showPw2 ? 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBxVaBUcMwDPx2gozgDcgGeAPYoNmAbAArMEG7ATCB0wmSDQITFCYAmdh3jptIcukdf/dXt31JtizL3kAPQ7wn3hLr8D1iIL4Tj8TXML4KLNERvwvogt3FqIgvhUFz7jHPkAo+reMfA0eOwZ8KO+KJcdZh2vsq6P1nQ+yFSeykwLXgoBXsnwR7u2ZowKdaChzRMj5OWKkBLm37TGvDbw5TUeZ76sCfhBka8OkyipW12eTU2zcywj7RGehT2gvaahtWnRrlOGarXkOs+iW7Ra0P/gAen8n4RtDWK3ZLuNsqRCm+hP8r6PGb9rcCh4OgHVbslvAcRVxHywuO05pEyxXcmM6Cawx5Z9IcNSP4a5DBQd8YfGH5e7sjHnDeNg/QZXI2Wy6l12ivI5hjbcGn6xGXB/YUr9ZGcNAHTXql+ivWge9oDZT4t8dEhAFfOBr6G6+k8ZzBYqrqkqAdFA/IDfQwmPbWhnHa5z8wdbcOBU/nHxvoTp2YPznCAAAAAElFTkSuQmCC' alt=''>
              </img> 
            : 
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgBxVbJkdpAFP3SsB1xBnIERgcolsOICGwiMBOBIYKBCGYcweAIjCOwOLAfUAaDM8BHKBa/Z0tUD6hbmDnMr1LRdL/+r//abcmFMh6PHcuyPuG7xVfAlKMsB4fDYYlvgK9fqVSWl+i0kgAg9W5ubu4x9ORy8Xe7XReH8OUa8sVikd9sNk+0Vq6XXniIpVxKPhwOC+l0+ru8dO1VwnBst9tGrVYLTtfs04npdPoZxD8NxAPbthvAvCuVShZ/MXcHDwVxYMw7wCyo92xN/RNavNCQyn6/b5fL5UfdOgg6ILvXrSMEdTUPjuTMZiSW1uIk4kgmk0kLnnnQLK9wADfKgSP5bDajxQXNph5cfKcclBVANzqI6Qox7aoxhS4a4Wl0+dBV58AOwU0DMd3VFcWy0EPc47EaGKrRaNSKw8eIF2GtkPxZ9AkW4KSuyDE0zxrcC5cmeHKFA7+3Q6sd0csgGoC4ZcDlEetm3L447Hq9btLtXwwg1ulK+fshAVvQ7DsTHPQjyY2gE+W/ExTm5XLJ2yihHyYEEkpVGIhZAs2+M0F+fLWz2WxPzNbfRgMc1IiFwse4fafClovE7Nmu666g1FQaBdY1B8xkHZZNKMp0VoUYSjfS8bfOw87l68DhlSoK1sXpGS7e39/g4rra/RD7jugloNUcnLZX1mZsrNDF2tVq9VXtle6G1fXIQ8dbjROIWUOnNJVKPeDi0F4aScShAQ31bj+7z+GBJjzwJHoJmKm5XK7PfAkfHWyz7BeeZg+7Xztyt5ac8maPCQqBvHuZTPI64n4mk3HjiCmJD8j5fO5BSUcMdRsjA4ShUywWfRMokTwS5enM+Dqi9Hkc7pf8ez77//N0/gP6TGNxpu9IZQAAAABJRU5ErkJggg==' alt=''>
              </img> 
            }
          </span>
        </div>
        <div className={styles.signup_id_container}>
          <p></p>
          {matchpw && (
            <p className={styles.signup_error_msg}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
      </div>

      {/* 닉네임 부분 */}
      <div className={styles.signup_label}>
        <div className={styles.signup_id_container}>
          <p className={styles.signup_p}>닉네임</p>
          {/* <p className={styles.signup_check_p} onClick={showcheckMsg}>중복 확인하기</p> */}
        </div>
        <input type='text' className={styles.signup_input} value={nickname}
        onChange={handleFieldChange(setNickname)}/>
        <div className={styles.signup_id_container}>
          <p></p>
          {/* <p className={`${styles.signup_check_msg} ${checkMsg === 'block' ? styles.signup_check_msg_show : ''}`}>
            사용 가능한 닉네임입니다.
          </p> */}
            <p className={`${styles.signup_check_msg_sucess} ${isNickAvailable ? styles.signup_check_msg_sucess : ''}`}>
              {isNickAvailable ? '사용 가능한 닉네임입니다.' : ''}
           </p>
            <p className={`${styles.signup_check_msg} ${!isNickAvailable && checkMsg === 'block' ? styles.signup_check_msg_show : ''}`}>
              {!isNickAvailable ? '이미 사용 중인 닉네임입니다.' : ''}
          </p>
        </div>
      </div>

      {/* 생년월일 입력 부분 */}
      <div className={styles.signup_label}>
        <p className={styles.signup_p}>생년월일</p>
      </div>
      <div className={styles.signup_date_contanier}>
  <input 
    type='number' 
    placeholder='년(4자)' 
    className={styles.input_date} 
    value={birthYear} 
    onChange={handleFieldChange(setBirthYear)}
  />
  <select 
    className={styles.input_date2}  
    onChange={(e) => setBirthMonth(e.target.value)}
    value={birthMonth}
  >
    <option hidden>월</option>
    {Array.from({ length: 12 }, (_, index) => (
      <option key={index} value={`${index + 1}`}>{index + 1}월</option>
    ))}
  </select>
  <input 
    type='number' 
    placeholder='일' 
    className={styles.input_date} 
    value={birthDay}  
    onChange={handleFieldChange(setBirthDay)} 
  />
</div>

      {/* 성별 부분 */}
      <div className={styles.signup_label2}>
        <p className={styles.signup_p}>성별</p>
        <div className={styles.signup_gender}>
          <div className={styles.signup_gender2}>
            <input type="radio" 
                id="female" 
                name="gender" 
                value="female" 
                checked={gender === 'female'}
                className={styles.signup_radio} 
                onChange={handleFieldChange(setGender)}  />
            <label htmlFor="female" className={styles.signup_for}>여성</label>
          </div>
          <div className={styles.signup_gender2}>
            <input  
              type="radio" 
              id="male" 
              name="gender" 
              value="male" 
              checked={gender === 'male'} 
              className={styles.signup_radio} 
              onChange={handleFieldChange(setGender)} />
            <label htmlFor="male" className={styles.signup_for}>남성</label>
          </div>
        </div>
      </div>

      {/* 전화번호 부분 */}
      <div className={styles.signup_label2}>
        <p className={styles.signup_p}>휴대전화</p>
      </div>

      <div className={styles.signup_phone}>
        <input type='tel' className={styles.signup_input_phone} value={phoneNum} placeholder='전화번호 입력' 
        maxLength="11"
        // onChange={handleFieldChange(setPhoneNum)}
        onChange={(e) => setPhoneNum(e.target.value)}
        />
      <button className={styles.signup_btn_phone} 
       onClick={handlePhone}>인증번호 받기</button>
      </div> 


      <div className={styles.signup_phone}>
        <input
          type='text'
          className={styles.signup_input_phone2}
          placeholder='인증번호를 입력하세요'
          value={certified}
          onChange={e => setCertified(e.target.value)}
        />
        <button className={styles.signup_btn_phone2} onClick={checkNum}>확인</button>
      </div>

      {/* 회원가입 버튼 */}
      <button 
      className={`${styles.signup_btn} ${!btn ? styles.no_singup_Btn : styles.signup_btn}`}
      disabled={!btn} onClick={postUserData}>가입하기</button>
    </div>
  );
}