import React from 'react'
import styles from './Fixed.module.css'


const Nav = () => {
  return (

  <header> 
    <div className={styles.header}>
      <div className={styles.textalign1}>끄적임</div>

      <div className={styles.textalign2}>
        <div className={styles.text2margin}>
          <div>로그인</div>
        </div>

        <div className={styles.text2margin}>
          <div style={{color: 'gray'}}>|</div>
        </div>

        <div className={styles.text2margin}>
          <div>마이페이지</div>
        </div>  
      </div>
    </div>

    <nav className={styles.nav}>
      <ul className={styles.navflex}>
        <li className={styles.navTextMargin}>커뮤니티</li>
        <li style={{color: 'gray'}} className={styles.navTextMargin}>|</li>
        <li className={styles.navTextMargin}>자가진단</li>
        <li style={{color: 'gray'}} className={styles.navTextMargin}>|</li>
        <li className={styles.navTextMargin}>내 주변 병원 찾기</li>
      </ul>
    </nav>
    
  </header>
  )
}

export default Nav