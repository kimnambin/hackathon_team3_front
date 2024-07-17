import React from 'react'
import styles from './Mypage.module.css';
import commstyles from '../Community/Comm.module.css';
import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function HospitalMap() {
  return (
    <div className={styles.map_container}>
      
    {/* 왼쪽 */}
    <div className={styles.CommList_left}>
        <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
        <p className={styles.CommList_left_h2}>내 주변 병원을 검색하여<br/>
        빠르게 가까운 병원에서<br/>
        상담을 받아보세요.☺️</p>
    </div>
    
    {/* 지도 있는 부분 */}
    <div className={styles.map}>

    <div className={styles.CommList_right_header}>
        <p className={commstyles.header_p}>홈 <FaAngleRight /></p>
        <p className={commstyles.header_p2}>내 주변 병원찾기</p> 
    </div>

    <div className={commstyles.CommList_right_header}>
        <p className={styles.header_p}>나의 현재 위치</p>
        <p className={styles.header_p2}>어쩌구 저쩌구...</p> 
    </div>

    <div className={styles.map_box}>

    </div>

    </div>

    {/* ============================================== */}

    {/* 젤 오른쪽 */}
    <div className={styles.location}>

        {/* <label className={styles.icon}>
        <CiSearch />
        <input
          type='text'
          className={styles.searchBar}
          placeholder='본인 거주지 입력하기'
        />
      </label> */}
      <div className={styles.search}>
      <CiSearch className={styles.icon}/>
      <input
          type='text'
          className={styles.searchBar}
          placeholder='본인 거주지 입력하기'
        />
      </div>

      <div className={styles.search_location}>

      </div>
    </div>


    
   
     

    </div>
  
)
}

