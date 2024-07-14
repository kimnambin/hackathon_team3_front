import React from 'react'
import styles from "./Fixed.module.css"

const Footer = () => {
  return (
    <footer>

      <div className={styles.inner}>
        <p>Project Manager 오한솔  | Frontend 김범준, 김남빈  |  Backend 노주희, 오유진 </p>
        
        <ul>
          <li>@성결대 멋쟁이사자처럼 12기 | 해커톤 3팀</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
