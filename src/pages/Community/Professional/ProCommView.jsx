import React from 'react'
import styles from '../Comm.module.css'
import 'pretendard/dist/web/static/pretendard.css';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ProCommView() {
 
    return (
      <div className={styles.CommList_container}>
        
        {/* 왼쪽 */}
        <div className={styles.CommList_left}>
            <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
            <p className={styles.CommList_left_h2}>끄적여봐,<br/>
            깊이 담긴 내면의 이야기들을<br/>
            우리가 끄덕여줄게.</p>
            <Link to='/comm_list' style={{ textDecoration: 'none', color: 'inherit' }}>
            <p className={styles.CommList_left_p2}>고민 끄적끄적</p>
            </Link>
            <p className={styles.CommList_left_p}>전문의 정보 끄적끄적</p>
        </div>
    

    {/* 오른쪽 부분 */}
    <div className={styles.view_right}>
      <div className={styles.CommList_right_header}>
        <p className={styles.header_p}>홈 <FaAngleRight /> 커뮤니티 <FaAngleRight /> 고민 끄적끄적 <FaAngleRight /></p>
        <p className={styles.header_p2}>전문의 정보 끄적끄적</p> 
      </div>

      {/* 라인 */}
      <div className={styles.view_line}></div>

      {/* 내용 + 댓글 버튼 부분 */}
      <div className={styles.CommList_right}>
      
      {/* 제목과 북마크 */}
      <div className={styles.view_title}>
        <h4 className={styles.view_h4}>28살인데 사춘기가 올 수 있나요?</h4>
        <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt=''>
        </img>
      </div>

      {/* 닉네임 날짜 수정 삭제 */}
      <div className={styles.view_nick}>
              <img className={styles.view_img} alt='' src='./img/profile.jpg'></img>
              <p className={styles.view_pro_p}>여기에 닉네임 전문의</p>
              <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
      </div>

      {/* 내용 부분 */}
      <div className={styles.view_content}>
      20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br/> 
      가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br/>  
      기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br/> 
      조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br/>  
      게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br/>  
      만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br/>  
      해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
      </div>

      {/* 끄덕임 버튼 */}
      <button className={styles.view_btn}>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgBzVPRUcMwDLVz/ONsUCYgbFBG6AQtExAmaDsBZQK6QcsEbSagTEAmSMwCCe+5Sk+4aY7P6u6dLOdZepJjY67N7NBH59zYWvvetm2JcAnMETvET977w78TpWn6rcIRUHY16rpONTcxw+YADwUT+EI8zcfEm6EsbAGtbKS9CddUphKeLLSGWWRS3aD3/R9Jzs2YSCcHZ31WlQPFLFqFDQ8DI52M3+jNBbNyMztUeoF/jVpbwX1JWMZqtekZHeQwr3mbJEkOn0fqmfhDn0HyMPjeW+M/UlXVDEnvBA9QuwRyqleokXweKzJR9Z2Om6YxOBhUcAxcIH4GFuD+9ClyQjozc/yXCpkVW8rEb0+KMJMpSKEKKtxivegbLi8HWIM3RViC9wheyVvLsPmpuAVwL8q8kD3fmDk+k7CP+A3trrph2wvzIXlM4EAm23wqPLRnK12C67VfVemwXp4OOFYAAAAASUVORK5CYII=' alt=''
      className={styles.view_icon}>
      </img>
      끄덕임 0개
      </button>
      </div>

      {/* 댓글 다는 부분 */}
      <div className={styles.view_comment}>
        <input placeholder='댓글을 통해 따뜻한 손길을 건네보세요.' className={styles.view_input}>
        </input>
        <button className={styles.add_btn}>등록하기</button>
      </div>

      {/* 댓글 보이는 부분 */}
      <div className={styles.view_show_comment}>
      

      <div className={styles.view_nick}>
              <img className={styles.show_comment_img} alt='' src='./img/profile.jpg'></img>
              <p className={styles.view_p}>여기에 닉네임</p>
              <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
      </div>
      <div className={styles.view_comment}>
      20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br/> 
      가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br/>  
      기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br/> 
      조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br/>  
      게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br/>  
      만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br/>  
      해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
      </div>

      <div className={styles.view_nick}>
              <img className={styles.show_comment_img} alt='' src='./img/profile.jpg'></img>
              <p className={styles.view_p}>여기에 닉네임</p>
              <p className={styles.view_p2}>YYYY-MM-DD hh:ss</p>
      </div>
      <div className={styles.view_comment}>
      20대 후반인데, 최근 감정기복이 너무 심해지고 제어를 못해서 고민입니다.<br/> 
      가장 문제인 건, 이러한 문제가 사회생활을 할 때 생긴다는 것이에요..<br/>  
      기분이 나빠도 최대한 참아보려해도 표정에서 감정이 다 드러납니다.<br/> 
      조금이라도 나쁜 소리를 들으면 의기소침해져서 입이 삐죽 나오기도하고요...<br/>  
      게다가 집에서는 기분 나쁘면 가족에게 참지않고 윽박을 지르며 화내는 등 어린아이처럼 대처합니다.<br/>  
      만약 성인 사춘기가 있다면 도움 받을 방법이 있을까요?<br/>  
      해결방안을 찾지 못해서 너무 고민이고 시간이 지날수록 아직 나이값도 하지 못한다는 자괴감이 듭니다.
      </div>

      </div>
  </div>
</div>

  )
}
