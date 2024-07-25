import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Manager.module.css';
import axios from 'axios';

const Manager = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getProUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Pro_login');
        setUserInfo(response.data);
      } catch (error) {
        console.error('로그인 요청 에러:', error);
        alert('서버와 연결하는 데 문제가 발생했습니다.');
      }
    };

    getProUser();
  }, []);

  return (
    <div>
      <div className={styles.pageText}>
        <p>관리자 페이지</p>
      </div>

      <div className={styles.boxUpTextBox}>
        <div className={styles.boxUpText}>
          <p>NUM</p>
          <p>ID</p>
          <p>GENDER</p>
          <p>BIRTH</p>
          <p>PHONE</p>
          <p>EMAIL</p>
          <p>C-DATE</p>
          <p>U-DATE</p>
          <p>ISEXPERT</p>
          <p>STATUS</p>
        </div>
      </div>
      <div className={styles.stateBox}>
        {userInfo && userInfo.map((item) => (
          <div key={item.id} className={styles.stateText}>
            <div className={styles.item}>{item.id}</div>
            <div className={styles.item}>{item.name}</div>
            <div className={styles.item}>{item.gender}</div>
            <div className={styles.item}>{item.birthDate}</div>
            <div className={styles.item}>{item.phoneNumber}</div>
            <div className={styles.item}>{item.email}</div>
            <div className={styles.item}>{item.startDate}</div>
            <div className={styles.item}>{item.endDate}</div>
            <div className={styles.item}>{item.status}</div>
            <button className={styles.item}>{item.approval}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manager;
