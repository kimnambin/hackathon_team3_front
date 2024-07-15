//이게 전문가 회원가입 

import React,{useState} from 'react'
import styles from './ProSignup.module.css'


export default function ProSignUp() {
  //체크 후 보이는 메시지 숨기는 용
  const [checkId, setCheckId] = useState('none');

  const showcheckId = () => {
    // 나중에 여기에 중복 체크하는 로직 넣어야 함
    setCheckId('block')
  }

  const [checkMsg, setCheckMsg] = useState('none');

  const showcheckMsg = () => {
    // 나중에 여기에 중복 체크하는 로직 넣어야 함
    setCheckMsg('block')
  }

  
  //비밀번호 확인 용
  const [pw , setPw] = useState(''); //첫번째 비밀번호 입력
  const [checkPW , setCheckPW] = useState(''); //비밀번호 재확인
  const [matchpw , setMatchPW] =useState(false); //비밀번호 일치 여부

  //첫번째 비번 
  const handlePW = (e) => {
    setPw(e.target.value)
    if(matchpw) setMatchPW(false) //비밀번호 일치하면 상태 변경
  }

  //두번째 비번
  const handleCheckPW = (e) => {
    setCheckPW(e.target.value)
    if(matchpw) setMatchPW(false) //비밀번호 일치하면 상태 변경
    //if (pw !== checkPW) setMatchPW(true);
  }

  //이게 일치 여부
  const handleSubmit = () => {
    if (pw !== checkPW) setMatchPW(true); // 비밀번호가 일치하지 않으면 상태변경
  };

  //휴대전화 부분 상태값
  const [phone , setPhone] = useState(true);

  const handlePhone = () => {
    //나중에 여기에 로직 구현해야 함
    setPhone(false)
  }
  // =================================================================

    return (

      // 전체 컨테이너
      <div className={styles.signup_container}>
        <h2 className={styles.signup_h2}>전문가 회원가입</h2>

        {/* 개인정보 수집 부분 */}
        <div className={styles.signup_checkbox_container}>
        <input type="checkbox"  className={styles.signup_checkbox} /> 
        <p className={styles.signup_checkbox_p}>  (필수) 개인정보 수집/이용 동의</p>
        </div>


        {/* 아이디 부분 */}
        <div className={styles.signup_label}>

        <div className={styles.signup_id_container}>
          <p className={styles.signup_p}>아이디</p>
          <p className={styles.signup_check_p}
          onClick={showcheckId}>중복 확인하기</p>
        </div>

          <input type='text' 
          className={styles.signup_input} />

        <div className={styles.signup_id_container}>
            <p></p>
          <p className={`${styles.signup_check_msg} ${checkId === 'block' ? styles.signup_check_msg_show : ''}`}>
          사용 가능한 아이디입니다.
          </p>
        </div>
      </div>


         {/* 비밀번호 부분 */}
         <div className={styles.signup_label}>

        <div className={styles.signup_pw_container}>  
          <p className={styles.signup_p2}>비밀번호</p> 
          <p className={styles.signup_pw_p}> 영문/숫자 포함 6자 이상 </p>
        </div>
          <input type='password'  className={styles.signup_input} 
          onChange={handlePW}/>

        {/* 비밀번호 재확인 */}
        <div className={styles.signup_pw_container2}>  
          <p className={styles.signup_p2}>비밀번호 재확인</p> 
        </div>
          <input type='password'  
          className={`${styles.signup_input} ${matchpw ? styles.input_error : ''}`}
          onChange={handleCheckPW}/>
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
          <p className={styles.signup_check_p}
          onClick={showcheckMsg}>중복 확인하기</p>
        </div>

          <input type='text' 
          className={styles.signup_input} />

        <div className={styles.signup_id_container}>
            <p></p>
          <p className={`${styles.signup_check_msg} ${checkMsg === 'block' ? styles.signup_check_msg_show : ''}`}>
          사용 가능한 닉네임입니다.
          </p>
        </div>
      </div>
         
      {/* 생년월일 부분 */}
      <div className={styles.signup_label}>
      <p className={styles.signup_p}>생년월일</p>
      </div>
      <div className={styles.signup_date_contanier}>
      <input type='number' placeholder='년(4자)' className={styles.input_date} />
      <select className={styles.input_date2}>
 
      <option style={{ color: 'red' }} hidden selected >월</option>
      {Array.from({ length: 12 }, (_, index) => (
       <option key={index} value={`Month ${index + 1}`}>{index + 1}월</option>
      ))}
</select>

      <input type='number' placeholder='일' className={styles.input_date} />
      </div>

        {/* 성별 부분 */}
        <div className={styles.signup_label2}>
          <p className={styles.signup_p}>성별</p>

          <div className={styles.signup_gender}>
            <div className={styles.signup_gender2}>
              <input type="radio" id="female" name="gender" value="female" className={styles.signup_radio} />
              <label htmlFor="female" className={styles.signup_for}>여성</label>
            </div>
  
            <div className={styles.signup_gender2}>
              <input type="radio" id="male" name="gender" value="male" className={styles.signup_radio} />
              <label htmlFor="male" className={styles.signup_for}>남성</label>
            </div>
          </div>
        </div>
  
       {/* 전화번호 부분 */}
       <div className={styles.signup_label2}>
       <p className={styles.signup_p}>휴대전화</p>
       </div>

      <div className={styles.signup_phone}>
      <input type='text' className={styles.signup_input_phone} placeholder='전화번호 입력' />
      <button className={styles.signup_btn_phone} onClick={handlePhone}>인증번호 받기</button>
      </div>

      <div className={styles.signup_phone}>
      <input type='text' className={styles.signup_input_phone2} placeholder='인증번호를 입력하세요' disabled={phone}/>
      <button className={styles.signup_btn_phone2} disabled={phone}>확인</button>
      </div>

      {/* 첨부파일 부분 */}
      <div className={styles.signup_label2}>
      <p className={styles.signup_p}>첨부파일</p>
      </div>

      <div className={styles.signup_phone}>
      <div className={styles.file_container}>
  <label htmlFor="file">파일을 업로드하세요
  <input type="file" id="file"  className={styles.file_container}/></label>
</div>

      <button className={styles.signup_btn_phone} onClick={handlePhone}>업로드</button>
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
      <button className={styles.signup_btn} onClick={handleSubmit}>가입하기</button>

      </div>
    );
}
