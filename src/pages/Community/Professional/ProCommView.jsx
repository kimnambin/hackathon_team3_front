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
  const [role, setRole] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(''); //댓글 달기
  const [comments, setComments] = useState([]); // 댓글 보기
  const [save ,setSave] = useState(false); //게시글 저장
  const [loginId , setLoginId] = useState(''); //현재 로그인 한 아이디 보기용

  //끄적이기 로그인 여부 확인 계속 true 상태, 오류 잡아야 됨
  const [isLogined, setIsLogined] = useState(false);
  
  
  useEffect(() => {
      const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLogined(loggedIn);
  }, []);

  //로그인 여부 확인 후 링크 이동
  const handleLoginClick = () => {
    console.log('Handle Login Click - Is Logined:', isLogined); // 추가된 로그
    if (!isLogined) {
        sessionStorage.setItem('redirectPath', '/pro_comm_write');
        navigate('/login');
    } else {
        navigate('/pro_comm_write');
    }
};

// 로그인 상태 확인
useEffect(() => {
  const memberToken = localStorage.getItem('memberToken');
  
  if (memberToken) {
    try {
      const decodedToken = jwtDecode(memberToken);
      setRole(decodedToken.role);
      setIsLogined(true);
      setLoginId(decodedToken.sub);
      console.log('로그인한 아이디:', decodedToken.sub);
    } catch (error) {
      console.error('토큰 해독 실패', error);
      setIsLogined(false);
    }
  } else {
    setIsLogined(false);
  }
}, []);

//엔터 이번트 추가
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleComent();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [content] );

// ===========================================================================

  // 게시글 불러오기
  useEffect(() => {
  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://team3back.sku-sku.com/expert/post/${id}`, {
        // headers: { Authorization: `Bearer ${memberToken}` },
      });
      const postData = response.data;
      console.log(postData)
      setPost(postData)
      console.log('작성자 아이디' , postData.writer)
    } catch (error) {
      console.error('게시글을 불러오는 데 실패했습니다', error);
      alert('게시글을 불러오지 못했습니다.');
    }
  }
    fetchPost();
  }, [id] );

  // ===========================================================================

  //댓글 보기
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(`https://team3back.sku-sku.com/expertpost/comment/${id}`);
     
        setComments(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [id]);

  // 글 저장 여부 확인
  useEffect(() => {
    const savedState = localStorage.getItem(`savedPost_${id}`);
    setSave(savedState === 'true'); 
  }, [id]);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>에러발생</p>;
  }

  if (!post) {
    return <p>게시글을 찾을 수 없다</p>;
  }

  // 댓글 달기
const handleComent = async () => {
  if (!isLogined) {
    navigate('/login');
    return; // navigate 후 함수 종료
  }

  if (role === 'Expert') {
    console.log('전문가 회원이다.');
    alert('전문가 게시글엔 전문가가 댓글을 달 수 없습니다.')
  } else {
    console.log('일반 회원이다.');
    try {
      console.log(`댓글내용 : ${content}`);
      const res = await axios.post(`https://team3back.sku-sku.com/generalpost/comment/${id}`, {
        token: localStorage.getItem('memberToken'),
        content
      });
      alert('댓글 등록!!');
      window.location.reload();
    } catch (error) {
      console.error('데이터를 전송하는데 실패했습니다', error);
      alert('데이터를 전송하지 못했습니다.');
    }
  }
};


// =========================================================================

// 게시글 수정
const handleEdit = () => {
 
  if (post.writerId === loginId) {
    navigate(`/pro_comm_trans/${post.id}`);
  } else {
    alert('수정 권한이 없습니다.');
  }
};

// 게시글 삭제
const postDelete = async () => {
  
  if (post.writerId === loginId) {
    try {
      await axios.delete(`https://team3back.sku-sku.com/expert/post/${post.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('memberToken')}` },
      });
      alert('게시글이 성공적으로 삭제되었습니다.');
      window.location.href = '/pro_comm_list';
    } catch (error) {
      console.error('게시글 삭제에 실패했습니다', error);
      alert('게시글을 삭제하지 못했습니다.');
    }
  } else {
    alert('삭제 권한이 없습니다.');
  }
};


  //=============================================================================
 
  

// 게시글 저장
const clickSave = async () => {
  if (!isLogined) {
    navigate('/login');
    return; // navigate 후 함수 종료
  }

  setSave(prevSave => {
    const newSaveState = !prevSave;
    // 로컬 스토리지에 저장 상태 업데이트
    localStorage.setItem(`savedPost_${id}`, newSaveState);
    return newSaveState;
  });

  try {
    await axios.post(`https://team3back.sku-sku.com/post/save/${id}`, {
      token: localStorage.getItem('memberToken'),
    });
    alert('게시글 저장 완료!!');
  } catch (e) {
    console.error('게시글을 저장하지 못했습니다.', e);
    alert('게시글을 저장하지 못했습니다.');
  }
};


// 끄덕임 (좋아요)
const clickLike = async () => {
  if (!isLogined) {
    navigate('/login');
    return; // navigate 후 함수 종료
  }

  try {
    await axios.post(`https://team3back.sku-sku.com/post/like/${id}`, {
      token: localStorage.getItem('memberToken'),
    });
    window.location.reload();
  } catch (e) {
    console.error('실패', e);
    alert('끄덕 끄덕 실패😢😢');
  }
};


 // ====================================================================

  return (
    <div className={styles.CommList_container}>
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>끄적여봐,<br />
          깊이 담긴 내면의 이야기들을<br />
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

        {/* 라인 */}
        <div className={styles.view_line}></div>

        {/* 내용 + 댓글 버튼 부분 */}
        <div className={styles.CommList_right}>
          {/* 제목과 북마크 */}
          <div className={styles.view_title}>
            <h4 className={styles.view_h4}>{post.title}</h4>
            { save ?
            <img
            className={styles.main_icon}
            onClick={clickSave}
            src={save
              ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgB7ZjhTYRAEIUfxAK0A64CYwdnBeYqEDvACuQqsAXs4DrwqOCiDUgJZwGCb3ETARUXZoj+mC/ZQJYhfIHM7LCAYRjGvySaEtw84ZqHnCOBjAo1bqML7EJvCBZtDpSL8QJNalxSdh8SGiOcFPqsQwOniP4pJqqNhmjJpNi4xOC4gcton9V+buPnRJxARhmd9xOC1WHvjszmqjO9a57xiCY8eYbIROu2pvYYCH7yhi2/3xozkX76aqHYL0hFkwmxpxAgE41xNSE6gwDpG838+j8KEyzjk36NG0OjPBVjsu21GPcQolXwv5X1cwUU0FyZerKakg5pwR/iZBPW11eeiz93F21RR75EB2HdkzYmqs0SoiUU+s8hmqJl+1fJ/pRj1TbNwAOUkIoeObaUOmsFO7++7pxzKa+t8CFcQcDcOurents8KCh0HAv0jXTqztmcpHw1d5ixgTFV1AnmoZsGQ3hfAbd6Hdjpx4vsExiGYRg/8A6rfmDhxxpioAAAAABJRU5ErkJggg=='
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg=='}
            alt=''
            style={{ cursor: save ? 'default' : 'pointer', opacity: save ? 0.5 : 1 }} //활성화 비활성화를 나타내는 것이라고 함
          />
           :
            <img className={styles.main_icon} 
            onClick={clickSave}
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt='' />
          }
         </div>
          
          {/* 닉네임 날짜 수정 삭제 */}
          <div className={styles.view_nick}>
            <img className={styles.view_img} alt='' src='../img/profile.jpg' />
            <p className={styles.view_pro_p}>{post.writer}  (전문의)</p>
            <p className={styles.view_p2}>{post.createDate}</p>
            <p className={styles.view_p3} onClick={handleEdit}>
            수정
            </p>
            <p className={styles.view_p3} onClick={postDelete}>삭제</p>
          </div>

          {/* 내용 부분 */}
          <div className={styles.view_content}>
            {post.content}
          </div>

          {/* 끄덕임 버튼 */}
          <button className={styles.view_btn} onClick={clickLike}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgBzVPRUcMwDLVz/ONsUCYgbFBG6AQtExAmaDsBZQK6QcsEbSagTEAmSMwCCe+5Sk+4aY7P6u6dLOdZepJjY67N7NBH59zYWvvetm2JcAnMETvET977w78TpWn6rcIRUHY16rpONTcxw+YADwUT+EI8zcfEm6EsbAGtbKS9CddUphKeLLSGWWRS3aD3/R9Jzs2YSCcHZ31WlQPFLFqFDQ8DI52M3+jNBbNyMztUeoF/jVpbwX1JWMZqtekZHeQwr3mbJEkOn0fqmfhDn0HyMPjeW+M/UlXVDEnvBA9QuwRyqleokXweKzJR9Z2Om6YxOBhUcAxcIH4GFuD+9ClyQjozc/yXCpkVW8rEb0+KMJMpSKEKKtxivegbLi8HWIM3RViC9wheyVvLsPmpuAVwL8q8kD3fmDk+k7CP+A3trrph2wvzIXlM4EAm23wqPLRnK12C67VfVemwXp4OOFYAAAAASUVORK5CYII=' 
            alt='' className={styles.view_icon}/>
            끄덕임 {post.likeSize}개
          </button>
        </div>

        {/* 댓글 다는 부분 */}
        <div className={styles.view_comment}>
          <input placeholder='댓글을 통해 따뜻한 손길을 건네보세요.' className={styles.view_input} 
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
          <button className={styles.add_btn} onClick={handleComent}>등록하기</button>
        </div>

        {/* 댓글 보이는 부분 */}
        {comments.map((comment, index) => (
  comment.role === 'MEMBER' ? (
    <div key={comment.id} className={styles.view_show_comment}>
      <div className={styles.view_nick2}>
        <img className={styles.show_comment_img} alt="" src="../img/profile.jpg" />
        <p className={styles.view_p}>{comment.writer}</p>
        <p className={styles.view_p2}>{comment.createDate}</p>
      </div>
      <div className={styles.view_comment}>
        {comment.content}
      </div>
    </div>
  ) : null
))}

  </div>
</div>
  );
}