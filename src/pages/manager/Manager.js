import React, { useEffect, useState } from 'react';
import styles from './Manager.module.css';
import axios from 'axios';

const Manager = () => {
  const [expertCheck, setExpertCheck] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState({}); // 개별 항목의 완료 상태를 관리

  // 전문가 요청 리스트 가져오기
  const fetchExpertCheck = async () => {
    try {
      const response = await axios.get('http://52.78.131.56:8080/admin/expertCheck');
      setExpertCheck(response.data);
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다', error);
      alert('데이터를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpertCheck();
  }, []);

  // 관리자 승인 버튼
  const handleExpertAccept = async (id) => {
    try {
      const response = await axios.post(`http://52.78.131.56:8080/admin/changeIsExpert/${id}`);
      alert('승인되었습니다');
      // 해당 항목을 완료된 상태로 설정
      setCompleted((prev) => ({ ...prev, [id]: true }));
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다', error);
      alert('데이터를 불러오지 못했습니다.');
    }
  };

  return (
    <div>
      <div className={styles.pageText}>
        <p>관리자 페이지</p>
      </div>

      <div className={styles.boxUpTextBox}>
        <div className={styles.boxUpText}>
          <p>NUM</p>
          <p>ID</p>
          <p>NAME</p>
          <p>GENDER</p>
          <p>PHONE</p>
          <p>EMAIL</p>
          <p>BIRTH</p>
          <p>C-DATE</p>
          <p>U-DATE</p>
          <p>ISEXPERT</p>
          <p>STATUS</p>
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.stateBox}>
          {expertCheck.map((item, index) => (
            <div key={item.id} className={styles.stateText}>
              <div className={styles.item}>{index + 1}</div>
              <div className={styles.item}>{item.userId}</div>
              <div className={styles.item}>{item.name}</div>
              <div className={styles.item}>{item.gender}</div>
              <div className={styles.item}>{item.phone}</div>
              <div className={styles.item}>{item.email}</div>
              <div className={styles.item}>{item.birth}</div>
              <div className={styles.item}>{item.createDate}</div>
              <div className={styles.item}>{item.updateDate}</div>
              <div className={styles.item}>{item.isExpert ? 'Yes' : 'No'}</div>
              <button
                className={`${styles.item} ${item.isExpert ? styles.acceptbut : styles.rejectbut}`}
                onClick={() => handleExpertAccept(item.id)}
                disabled={completed[item.id]} // 완료된 항목은 버튼 비활성화
              >
                {completed[item.id] ? '완료' : (item.isExpert ? '수락' : '반려')}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Manager;
