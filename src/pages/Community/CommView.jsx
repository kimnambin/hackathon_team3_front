import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import styles from './Comm.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CommView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`http://52.78.131.56:8080/general/post/${id}`);
        const postData = response.data;

        // 카테고리 키로 변환
        const categoryKeyResult = {
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

        const transCategoryKey = categoryKeyResult[postData.category] || 'unknown';

        // 변환된 카테고리 키를 포함한 게시글 데이터 로깅
        console.log('게시글 제목:', postData.title);
        console.log('게시글 내용:', postData.content);
        console.log('카테고리 키:', transCategoryKey);

        // 변환된 카테고리 키로 게시글 데이터 업데이트
        setPost({ ...postData, category: transCategoryKey });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
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

  return (
    <div className={styles.CommList_container}>
      {/* 왼쪽 */}
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>끄적여봐,<br/>
        깊이 담긴 내면의 이야기들을<br/>
        우리가 끄덕여줄게.</p>
        <p className={styles.CommList_left_p}>고민 끄적끄적</p>
        <Link to='/pro_comm_list' style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className={styles.CommList_left_p2}>전문의 정보 끄적끄적</p>
        </Link>
      </div>

      {/* 오른쪽 부분 */}
      <div className={styles.view_right}>
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>홈 <FaAngleRight /> 커뮤니티 <FaAngleRight /> 고민 끄적끄적 <FaAngleRight /></p>
          <p className={styles.header_p2}>모든 끄적임</p> 
        </div>

        {/* 라인 */}
        <div className={styles.view_line}></div>

        {/* 내용 + 댓글 버튼 부분 */}
        <div className={styles.CommList_right}>
          {/* 제목과 북마크 */}
          <div className={styles.view_title}>
            <h4 className={styles.view_h4}>{post.title}</h4>
            <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt='' />
          </div>

          {/* 닉네임 날짜 수정 삭제 */}
          <div className={styles.view_nick}>
            <img className={styles.view_img} alt='' src='../img/profile.jpg' />
            <p className={styles.view_p}>여기에 닉네임</p>
            <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
            <p className={styles.view_p3}>
            <Link to={`/comm_trans/${post.id}`}>수정</Link>
            </p>
            <p className={styles.view_p3}>삭제</p>
          </div>

          {/* 내용 부분 */}
          <div className={styles.view_content}>
            {post.content}
          </div>

          {/* 끄덕임 버튼 */}
          <button className={styles.view_btn}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgBzVPRUcMwDLVz/ONsUCYgbFBG6AQtExAmaDsBZQK6QcsEbSagTEAmSMwCCe+5Sk+4aY7P6u6dLOdZepJjY67N7NBH59zYWvvetm2JcAnMETvET977w78TpWn6rcIRUHY16rpONTcxw+YADwUT+EI8zcfEm6EsbAGtbKS9CddUphKeLLSGWWRS3aD3/R9Jzs2YSCcHZ31WlQPFLFqFDQ8DI52M3+jNBbNyMztUeoF/jVpbwX1JWMZqtekZHeQwr3mbJEkOn0fqmfhDn0HyMPjeW+M/UlXVDEnvBA9QuwRyqleokXweKzJR9Z2Om6YxOBhUcAxcIH4GFuD+9ClyQjozc/yXCpkVW8rEb0+KMJMpSKEKKtxivegbLi8HWIM3RViC9wheyVvLsPmpuAVwL8q8kD3fmDk+k7CP+A3trrph2wvzIXlM4EAm23wqPLRnK12C67VfVemwXp4OOFYAAAAASUVORK5CYII=' alt='' className={styles.view_icon} />
            끄덕임 0개
          </button>
        </div>

        {/* 댓글 다는 부분 */}
        <div className={styles.view_comment}>
          <input placeholder='댓글을 통해 따뜻한 손길을 건네보세요.' className={styles.view_input} />
          <button className={styles.add_btn}>등록하기</button>
        </div>

        {/* 댓글 보이는 부분 */}
        <div className={styles.view_show_comment}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB7ZW9DcIwEIXPQJF0TibIBjBC2IANYAQ2ASZgBUYIHR3eADaAdOnCs5QCRbbiM/kp8CdFJ/lOeedz/EIUCARGQHCKpZQrhI0lfXwDYrAgHnshxNaUqOtaIVyIwYx4FJ65QcUVd+Q+4kYw8pI84IpnpkV8B0saQXxnWcdFkDkxcb5qeHmGHT5seYy+wLGvicHctTCO47vuwZZHY1kURVRV1ZX6FE/T9IyQd9WhgRwNlGjgRg50nrl2NYx0R47YTMhY61KEBrSlfo9cQuSAqNDYqVWu77yiIUmS5IWHZadtfjGZsvHz8cUb4WnEwRMP28/7Ep925z5/skDgP/kAvWlK4ab/5gwAAAAASUVORK5CYII=' alt='' className={styles.view_show_icon} />
          <div className={styles.view_nick2}>
            <img className={styles.show_comment_img} alt='' src='../img/profile.jpg' />
            <p className={styles.pronick_comment}>여기에 닉네임 (전문의)</p>
            <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
          </div>
          <div className={styles.view_comment}>
            20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br />
            가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br />
            기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br />
            조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br />
            게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br />
            만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br />
            해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
          </div>

          <div className={styles.view_nick2}>
            <img className={styles.show_comment_img} alt='' src='../img/profile.jpg' />
            <p className={styles.view_p}>여기에 닉네임</p>
            <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
          </div>

          <div className={styles.view_comment}>
            20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br />
            가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br />
            기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br />
            조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br />
            게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br />
            만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br />
            해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
          </div>
        </div>
      </div>
    </div>
  );
}