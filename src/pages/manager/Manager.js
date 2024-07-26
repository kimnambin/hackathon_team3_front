import React, { useEffect, useState } from 'react';
import styles from './Manager.module.css';


const Manager = () => {
  const data = [
    {
      id: 1,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '20010101',
      phoneNumber: '01012345678',
      email: 'ghdrlfehd@naver.com',
      startDate: '20240719',
      endDate: '20240721',
      status: 'FALSE',
      approval: '수락'
    },
    {
      id: 2,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '19951225',
      phoneNumber: '01023456789',
      email: 'leesoonshin@naver.com',
      startDate: '20240720',
      endDate: '20240722',
      status: 'TRUE',
      approval: '승인'
    },
    {
      id: 3,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '19800101',
      phoneNumber: '01034567890',
      email: 'kimyushin@naver.com',
      startDate: '20240721',
      endDate: '20240723',
      status: 'FALSE',
      approval: '거절'
    },
    {
      id: 4,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '19921012',
      phoneNumber: '01045678901',
      email: 'parkbogum@naver.com',
      startDate: '20240722',
      endDate: '20240724',
      status: 'TRUE',
      approval: '승인'
    },
    {
      id: 5,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '19851018',
      phoneNumber: '01056789012',
      email: 'songjoongki@naver.com',
      startDate: '20240723',
      endDate: '20240725',
      status: 'FALSE',
      approval: '수락'
    },
    {
      id: 6,
      name: 'cccc',
      fullName: '홍길동',
      gender: 'male',
      birthDate: '19860923',
      phoneNumber: '01067890123',
      email: 'moonchaewon@naver.com',
      startDate: '20240724',
      endDate: '20240726',
      status: 'TRUE',
      approval: '승인'
    }
  ];

 

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
        {data.map((item) => (
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
