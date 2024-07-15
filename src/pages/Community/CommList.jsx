import React, { useState } from 'react'
import styles from './CommList.module.css'
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";

export default function CommList(props) {

  //카테고리들
  const category = ['일반 고민','진료 / 취업', '학교', '직장', '대인 관계', '썸 / 연애'];
  const category2 = ['결혼 / 육아', '이별 / 이혼', '가족', '성 생활', '외모', '금전', 'LGBT'];
  
  //카테고리 버튼들
  const [categoryBtn , setCategoryBtn] = useState(null);

  const ClickCategory = (category) => {
    //나중에 해당 내용을 가져오는 로직도 추가해야 함
     setCategoryBtn(category);
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
          <p className={styles.CommList_left_p2}>전문의 정보 끄적끄적</p>
      </div>

      {/* 오른쪽 부분 */}
      <div className={styles.CommList_right}>
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>홈 <FaAngleRight /> 커뮤니티 <FaAngleRight /></p>
          <p className={styles.header_p2}>고민 끄적끄적</p> 
        </div>

        <div className={styles.header_category}>
        <div className={styles.CommList_right_header}>
          {category.map((v, i) => (
        <button key={i}  
        className={`${styles.header_btn} ${categoryBtn === v ? styles.selected_header_btn : ''}`}
        onClick={() => ClickCategory(v)}>{v}</button>
      ))}
        </div>

        <div className={styles.CommList_right_header}>
        {
          category2.map((v, i)=>(
            <button key={i}  
            className={`${styles.header_btn} ${categoryBtn === v ? styles.selected_header_btn : ''}`}
            onClick={() => ClickCategory(v)}>{v}</button>
          ))}
        </div>
      </div>

          {/* 중간 부분 */}
          <div className={styles.CommList_right_mid}>
              <p className={styles.right_mid_p}>총 건</p>
              <div className={styles.right_mid}>
                  <button className={styles.right_mid_btn}>끄적이기</button>
                  <select className={styles.right_mid_select}>
                    <option >최신순</option>
                    <option >인기순</option>
                    <option >끄덕임 많은순</option>
                    <option >끄덕임 적은순</option>
                  </select>
              </div>
          </div>

          {/* 메인 부분 */}
        
      <div className={styles.CommList_right_main}>
        
        <div className={styles.CommList_main}>
            <h3 className={styles.main_h3}>세상에 저 혼자인 느낌이...</h3>
            <p className={styles.main_p}>이상하게 이 세상에 </p>
            
             {/* 맨 밑에 부분 */}
            <div className={styles.CommList_main_bottom}>
              {/* 맨 밑 왼쪽 */}
              <div className={styles.main_bottom}>
              <img className={styles.main_img} alt='' src=''></img>
              <p>여기에 닉네임</p>
              <p className={styles.p_line}></p>
              <p>1분전</p>
              </div>
              <div className={styles.main_bottom}>
                아이콘 아이콘 아이콘
              </div>
            </div>
        </div>
   
      </div>
          

      </div>
    </div>
  )
}
