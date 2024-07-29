import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import styles from '../Comm.module.css';
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ProCommView() {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const navigate = useNavigate();
  const proToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3bmdsMTIzIiwiaWF0IjoxNzIxODI4MjA4LCJyb2xlIjoiRXhwZXJ0IiwiZXhwIjoxNzIxODMxODA4fQ.9IZnTQVTHd0OKxrDwyPUu72DAaTIEKXFK9hu7Md45JAr8ZR8yUKphDKXIxshvxOVa2-Ojrpvh05HUQWRN5bWrA';

  const [role, setRole] = useState(null);
  const [proDetail, setProDetail] = useState({});
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');


  //전문가 토큰
  useEffect(() => {
    if (proToken) {
      const decodedToken = jwtDecode(proToken);
      setRole(decodedToken.role);
    }
  }, [proToken]);

  useEffect(() => {
    fetchPost(); // 컴포넌트 마운트 시 게시글 불러오기
  }, [id]); // id이 변경될 때마다 호출

  //게시글 불러오기
  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://52.78.131.56:8080/expert/post/${id}`, {
        headers: { Authorization: `Bearer ${proToken}` },
      });
      setProDetail(response.data);
      setNewTitle(response.data.title); // 초기 제목 설정
      setNewContent(response.data.content); // 초기 내용 설정
    } catch (error) {
      console.error('게시글을 불러오는 데 실패했습니다', error);
      alert('게시글을 불러오지 못했습니다.');
    }
  };

  //게시글 수정
  const handleEdit = async () => {
    try {
      await axios.put(`http://52.78.131.56:8080/expert/post/${id}`, {
        title: newTitle,
        content: newContent,
      }, {
        headers: { Authorization: `Bearer ${proToken}` },
      });
      alert('게시글이 성공적으로 수정되었습니다.');
      fetchPost(); // 수정 후 게시글 새로고침
    } catch (error) {
      console.error('게시글 수정에 실패했습니다', error);
      alert('게시글을 수정하지 못했습니다.');
    }
  };

  //게시글 삭제
  const handleDelete = async () => {
    try {
      await axios.delete(`http://52.78.131.56:8080/expert/post/${id}`, {
        headers: { Authorization: `Bearer ${proToken}` },
      });
      alert('게시글이 성공적으로 삭제되었습니다.');
      navigate('/pro_comm_list'); // 게시글 삭제 후 리스트 페이지로 리디렉션
    } catch (error) {
      console.error('게시글 삭제에 실패했습니다', error);
      alert('게시글을 삭제하지 못했습니다.');
    }
  };

  return (
    <div className={styles.CommList_container}>
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>끄적여봐,<br/>
          깊이 담긴 내면의 이야기들을<br/>
          우리가 끄덕여줄게.</p>
        <Link to='/comm_list' style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className={styles.CommList_left_p2}>고민 끄적끄적</p>
        </Link>
        <p className={styles.CommList_left_p}>전문의 정보 끄적끄적</p>
      </div>

      <div className={styles.view_right}>
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>홈 <FaAngleRight /> 커뮤니티 <FaAngleRight /> 고민 끄적끄적 <FaAngleRight /></p>
          <p className={styles.header_p2}>전문의 정보 끄적끄적</p> 
        </div>

        <div className={styles.view_line}></div>

        <div className={styles.CommList_right}>
          <div className={styles.view_title}>
            <h4 className={styles.view_h4}>{proDetail.title || '제목 없음'}</h4>
            <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt='북마크 아이콘'/>
          </div>

          <div className={styles.view_nick}>
            <img className={styles.view_img} alt='' src='./img/profile.jpg'/>
            <p className={styles.view_pro_p}>{proDetail.writer || '닉네임 없음'}</p>
            <p className={styles.view_p2}>{proDetail.createDate || '날짜 없음'}</p>
            <p className={styles.view_p3} onClick={handleEdit}>수정</p>
            <p className={styles.view_p3} onClick={handleDelete}>삭제</p>
          </div>

          <div className={styles.view_content}>
            {proDetail.content || '내용 없음'}
          </div>

          <button className={styles.view_btn}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgBzVPRUcMwDLVz/ONsUCYgbFBG6AQtExAmaDsBZQK6QcsEbSagTEAmSMwCCe+5Sk+4aY7P6u6dLOdZepJjY67N7NBH59zYWvvetm2JcAnMETvET977w78TpWn6rcIRUHY16rpONTcxw+YADwUT+EI8zcfEm6EsbAGtbKS9CddUphKeLLSGWWRS3aD3/R9Jzs2YSCcHZ31WlQPFLFqFDQ8DI52M3+jNBbNyMztUeoF/jVpbwX1JWMZqtekZHeQwr3mbJEkOn0fqmfhDn0HyMPjeW+M/UlXVDEnvBA9QuwRyqleokXweKzJR9Z2Om6YxOBhUcAxcIH4GFuD+9ClyQjozc/yXCpkVW8rEb0+KMJMpSKEKKtxivegbLi8HWIM3RViC9wheyVvLsPmpuAVwL8q8kD3fmDk+k7CP+A3trrph2wvzIXlM4EAm23wqPLRnK12C67VfVemwXp4OOFYAAAAASUVORK5CYII=' alt=''
            className={styles.view_icon}/>
            끄덕임 0개
          </button>
        </div>

        <div className={styles.view_comment}>
          <input placeholder='댓글을 통해 따뜻한 손길을 건네보세요.' className={styles.view_input}/>
          <button className={styles.add_btn}>등록하기</button>
        </div>

        <div className={styles.view_show_comment}>
          {/* 댓글 부분 - 예시 */}
          <div className={styles.view_nick}>
            <img className={styles.show_comment_img} alt='' src='./img/profile.jpg'/>
            <p className={styles.view_p}>여기에 닉네임</p>
            <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
          </div>
          <div className={styles.view_comment}>
            20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br/>
            가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br/>
            기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br/>
            조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br/>
            게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br/>
            만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br/>
            해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
          </div>
          {/* 추가 댓글 예시 */}
          <div className={styles.view_nick}>
            <img className={styles.show_comment_img} alt='' src='./img/profile.jpg'/>
            <p className={styles.view_p}>여기에 닉네임</p>
            <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
          </div>
          <div className={styles.view_comment}>
            20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br/>
            가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br/>
            기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br/>
            조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br/>
            게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br/>
            만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br/>
            해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
          </div>
        </div>
      </div>
    </div>
  );
}
