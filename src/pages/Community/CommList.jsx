import React, { useContext } from 'react'
import styles from './Comm.module.css'
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { category, category2  , CategoryContext} from '../../components/Comm/Comm_context';


export default function CommList(props) {
  const Navigate =useNavigate()

  const goToMain=()=>{
    Navigate('/')
  }

  const { categoryBtn, ClickCategory} = useContext(CategoryContext);
 
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
          <p className={styles.CommList_left_p2} >전문의 정보 끄적끄적</p>
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
                <Link to='/comm_write'>
                  <button className={styles.right_mid_btn}>끄적이기</button></Link>
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
        
      {Array.from({ length: 4 },(_,i) => (
        <div className={styles.CommList_main}>
            <h3 className={styles.main_h3}>세상에 저 혼자인 느낌이...</h3>
            <p className={styles.main_p}>이상하게 이 세상에 </p>
            
             {/* 맨 밑에 부분 */}
            <div className={styles.CommList_main_bottom}>
              {/* 맨 밑 왼쪽 */}
              <div className={styles.main_bottom}>
              <img className={styles.main_img} alt='' src='./img/profile.jpg'></img>
              <p className={styles.main_p}>여기에 닉네임</p>
              <p className={styles.p_line}></p>
              <p className={styles.main_p2}>1분전</p>
              </div>
              <div className={styles.main_bottom2}>
              <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB3VTtUcJAEN0wFBArMHSAFSTpIFQgVgAdIBWAFRgrkA6SVCBWYKzAdBDfgz3mCHdhxow/dGcud5fdffduP07kr0ogA6QsywJTgpFjRFwHQfAYx/F6EHhRFBmAXl26tm1v0jRtRvJzCX0KAnMeAr7DaBz/c7PwhgXXZvxWWE7lyJJAe1z5BcxytVnCZmO51dBDndZOcDhEcHiWY6J8cgLR2G+w/8T/uQG+AFdgVkCkAE+YdwpC9pnehvpGD9j7GJyBW6W1V0dXTElii0MWSuDOZzeyHOYKXPcBU6BbkoveYOmzs6sl4wfAawIzRLjJF5Omh2fYt0y0seOMG9xfBYdRrKxyS9841qHalZrEiERc4GNlFapTbRSa9Ym1L+WyupjMW9ECEB/z35ATE8YXU2jeBdxmilC9dR2gfzChg88Hpsj4SA9zU6+HxGr91h17ApRc8HDRcFwtRSv7K80B/6UYlTn8rLW17Y2fS/qaaGa3si1VVbHdWaJ1kiQTH/jY3jCe2v6MNy5QkFXZaf8F7BiSQ/tLjwx5uGZ974oT3DpkrkzZXKEyfZfjQ7aVfy3fA/EHOjSA094AAAAASUVORK5CYII=' alt=''>
              </img>  <p className={styles.main_p}>0</p>
              <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBzVSBbYNADHxQBmAEMkHJBDwTNJ0gZIKmE6TdIJkgbNBsAExQusGPwAb0DDayKCVfVZViCf0lb5/v/fYb808WLG2WZRlhoc9kWebMX4lBmAdBsAO0k61r13VnJKnMb4hBGIPwQoQgqIkIn+PthJORzylN0xcvYiYtCYN0/5Mq+L3C7wjYsPriFnGBgEc4b27Vk0t14Z8OMdk0JlRqd3B487kkVlmN6oLggzi+EcNyXq/G00iEWluQv88Rx/gaUYvsBzquwlvCdV0fgROOaVSSPZYEe3ZKPDXqgJSAbjsQ5IIhomXfiC+6Zd/eVry2rNpwUC7YWrtReC1YKXdyAiReTxVTbSN9FA87COHcZsgKKywVtRCP8aJJFwEWqosSnWSsMd9ujG/rQUqD5KQz6ILN8KaMXbVSMU4FW3Z0UNTIf2EYpiAjklaGgk7Ik1joaV1NFamJ6q2qRl86FRGeAU/KpX8B+W0xc8QU9GmGiaIjSadYJHuWUwE/YO0fKiQln9nLW3yPxXhcrRnqH3FSR5j7PYaoJ5TCe3K9jOrv0033bV+xcd+AVWl8LgAAAABJRU5ErkJggg==' alt=''>
               </img> <p className={styles.main_p}>0</p>
              <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt=''>
                </img>
              </div>
            </div>
            {i!== 3 &&<div className={styles.line}></div>  }
        </div>
      ))}
      </div>
       

      </div>
    </div>
  )
}
