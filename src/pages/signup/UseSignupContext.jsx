import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useSignupContext() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gender, setGender] = useState('');
  const [pw, setPw] = useState('');
  const [checkPW, setCheckPW] = useState('');
  const [matchpw, setMatchPW] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [num, setNum] = useState(false);
  const [certified, setCertified] = useState('');
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [isNickAvailable, setIsNickAvailable] = useState(false);
  const [agree, setAgree] = useState(false);
  const [checkId, setCheckId] = useState('none');
  const [checkMsg, setCheckMsg] = useState('none');
  const [randomNum, setRandomNum] = useState('')

   // 입력이 되기 위함
   const handleFieldChange = (setter) => (e) => setter(e.target.value);
   
  const handlePw = () => setShowPw(prev => !prev);
  const handlePw2 = () => setShowPw2(prev => !prev);

  const handlePW02 = e => {
    setPw(e.target.value);
    if (pw === checkPW) setMatchPW(false);
  };

  const handleCheckPW = e => {
    setCheckPW(e.target.value);
    setMatchPW(pw !== e.target.value);
  };

  // 휴대폰 인증번호 보내기 
  const handlePhone = async () => {
    setNum(true);
    try {
      const response = await axios.post('http://52.78.131.56:8080/check/sendSMS', { phoneNumber: phoneNum });
      if (response.status === 200) {
        alert('SMS 발송 요청이 성공적으로 처리되었습니다.');
        setRandomNum(response.data.randomNumber);  // 서버로부터 랜덤번호를 받아서 상태에 저장
      } else {
        alert('SMS 발송 요청에 실패하였습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    } finally {
      setNum(false);
    }
  };

  // 인증번호 확인
  const checkNum = async () => {
    try {
      const phoneNumStr = String(phoneNum);
      const certifiedStr = String(certified);

      const response = await axios.post('http://52.78.131.56:8080/check/certification', {
        phoneNumber: phoneNumStr,
        randomNumber: certifiedStr
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('인증 성공');
        setCertified(true);  // 인증 성공 시 certified 값을 true로 설정
      } else {
        alert('인증 실패');
      }
    } catch (error) {
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    } finally {
      setNum(false);
    }
  };

  // 아이디 중복확인
const showcheckId = async () => {
  if (!userId) {
    alert('사용자 ID를 입력해 주세요.');
    return;
  }

  try {
    const response = await axios.get(`http://52.78.131.56:8080/signup/checkId/${userId}`);
    const message = response.data;

    if (typeof message === 'string') {
      if (message === '사용 가능한 아이디입니다.') {
        setCheckId('none');
        setIsIdAvailable(true);
      } else if (message === '이미 사용 중인 아이디입니다.' || message === '이미 존재하는 아이디 입니다.') {
        setCheckId('block');
        setIsIdAvailable(false);
      } else {
        console.error('알 수 없는 응답 메시지:', message);
        setCheckId('none');
        setIsIdAvailable(false);
      }
    } else {
      console.error('서버 응답 데이터가 예상과 다릅니다:', message);
      setCheckId('none');
      setIsIdAvailable(false);
    }
    } catch (error) {
      console.error('API 호출 에러:', error);
      console.error('에러 응답 데이터:', error.response?.data);
      console.error('에러 메시지:', error.message);
      setCheckId('none');
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
  };
  
   // 닉네임 중복확인
const showcheckMsg = async () => {
  if (!userId || !nickname) {
    alert('아이디와 닉네임을 입력해 주세요.');
    return;
  }

  try {
    const response = await axios.get(`http://52.78.131.56:8080/signup/checkId/${userId}`);

    // 응답 데이터 로그 출력
    console.log('API 응답 데이터:', response.data);

    const data = response.data;

    // 서버 응답이 문자열일 경우 처리
    if (typeof data === 'string') {
      // 문자열 값에 따라 처리
      if (data === '사용 가능한 아이디입니다.' || data === '사용 가능한 닉네임입니다.') {
        setCheckMsg('none');
        setIsNickAvailable(true);
      } else if (data === '이미 사용 중인 아이디입니다.' || data === '이미 존재하는 아이디 입니다.' || data === '이미 사용 중인 닉네임입니다.' || data === '이미 존재하는 닉네임 입니다.') {
        setCheckMsg('block');
        setIsNickAvailable(false);
      } else {
        console.error('알 수 없는 응답 메시지:', data);
        setCheckMsg('none');
        setIsNickAvailable(false);
      }
    }
    // 서버 응답이 객체일 경우 처리
    else if (typeof data === 'object' && data !== null) {
      // 예를 들어, 응답이 { message: '사용 가능한 닉네임입니다.' } 형태일 경우
      if (data.message) {
        if (data.message === '사용 가능한 닉네임입니다.' || data.message === '사용 가능한 아이디입니다.') {
          setCheckMsg('none');
          setIsNickAvailable(true);
        } else if (data.message === '이미 사용 중인 닉네임입니다.' || data.message === '이미 존재하는 닉네임 입니다.' || data.message === '이미 사용 중인 아이디입니다.' || data.message === '이미 존재하는 아이디 입니다.') {
          setCheckMsg('block');
          setIsNickAvailable(false);
        } else {
          console.error('알 수 없는 응답 메시지:', data.message);
          setCheckMsg('none');
          setIsNickAvailable(false);
        }
      } else {
        console.error('서버 응답 데이터가 예상과 다릅니다:', data);
        setCheckMsg('none');
        setIsNickAvailable(false);
      }
    }
    // 서버 응답이 배열일 경우 처리
    else if (Array.isArray(data)) {
      // 예를 들어, 응답이 [{ nickname: 'example' }, { nickname: 'test' }] 형태일 경우
      const isDuplicate = data.some(item => item.nickname === nickname);
      setCheckMsg(isDuplicate ? 'block' : 'none');
      setIsNickAvailable(!isDuplicate);
    } else {
      console.error('서버 응답 데이터가 예상과 다릅니다:', data);
      setCheckMsg('none');
      setIsNickAvailable(false);
    }

  } catch (error) {
    console.error('API 호출 에러:', error);
    console.error('에러 응답 데이터:', error.response?.data);
    console.error('에러 메시지:', error.message);
    setCheckMsg('none');
    alert('서버와 연결하는 데 문제가 발생했습니다.');
  }
};


  //필수항목 동의 
  const handleAgree = () => {
    console.log('동의 클릭');
    setAgree(!agree);
  };

   // 버튼 초기에 비활성화
   const btn = 
    agree &&
   userId !== '' && 
   nickname !== '' && 
   birthYear !== '' && 
   birthMonth !== '' && 
   birthDay !== '' && 
   gender !== '' && 
   pw !== '' && 
   checkPW !== '' &&
   phoneNum !== '' && 
   certified !== '';

   const postUserData = async () => {
    if (pw !== checkPW) {
      setMatchPW(true);
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    const birth = `${birthYear}${birthMonth.padStart(2, '0')}${birthDay.padStart(2, '0')}`;
  
    const birthRegex = /^\d{4}\d{2}\d{2}$/;
    if (!birthRegex.test(birth)) {
      alert('생년월일 형식이 올바르지 않습니다.');
      return;
    }
  
    try {
      const response = await fetch('http://52.78.131.56:8080/signup/general', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          nickname,
          password: pw,
          birth,
          gender,
          phoneNum
        })
      });
  
      const confirmed = window.confirm('회원가입이 완료되었습니다. 메인 페이지로 이동하시겠습니까?');
      if (confirmed) navigate('/');
    } catch (error) {
      alert(`회원가입 중 오류가 발생했습니다: ${error.message}`);
    }
  };
  
  
  

  return {
    userId, setUserId, nickname, setNickname, birthYear, setBirthYear,
    birthMonth, setBirthMonth, birthDay, setBirthDay, gender, setGender,
    checkId, setCheckId, showcheckId, checkMsg, setCheckMsg, showcheckMsg,
    pw, setPw, checkPW, setCheckPW, matchpw, setMatchPW, handlePW02, handleCheckPW,
    phoneNum, setPhoneNum, num, setNum, handlePhone, showPw, handlePw, showPw2,
    handlePw2, postUserData, handleFieldChange, isIdAvailable, setIsIdAvailable,
    isNickAvailable, setIsNickAvailable, btn, agree, setAgree,
    handleAgree, certified, setCertified, checkNum
  };
}
