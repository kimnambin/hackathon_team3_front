// 로그인 부분 비빌번호 숨기고 보여주기 위함



import { useState } from 'react';

const usePWContext = () => {
  const [showPw, setShowPw] = useState(false); //비번 숨기고 보기
  const handlePw = () => setShowPw(prev => !prev);


  return [showPw, handlePw];
};

export default usePWContext;
