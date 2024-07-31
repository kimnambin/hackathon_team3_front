import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // 올바른 import
import styles from '../Community/Comm.module.css';
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProCommWrite() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const goToComm = () => { navigate('/comm_list') };


  //로그인 토큰 가져오기
  useEffect(() => {
    const memberToken = localStorage.getItem('memberToken');
    if (memberToken) {
      try {
        const decodedmemberToken = jwtDecode(memberToken);
        setRole(decodedmemberToken.role);
      } catch (error) {
        console.error('토큰 해독 실패', error);
      }
    }
  }, []);
  //=============================================================

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = async () => {
    if (role === 'Expert') {
      alert('전문가는 일반 게시판에 글을 작성할 수 없습니다. 전문가 정보를 작성해 주세요.');
      return;
    }

    try {
      await axios.post('http://52.78.131.56:8080/general/post', {
        title,
        content,
        token: localStorage.getItem('memberToken'),
        category,
      });
      alert('게시물이 성공적으로 작성되었습니다.');
      navigate('/comm_list'); // 작성 후 리다이렉트
    } catch (error) {
      console.error('데이터 제출 실패', error);
      alert('데이터 제출에 실패했습니다.');
    }
  };

  return (
    <div className={styles.CommList_container}>
      {/* 왼쪽 사이드 */}
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>
          기록하세요,<br />
          깊은 이야기들이 담긴<br />
          우리는 고개를 끄덕일 거예요.
        </p>
        <p className={styles.CommList_left_p} onClick={() => navigate('/comm_list')}>고민 끄적끄적</p>
        <p className={styles.CommList_left_p2}>전문의 정보 끄적끄적</p>
      </div>

      {/* 오른쪽 사이드 */}
      <div className={styles.CommList_right}>
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>
            <span onClick={() => navigate('/')}>홈</span> <FaAngleRight /> <span onClick={() => navigate('/comm_list')}>커뮤니티</span> <FaAngleRight /> <span onClick={goToComm}>고민 끄적끄적</span> <FaAngleRight />
          </p>
          <p className={styles.header_p2}>작성하기</p>
        </div>

        <div className={styles.write_container}>
          <h2 className={styles.CommList_left_h22} style={{ marginBottom: '40px' }}>고민 끄적끄적</h2>
          
          <div className={styles.write_header}>
            <p className={styles.write_title2}>제목</p>
            <input 
              type='text' 
              className={styles.write_input} 
              value={title} 
              onChange={handleTitleChange} 
            />
          </div>

          <div className={styles.write_header2}>
            <p className={styles.write_title3}>내용</p>
            <textarea 
              className={styles.write_textarea} 
              placeholder='부적절한 내용은 관리자가 숨길 수 있습니다.' 
              value={content} 
              onChange={handleContentChange} 
            />
          </div>

          <div className={styles.write_header3}>
            <button className={styles.cancell_btn} onClick={() => navigate('/comm_list')}>취소</button>
            <button className={styles.add_btn} onClick={handleSubmit}>제출</button>
          </div>
        </div>
      </div>
    </div>
  );
}

