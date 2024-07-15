//일반회원 , 전문가 선택하는 부분

import React from 'react'
import styles from './FisrstSignup.module.css'
import 'pretendard/dist/web/static/pretendard.css';
import { Link } from 'react-router-dom';

export default function FirstSignup() {
  return (
    
    // 이게 전체
    <div className={styles.firstContainer}>
        <p className={styles.title}>회원가입</p>

        {/* 선택하는 부분 */}
        <div className={styles.btn_select}>

        <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className={styles.btn}>
                <div className={styles.btnpContanier}>
                    <strong>일반회원</strong>
                    <p className={styles.btnP}>으로 가입하기</p>
                </div>

                <p className={styles.btnP2}>끄적임의 유저가 되어 고민을 끄적이고<br/>
                    위로의 손길을 받아보세요</p>
            </button>
        </Link>

        <Link to='/pro_signup' style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className={styles.proBtn}>
                <div className={styles.btnpContanier}>
                    <strong>전문가</strong>
                    <p className={styles.btnP}>로 가입하기</p>
                </div>

                <p className={styles.btnP2}>심리학 전문의 또는 심리학 자격증을 보유한 경우 <br />
                        전문가로 가입이 가능하며, <br />
                        가입 시 필요서류를 제출하여야 합니다.</p> 
            </button>
        </Link>

        </div>
    </div>
  )
}
