import { useState } from 'react';

const usePWContext = () => {
  const [showPw, setShowPw] = useState({
    type: 'password',
    visible: false,
  });

  const [showPw2, setShowPw2] = useState({
    type: 'password',
    visible: false,
  });

  const handlePw = () => {
    setShowPw(prevState => {
      return {
        type: prevState.visible ? 'password' : 'text',
        visible: !prevState.visible,
      };
    });
  };

  const handlePw2 = () => {
    setShowPw2(prevState => {
      return {
        type: prevState.visible ? 'password' : 'text',
        visible: !prevState.visible,
      };
    });
  };

  return [showPw, handlePw, showPw2, handlePw2];
};

export default usePWContext;
