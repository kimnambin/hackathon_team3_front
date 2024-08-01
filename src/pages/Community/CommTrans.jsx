import React, { useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import styles from '../Community/Comm.module.css';
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CategoryContext } from '../../components/Comm/Comm_context'; // import only CategoryContext


// 카테고리 매핑 객체
const categoryMapping = {
  '일반 고민': 'a',
  '진로/취업': 'b',
  '학교': 'c',
  '직장': 'd',
  '대인 관계': 'e',
  '썸/연애': 'f',
  '결혼/육아': 'g',
  '이별/이혼': 'h',
  '가족': 'i',
  '성 생활': 'j',
  '외모': 'k',
  '금전': 'l',
  'LGBT': 'm'
};


// label을 key로 변환하는 함수
const mapCategoryLabelToKey = (categoryLabel) => {
  return categoryMapping[categoryLabel] || 'unknown';
};


export default function CommTrans() {
  const navigate = useNavigate();
  const goToMain = () => { navigate('/') };
  const goToComm = () => { navigate('/comm_list') };

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [memberToken, setMemberToken] = useState('');
  const [role, setRole] = useState('');

  // 로그인을 위한 토큰 가져오기
  useEffect(() => {
    const memberToken = localStorage.getItem('memberToken');
    if (memberToken) {
      try {
        const decodedMemberToken = jwtDecode(memberToken);
        setRole(decodedMemberToken.role);
      } catch (error) {
        console.error('토큰 해독 실패', error);
      }
    }
  }, []);

  // CategoryContext에서 selectedCategory 값 가져오기
  const { selectedCategory ,getCategoryData } = useContext(CategoryContext);



useEffect(() => {
  const getPost = async () => {
    try {
      const response = await axios.get(`http://52.78.131.56:8080/general/post/${id}`);
      const postData = response.data;

      // 카테고리 레이블을 key로 변환
      const categoryKey = mapCategoryLabelToKey(postData.category);

      setPost(postData);
      console.log('가져온 게시글 데이터:', postData);
      setNewTitle(postData.title);
      setNewContent(postData.content);
      setNewCategory(categoryKey);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  getPost();
}, [id]);


const handleEdit = async () => {
  // 변환된 카테고리 키를 가져오기
  const categoryKey = mapCategoryLabelToKey(newCategory);

  console.log('수정할 내용들:', {
    title: newTitle,
    content: newContent,
    category: categoryKey, // 변환된 카테고리 키를 전달
  });

  try {
    await axios.put(
      `http://52.78.131.56:8080/general/post/${id}`,
      {
        title: newTitle,
        content: newContent,
        category: categoryKey, // 변환된 카테고리 키를 전달
      },
      {
        headers: { Authorization: `Bearer ${memberToken}` },
      }
    );

    alert('게시글이 성공적으로 수정되었습니다.');
    navigate(`/comm_trans/${id}`);
  } catch (error) {
    console.error('게시글 수정에 실패했습니다:', error);
    alert('게시글을 수정하지 못했습니다.');
  }
};


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>에러발생</p>;
  }

  if (!post) {
    return <p>게시글을 찾을 수 없다</p>;
  }

  return (
    <div className={styles.CommList_container}>
      {/* 왼쪽 */}
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>
          끄적여봐,<br />
          깊이 담긴 내면의 이야기들을<br />
          우리가 끄덕여줄게.
        </p>
        <p className={styles.CommList_left_p} onClick={goToComm}>고민 끄적끄적</p>
        <p className={styles.CommList_left_p2}>전문의 정보 끄적끄적</p>
      </div>

      {/* 오른쪽 부분 */}
      <div className={styles.CommList_right}>
        {/* 여기가 글 쓰는 부분 상단 */}
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>
            <span onClick={goToMain}>홈</span> <FaAngleRight /> <span onClick={goToComm}>커뮤니티</span> <FaAngleRight /><span onClick={goToComm}>고민 끄적끄적</span> <FaAngleRight />
          </p>
          <p className={styles.header_p2}>끄적이기</p>
        </div>

        {/* 글 쓰는 부분 메인 */}
        <div className={styles.write_container}>
          <h2 className={styles.CommList_left_h22} style={{ marginBottom: '40px' }}>고민 끄적끄적</h2>

          {/* 제목 부분 */}
          <div className={styles.write_header}>
            <p className={styles.write_title2}>제목</p>
            <input
              type='text'
              className={styles.write_input}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          {/* 내용 부분 */}
          <div className={styles.write_header2}>
            <p className={styles.write_title3}>본문</p>
            <textarea
              className={styles.write_textarea}
              placeholder='비하/욕설 등과 같은 게시글은 관리자에 의해 블라인드 처리될 수 있습니다.'
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </div>

          {/* 버튼 부분 */}
          <div className={styles.write_header3}>
            <button className={styles.cancell_btn} onClick={goToComm}>취소</button>
            <button className={styles.add_btn} onClick={handleEdit}>수정</button>
          </div>
        </div>
      </div>
    </div>
  );
}