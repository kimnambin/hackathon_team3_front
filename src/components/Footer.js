import React from 'react'
import styles from "./Fixed.module.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const Navigate = useNavigate()

  const goToManager = () => {
    const userId = localStorage.getItem('userId');
  
    if (userId === 'kkeujeogim12') {
      Navigate('/manager');
    } else {
      alert('관리자만 접근 가능합니다');
    }
  };


  return (
    <footer>

      <div className={styles.inner1}>
        <p>끄적임</p>
      </div>

      <div className={styles.inner2}>
        <p>Project Manager 오한솔  | Frontend 김범준, 김남빈  |  Backend 노주희, 오유진 </p>
        
        <ul>
          <li>@성결대 멋쟁이사자처럼 12기 | 해커톤 3팀</li>
        </ul>
      </div>

      <div className={styles.inner3}>
        <p>문의하기</p>
        <p onClick={goToManager}>관리자 페이지</p>
      </div>

    </footer>
  )
}

export default Footer