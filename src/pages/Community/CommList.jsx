import React, { useContext, useState, useEffect } from 'react';
import styles from './Comm.module.css';
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import { category, category2, CategoryContext } from '../../components/Comm/Comm_context';
import axios from 'axios';

export default function CommList(props) {
  const [isLogined, setIsLogined] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const { categoryBtn, ClickCategory, data } = useContext(CategoryContext);

  // 로그인 상태 확인
  useEffect(() => {
    const memberToken = localStorage.getItem('memberToken');
    if (memberToken) {
      try {
        const decodedmemberToken = jwtDecode(memberToken);
        setRole(decodedmemberToken.role);
        setIsLogined(true); // 로그인 상태 업데이트
      } catch (error) {
        console.error('토큰 해독 실패', error);
        setIsLogined(false);
      }
    } else {
      setIsLogined(false);
    }
  }, []);

  // 로그인 상태에 따라 글쓰기 페이지로 이동
  const handleLoginClick = () => {
    if (!isLogined) {
      sessionStorage.setItem('redirectPath', '/comm_write');
      navigate('/login');
    } else {
      navigate('/comm_write');
    }
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className={styles.CommList_container}>
      {/* 왼쪽 */}
      <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>끄적여봐,<br />
          깊이 담긴 내면의 이야기들을<br />
          우리가 끄덕여줄게.</p>
        <p className={styles.CommList_left_p}>고민 끄적끄적</p>
        <Link to='/pro_comm_list' style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className={styles.CommList_left_p2}>전문의 정보 끄적끄적</p>
        </Link>
      </div>

      {/* 오른쪽 부분 */}
      <div className={styles.CommList_right}>
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}><span onClick={goToMain}>홈</span> <FaAngleRight /> 커뮤니티 <FaAngleRight /></p>
          <p className={styles.header_p2}>고민 끄적끄적</p>
        </div>

        <div className={styles.header_category}>
          <div className={styles.CommList_right_header}>
            {category.map((cat) => (
              <button key={cat.key} className={`${styles.header_btn} ${categoryBtn === cat ? styles.selected_header_btn : ''}`}
                onClick={() => ClickCategory(cat)}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.CommList_right_header}>
            {category2.map((cat) => (
              <button key={cat.key} className={`${styles.header_btn} ${categoryBtn === cat ? styles.selected_header_btn : ''}`}
                onClick={() => ClickCategory(cat)}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 중간 부분 */}
        <div className={styles.CommList_right_mid}>
          <p className={styles.right_mid_p}>총 건 {data.length}</p>
          <div className={styles.right_mid}>
            <button className={styles.right_mid_btn} onClick={handleLoginClick}>끄적이기</button>
            <select className={styles.right_mid_select}>
              <option>최신순</option>
              <option>인기순</option>
              <option>끄덕임 많은순</option>
              <option>끄덕임 적은순</option>
            </select>
          </div>
        </div>

        {/* 메인 부분 */}
        <div className={styles.CommList_right_main}>
          {data && data.length > 0 ? (
            data.map((item) => (
              <Link key={item.id} to={`/comm_view/${item.id}`} className={styles.CommList_main}>
                <div>
                  <h3 className={styles.main_h3}>{item.title}</h3>
                  <p className={styles.main_p}>{item.content}</p>
                  {/* 맨 밑에 부분 */}
                  <div className={styles.CommList_main_bottom}>
                    <div className={styles.main_bottom}>
                      {/* 프로필 사진은 구현해야 함 */}
                      <img className={styles.main_img} alt='' src='./img/profile.jpg' />
                      <p className={styles.main_p}>{item.writer}</p>
                      <p className={styles.p_line}></p>
                      <p className={styles.main_p2}>{item.createDate}</p>
                    </div>
                    <div className={styles.main_bottom2}>
                      <img
                        className={styles.main_icon}
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB3VTtUcJAEN0wFBArMHSAFSTpIFQgVgAdIBWAFRgrkA6SVCBWYKzAdBDfgz3mCHdhxow/dGcud5fdffduP07kr0ogA6QsywJTgpFjRFwHQfAYx/F6EHhRFBmAXl26tm1v0jRtRvJzCX0KAnMeAr7DaBz/c7PwhgXXZvxWWE7lyJJAe1z5BcxytVnCZmO51dBDndZOcDhEcHiWY6J8cgLR2G+w/8T/uQG+AFdgVkCkAE+YdwpC9pnehvpGD9j7GJyBW6W1V0dXTElii0MWSuDOZzeyHOYKXPcBU6BbkoveYOmzs6sl4wfAawIzRLjJF5Omh2fYt0y0seOMG9xfBYdRrKxyS9841qHalZrEiERc4GNlFapTbRSa9Ym1L+WyupjMW9ECEB/z35ATE8YXU2jeBdxmilC9dR2gfzChg88Hpsj4SA9zU6+HxGr91h17ApRc8HDRcFwtRSv7K80B/6UYlTn8rLW17Y2fS/qaaGa3si1VVbHdWaJ1kiQTH/jY3jCe2v6MNy5QkFXZaf8F7BiSQ/tLjwx5uGZ974oT3DpkrkzZXKEyfZfjQ7aVfy3fA/EHOjSA094AAAAASUVORK5CYII='
                        alt=''
                      />
                      <p className={styles.main_p}>{item.commentSize}</p>
                      <img
                        className={styles.main_icon}
                        src='data:image/png;base64,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'
                        alt=''
                      />
                      <p className={styles.main_p}>{item.hits}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.No_postList}>끄적인 게시물이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
