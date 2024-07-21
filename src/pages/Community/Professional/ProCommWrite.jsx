import React from 'react';
import styles from '../Comm.module.css';
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ProCommWrite() {
  

    
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
        <p className={styles.CommList_left_p2}>고민 끄적끄적</p>
        {/* <Link to ='/pro_comm_list' style={{ textDecoration: 'none', color: 'inherit' }}> */}
        <p className={styles.CommList_left_p}>전문의 정보 끄적끄적</p>
        {/* </Link> */}
      </div>

      {/* 오른쪽 부분 */}
      <div className={styles.CommList_right}>

        {/* 여기가 글 쓰는 부분 상단*/}
        <div className={styles.CommList_right_header}>
          <p className={styles.header_p}>
            홈 <FaAngleRight /> 커뮤니티 <FaAngleRight /> 고민 끄적끄적 <FaAngleRight />
          </p>
          <p className={styles.header_p2}>끄적이기</p>
        </div>

        {/* 글 쓰는 부분 메인     */}
        <div className={styles.write_container}>
            <h2 className={styles.CommList_left_h22} style={{marginBottom:'40px'}}>전문의 귀한 정보 끄적끄적</h2>

             {/* 제목 부분 */}
             <div className={styles.write_header}>
                <p className={styles.write_title2}>제목</p>
                <input type='text' className={styles.write_input}></input>
             </div>

              {/* 내용 부분 */}
              <div className={styles.write_header2}>
                <p className={styles.write_title3}>본문</p>
                <textarea className={styles.write_textarea} placeholder='비하/욕설 등과 같은 게시글은 관리자에 의해 블라인드 처리될 수 있습니다.'></textarea>
             </div>

             {/* 버튼 부분 */}
             <div className={styles.write_header3}>
                <button className={styles.cancell_btn}>취소</button>
                <button className={styles.add_btn}>등록</button>
             </div>
        </div>


      </div>
    </div>
  );
}