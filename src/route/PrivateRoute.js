import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로그인 상태 확인 로직
    const checkLoginStatus = () => {
      const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLogined(loggedIn);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLogined ? <Component /> : <Navigate to='/login' />;
};

export default PrivateRoute;
