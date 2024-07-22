import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const [isLogined, setIsLogined] = useState(false);


  useEffect(() => {
    // 로그인 상태 확인 로직
    const LoginStatus = () => {
      const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLogined(loggedIn);
    };

    LoginStatus();
  }, []);

  return isLogined ? <Component /> : <Navigate to='/login' />;
};

export default PrivateRoute;
