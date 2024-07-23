import { useState } from 'react';

export default function UseSignupContext() {
  // 입력값들 (아이디)
  const [userId, setUserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gender, setGender] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  // 입력값들 (비번)
  const [pw, setPw] = useState('');
  const [checkPW, setCheckPW] = useState('');
  const [matchpw, setMatchPW] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  //입력이 되기 위함
  const handleFieldChange = (setter) => (e) => setter(e.target.value);

  // 비밀번호 숨기고 보기용
  const handlePw = () => setShowPw(prev => !prev);
  const handlePw2 = () => setShowPw2(prev => !prev);

  //첫번째 비번
  const handlePW02 = (e) => {
    setPw(e.target.value);
    if (pw === checkPW) setMatchPW(false); 
  };

  //2번째 비번
  const handleCheckPW = (e) => {
    setCheckPW(e.target.value);
    if (pw === e.target.value) setMatchPW(false);
    else setMatchPW(true); 
  };

  //폰
  const [phone, setPhone] = useState('');
  const handlePhone = () => {
    // 나중에 문자랑 같은 지 확인하는 로직 추가해야함
  };

  // 중복체크
  const [checkId, setCheckId] = useState('none');
  const showcheckId = () => setCheckId('block');

  const [checkMsg, setCheckMsg] = useState('none');
  const showcheckMsg = () => setCheckMsg('block');

  // 서버로 포스트
  const postUserData = () => {
    if (pw !== checkPW) {
      setMatchPW(true);
      alert('다시 확인해주세요');
    }

    fetch('http://localhost:8080/postUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        nickname,
        password: pw,
        birthYear: `${birthYear}-${birthMonth}-${birthDay}`,
        gender,
        phone,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('서버 응답:', data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });

      alert('회원가입이 완료되었습니다.')
  };

  return {
    userId, setUserId,
    nickname, setNickname,
    birthYear, setBirthYear,
    birthMonth, setBirthMonth,
    birthDay, setBirthDay,
    gender, setGender,
    verificationCode, setVerificationCode,
    checkId, setCheckId, showcheckId,
    checkMsg, setCheckMsg, showcheckMsg,
    pw, setPw,
    checkPW, setCheckPW,
    matchpw, setMatchPW,
    handlePW02, handleCheckPW,
    phone, setPhone,
    handlePhone,
    showPw, handlePw,
    showPw2, handlePw2,
    postUserData,handleFieldChange
  };
}
