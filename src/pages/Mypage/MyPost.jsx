//유저가 작성한 글

import React, { useState } from 'react';
import styles from '../Community/Comm.module.css'; // 커뮤니티에서 가져온 스타일
import 'pretendard/dist/web/static/pretendard.css'; // 프리텐다드 폰트 스타일
import styles2 from './Mypage.module.css'; // 마이페이지에서 가져온 스타일
import { Link } from 'react-router-dom';

export default function MyPost() {

  const [test , setTest] = useState(false);

  const handleTest = () => {
    setTest(!test)
  }

  return (
    <div className={styles2.MyPost}>

    {/* 상단 부분 */}
    <div className={styles2.MyPost_top}>
     
        <div className={styles2.MyPost_top01}>
          <img className={styles2.Profile_img} src='./img/profile.jpg' alt='' />
          <p className={styles2.MyPost_top_p} onClick={handleTest}>
            나의 활동
          </p>
          <p className={styles.MyPost_top_p2}>작성한 게시글 0건</p>
        </div>

        <div className={styles2.Profile_top02}>
          <p className={styles2.Profile_top02_p1}>3팀 가보자고(@babyLion)</p>
        </div>
    </div>
      
        {/* 여기가 작성한 내용들 */}
      <div className={styles2.postList}>

        {Array.from({ length: 4 }, (_, i) => (
          <div className={styles2.List} key={i} style={{display : test ? 'flex' : 'none'}}>
            <h3 className={styles.main_h3}>세상에 저 혼자인 느낌이...</h3>
            <p className={styles.main_p}>이상하게 이 세상에 </p>
            
            {/* 맨 밑에 부분 */}
            <div className={styles.CommList_main_bottom}>
              {/* 맨 밑 왼쪽 */}
              <div className={styles.main_bottom}>
                <p className={styles2.MyPost_p}>여기에 닉네임</p>
                <p className={styles2.p_line}></p>
                <p className={styles.MyPost_p}>1분전</p>
              </div>
              <div className={styles.main_bottom2}>
                <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB3VTtUcJAEN0wFBArMHSAFSTpIFQgVgAdIBWAFRgrkA6SVCBWYKzAdBDfgz3mCHdhxow/dGcud5fdffduP07kr0ogA6QsywJTgpFjRFwHQfAYx/F6EHhRFBmAXl26tm1v0jRtRvJzCX0KAnMeAr7DaBz/c7PwhgXXZvxWWE7lyJJAe1z5BcxytVnCZmO51dBDndZOcDhEcHiWY6J8cgLR2G+w/8T/uQG+AFdgVkCkAE+YdwpC9pnehvpGD9j7GJyBW6W1V0dXTElii0MWSuDOZzeyHOYKXPcBU6BbkoveYOmzs6sl4wfAawIzRLjJF5Omh2fYt0y0seOMG9xfBYdRrKxyS9841qHalZrEiERc4GNlFapTbRSa9Ym1L+WyupjMW9ECEB/z35ATE8YXU2jeBdxmilC9dR2gfzChg88Hpsj4SA9zU6+HxGr91h17ApRc8HDRcFwtRSv7K80B/6UYlTn8rLW17Y2fS/qaaGa3si1VVbHdWaJ1kiQTH/jY3jCe2v6MNy5QkFXZaf8F7BiSQ/tLjwx5uGZ974oT3DpkrkzZXKEyfZfjQ7aVfy3fA/EHOjSA094AAAAASUVORK5CYII=' alt='' />
                <p className={styles.main_p}>0</p>
                <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBzVSBbYNADHxQBmAEMkHJBDwTNJ0gZIKmE6TdIJkgbNBsAExQusGPwAb0DDayKCVfVZViCf0lb5/v/fYb808WLG2WZRlhoc9kWebMX4lBmAdBsAO0k61r13VnJKnMb4hBGIPwQoQgqIkIn+PthJORzylN0xcvYiYtCYN0/5Mq+L3C7wjYsPriFnGBgEc4b27Vk0t14Z8OMdk0JlRqd3B487kkVlmN6oLggzi+EcNyXq/G00iEWluQv88Rx/gaUYvsBzquwlvCdV0fgROOaVSSPZYEe3ZKPDXqgJSAbjsQ5IIhomXfiC+6Zd/eVry2rNpwUC7YWrtReC1YKXdyAiReTxVTbSN9FA87COHcZsgKKywVtRCP8aJJFwEWqosSnWSsMd9ujG/rQUqD5KQz6ILN8KaMXbVSMU4FW3Z0UNTIf2EYpiAjklaGgk7Ik1joaV1NFamJ6q2qRl86FRGeAU/KpX8B+W0xc8QU9GmGiaIjSadYJHuWUwE/YO0fKiQln9nLW3yPxXhcrRnqH3FSR5j7PYaoJ5TCe3K9jOrv0033bV+xcd+AVWl8LgAAAABJRU5ErkJggg==' alt='' />
                <p className={styles.main_p}>0</p>
                <img className={styles.main_icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZThDYIwEIWvxgEcATfACaQbMIIbiBPgBuIIjuAEtRO4AiOwAb4zNFED7WFq5AcvufRIufeR3hWiWf+WGtowxiRKqTvSFQXUtu1Ba1317S08dUeJOQsfsh/a8wGiSApocAxnhEVec86rpFAEgOEGZ1wgMpfzyuAYgBqGtXtA3rgVkGuoWAJIeKL6NtDcLUUAsBEY5m2irLUnhodqpU1OXiEwL3E8haRwSXKlDIH5TWo+FvCEwDwdUzCZi/Z7AM88QiPWiAsJb3KoB033W6jcBeu06yYqR+NL+kYwyD5n3/NuTrMmqwf5GGsmO2z7xQAAAABJRU5ErkJggg==' alt='' />
              </div>
            </div>

            {i !== 3 && <div className={styles2.line}></div>}
          </div>
        ))}

        {/* 글작성이 없을 때 */}
        <div className={styles2.No_postList} style={{display : test ? 'none' : 'flex'}}>
            <p>유저님이 끄적인 게시물이 없습니다. <br/>
            혹시 무슨 고민이 있다면 끄적여보세요.✏️</p>
            <Link to='/comm_write'>
            <button className={styles2.No_postList_btn}>끄적이러 가기</button>
            </Link>
        </div>


      </div>
    </div>
  );
}