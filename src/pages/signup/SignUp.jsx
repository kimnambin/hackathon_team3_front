import React, { useState } from 'react'
import './signup.module.css'
import 'pretendard/dist/web/static/pretendard.css';


export default function SignUp() {

    const [select , setSelect] = useState('직접 입력하기');

    

  return (
    <div className="signup_container">
      <h2 className='signup_h2'>회원가입</h2>

      {/* 아이디 부분 */}
      <div className='signup_label'>
        <p className='signup_p'>아이디</p>
        <input type='text' placeholder='아이디를 입력해주세요.' className='signup_input'></input>
      </div>

       {/* 성별 부분 */}
      <div className='signup_label'>
        <p className='signup_p'>성별</p>
        <div className='signup_gender'>
          <div className='signup_gender2'>
            <label htmlFor="female" className='signup_for'>여성</label>
            <input type="radio" id="female" name="gender" value="female"  className='signup_radio'/>
          </div> 

          <div className='signup_gender2'>
            <label htmlFor="male" className='signup_for'>남성</label>
            <input type="radio" id="male" name="gender" value="male"  className='signup_radio'/>
          </div> 
        </div>
      </div>

      {/* 생년월일 부분 */}
      <div className='signup_label'>
        <p className='signup_p'>생년월일</p>
        <input type='text' placeholder='생년월일 여섯 자리를 입력해 주세요. EX: 031128' className='signup_input'></input>
      </div> 

      
      {/* 이메일 부분 */}
      <div className='signup_label'>
        <p className='signup_p2'>이메일</p>
        <div className='signup_email'>
            <input type='text' placeholder='이메일을 입력해 주세요.' 
            className='signup_email_input'></input> 
            <p className='f2'>@</p>
                <select className='signup_select' value={select}>
                    <option value="직접 입력하기" disabled>력하기</option>
                    <option value="naver">naver.com</option>
                    <option value="gmail">gmail.com</option>
                    <option value="hanmail">hanmail.net</option>
                </select>

      
        </div>
      </div>

      {/* 비밀번호 부분 */}
       <div className='signup_label'>
        <p className='signup_p'>비밀번호</p>
        <input type='text' placeholder='비밀번호를 입력해 주세요.' className='signup_email_input2'></input>
      </div>   

       <button className='signup_btn'>가입하기</button>
    </div>
  )
}
