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
  const [randomNum, setrandomNum]= useState('')


  const handleFieldChange = setter => e => setter(e.target.value);
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

  const handlePhone = async () => {
    setNum(true);
    try {
      const response = await axios.post('http://52.78.131.56:8080/check/sendSMS', { phoneNumber: phoneNum });
      if (response.status === 200) {
        alert('SMS 발송 요청이 성공적으로 처리되었습니다.');
      } else {
        alert('SMS 발송 요청에 실패하였습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    } finally {
      setNum(false);
    }
  };

  // // 인증번호 확인 함수
  // const phoneNumber = "01084624534";  // 예시 전화번호
  // const certified1 = "394623";    // 예시 인증번호
  
  const checkNum = async () => {
    if (!phoneNum || !certified) {
      alert('전화번호와 인증번호를 입력해 주세요.');
      return;
    }
  
    try {
      const response = await axios.get('http://52.78.131.56:8080/check/certification', {
        params: {
          phoneNumber: phoneNum,  // 사용자 입력 전화번호
          randomNumber: certified // 입력된 인증번호
        }
      });
  
      if (response.status === 200) {
        alert('인증 성공');
      } else {
        alert('인증 실패');
      }
    } catch (error) {
      console.error('API 호출 에러:', error);
      console.error('에러 응답 데이터:', error.response?.data);
      console.error('에러 메시지:', error.message);
      alert('인증 실패');
    }
  };
  

//아이디 중복확인
  const showcheckId = async () => {
    if (!userId) {
      alert('사용자 ID를 입력해 주세요.');
      return;
    }
  
    try {
      const response = await axios.get(`http://52.78.131.56:8080/signup/checkId/${userId}`);
  
      const message = response.data;
  
      // 서버 응답이 문자열일 경우 처리
      if (typeof message === 'string') {
        if (message === '사용 가능한 아이디입니다.') {
          setCheckId('none');
          setIsIdAvailable(true);
        } else if (message === '이미 사용 중인 아이디입니다.') {
          setCheckId('block');
          setIsIdAvailable(false);
        } else {
          setCheckId('none');
          setIsIdAvailable(false);
        }
      } else {
        setCheckId('none');
        setIsIdAvailable(false);
      }
  
    } catch (error) {
      setCheckId('none');
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
  };
  
//닉네임 중복확인
  const showcheckMsg = async () => {
    if (!userId || !nickname) {
      alert('아이디와 닉네임을 입력해 주세요.');
      return;
    }
  
    try {
      const response = await axios.get(`http://52.78.131.56:8080/signup/checkId/${userId}`);
  
      const data = response.data;
  
      // 서버 응답이 문자열일 경우 처리
      if (typeof data === 'string') {
        // 문자열 값에 따라 처리
        if (data === '사용 가능한 아이디입니다.') {
          setCheckMsg('none');
          setIsNickAvailable(true);
        } else if (data === '이미 사용 중인 아이디입니다.') {
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
          if (data.message === '사용 가능한 닉네임입니다.') {
            setCheckMsg('none');
            setIsNickAvailable(true);
          } else if (data.message === '이미 사용 중인 닉네임입니다.') {
            setCheckMsg('block');
            setIsNickAvailable(false);
          } else {
            setCheckMsg('none');
            setIsNickAvailable(false);
          }
        } else {
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
      }
      else {
        setCheckMsg('none');
        setIsNickAvailable(false);
      }
  
    } catch (error) {
      setCheckMsg('none');
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
  };
  

  const handleAgree = () => setAgree(!agree);

  const btnEnabled = agree && userId && nickname && birthYear && birthMonth && birthDay && gender && pw && checkPW && phoneNum && certified;

  const postUserData = async () => {
    if (pw !== checkPW) {
      setMatchPW(true);
      alert('비밀번호가 일치하지 않습니다.');
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
          birth: `${birthYear}-${birthMonth}-${birthDay}`,
          gender,
          phoneNum
        })
      });

      if (!response.ok) throw new Error('회원가입 요청이 실패했습니다.');

      const data = await response.json();
      const confirmed = window.confirm('회원가입이 완료되었습니다. 로그인 페이지로 이동하시겠습니까?');
      if (confirmed) navigate('/login');
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return {
    userId, setUserId, nickname, setNickname, birthYear, setBirthYear,
    birthMonth, setBirthMonth, birthDay, setBirthDay, gender, setGender,
    checkId, setCheckId, showcheckId, checkMsg, setCheckMsg, showcheckMsg,
    pw, setPw, checkPW, setCheckPW, matchpw, setMatchPW, handlePW02, handleCheckPW,
    phoneNum, setPhoneNum, num, setNum, handlePhone, showPw, handlePw, showPw2,
    handlePw2, postUserData, handleFieldChange, isIdAvailable, setIsIdAvailable,
    isNickAvailable, setIsNickAvailable, btnEnabled: btnEnabled, agree, setAgree,
    handleAgree, certified, setCertified, checkNum
  };
}
