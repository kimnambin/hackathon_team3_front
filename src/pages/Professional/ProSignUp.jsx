import React, { useState } from 'react';
import styles from './ProSignup.module.css';
import ProSignupContext from './ProSignupContext';

export default function ProSignUp() {
  const {
    userId, setUserId, nickname, setNickname, birthYear, setBirthYear,
    birthMonth, setBirthMonth, birthDay, setBirthDay, gender, setGender,
    checkId, setCheckId, showcheckId, checkMsg, setCheckMsg, showcheckMsg,
    pw, setPw, checkPW, setCheckPW, matchpw, setMatchPW, handlePW02,
    handleCheckPW, phoneNum, setPhoneNum, handlePhone, showPw, setShowPw,
    num, setNum, showPw2, setShowPw2, handlePw, handlePw2, postProData,
    handleFieldChange, isIdAvailable, setIsIdAvailable, isNickAvailable,
    setIsNickAvailable, btn, agree, setAgree, handleAgree, certified, setCertified ,
    email , setEmail , image , setImage , handleFile , handleFileUpload, checkNum, setFile, file
  } = ProSignupContext();

  return (
    <div className={styles.signup_container}>
      <h2 className={styles.signup_h2}>전문가 회원가입</h2>

      {/* 개인정보 수집 부분 */}
      <div className={styles.signup_checkbox_container}>
        <input type="checkbox" className={styles.signup_checkbox} value={!agree} onClick={handleAgree}/>
        <p className={styles.signup_checkbox_p}>  (필수) 개인정보 수집/이용 동의</p>
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
        <div className={styles.signup_label_Nick}>

        <div className={styles.signup_id_container}>
          <p className={styles.signup_p}>닉네임</p>
          {/* <p className={styles.signup_check_p}
          onClick={showcheckMsg}>중복 확인하기</p> */}
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
  

      {/* 이메일 부분 */}
      <div className={styles.signup_email}>

    <div className={styles.signup_pw_container}>  
        <p className={styles.signup_p2}>이메일</p> 
      </div>
  <div className={styles.search}>
  <input 
    type='text'
    className={styles.inputField2}
    value={email} 
        onChange={handleFieldChange(setEmail)}
    />
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


      {/* 첨부파일 부분 */}
      <div className={styles.signup_label2}>
      <p className={styles.signup_pp0}>첨부파일</p>
      </div>
      <p className={styles.signup_pp}>파일 업로드 시 약 5초 정도 소요됩니다.</p>

      <div className={styles.signup_phone}>
      <div className={styles.file_container}>
        <label htmlFor="file" className={styles.file_container2} vlaue={image}>{image ? image.name : '이미지 파일을 업로드하세요'}
        <input type="file" id="file"  accept="image/*" className={styles.file_container} onChange={handleFile}/></label>
      </div>

      <button className={styles.signup_btn_phone} onClick={handleFileUpload}>업로드</button>
      </div>
    
    <div className={styles.file_container_text}>
      <p className={styles.file_p}>
      심리학 전문의 또는 심리학 자격증을 보유한 경우<br/>
      전문가로 가입이 가능하며,<br/>
      가입 시 필요한 서류 하나를 제출하여야 합니다. </p>
      
      <p className={styles.file_p2}>
      가입 시 승인 가능한<br/>
      심리학 자격증, 심리학 면허 종류를 확인해주시길 바랍니다. </p>

      <div className={styles.p_container}>
      직업상담사 1급, 2급 (국가기술자격증)<br/> 
      청소년 상담사<br/> 
      정신보건임상심리사 1급, 2급 자격증(국가자격증)<br/> 
      임상심리사 1급, 2급 (국가/학회자격증) & 임상심리전문가 (학회자격증 - 석사이상)<br/> 
      상담심리사 (2급) (학회자격증) & 상담심리전문가 (1급) (학회자격증 - 대학원생)<br/> 
      발달심리사 1급 및 2급 (학회자격증) & 발달심리전문가 (학회자격증 - 석사이상)<br/> 
      산업 및 조직심리사 (학회자격증)<br/> 
      1급, 2급 범죄심리사 (학회자격증) & 범죄심리전문가 (학회자격증 - 석사이상)<br/> 
      건강심리사 (학회자격증) & 건강심리전문가 (학회자격증 - 석사이상)<br/> 
      인지학습심리사 (학회자격증) & 인지학습심리전문가 (학회자격증 - 석사이상)<br/> 
      놀이심리상담사, 놀이치료사, 놀이치료전문가, 놀이치료 교육전문가<br/> 
      수련감독 미술치료전문가, 미술치료사, 미술치료전문가, 미술치료사<br/>  
      예술치료 수련감독전문가, 예술치료전문가, 예술치료사 1급, 2급<br/> 
      독서치료전문가, 독서치료사 1급, 2급<br/> 
      임상예술심리상담사 1급, 2급, 3급
        </div> 

      <p className={styles.file_p3}>도용 및 위조 시 형사 처벌을 받을 수 있습니다.</p>

      <p className={styles.file_p4}>
       가입 후 관리자의 승인까지 1~3일 소요되며,<br/>
       승인 전까지 일반회 원으로 활동이 가능합니다.<br/>
       승인 후 입력하신 전화번호로 문자 알림이 전송 됩니다.</p>
    </div>


      {/* 마지막 버튼 부분 */}
      <button 
      className={`${!btn ? styles.no_singup_Btn : styles.signup_btn}`}
      disabled={!btn} onClick={postProData}>가입하기</button>

      </div>
    );
}