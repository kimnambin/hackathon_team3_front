import React, { useEffect, useState } from 'react';
import styles from './Main1.module.css'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';


const Main1 = () => {
  const navgate = useNavigate();

  const goToBlue =()=>{
    navgate('/blue')
  }

  const goToMap=()=>{
    navgate('/hospital_map')
  }

  //로그인 유지
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLogined(loggedIn);
  }, []);

  return (
    <div>
      
      <div className={styles.mainBox}>

            <div className={styles.mainTitleText}>
            <p className={styles.왼쪽끄적임}>끄적임</p>
            <span className={styles.끄적임밑}>
            시들어가는 나의 마음</span>
            <span className={styles.끄적임밑}>
              따뜻하게 보듬어줄 손길을 찾는다면,
              </span>
            </div>

            <div className={styles.mainText}>
              <div className={styles.클로버그림}>
            <img style={{width:'32px' , height:'32px'}}
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgB7Vc9b9RAEJ1DMRIpQIIiFElxFC5IEQooUkDD76ZJc0VScEVSXIGLUCQSV+SQcsVFOubFs2RvY3tmfHaa+Ekr2+vx7tv5NtGAAQOeF0bUI9br9Tu+HPD4w2M+Go2W1BK9EWWSOV/yaOqWx4RK4mMeCx6XTP63Zb1eiDLJV3z5XvFqxSNL5mZMdkYKXlA/eFMzn1XM5eIijeiL6A75kHe6IJ8c8rtUambFJltQN3itCZiJSnAgCLJoDgEyZcLzRNx7gEwTMJmeCX2m0jzpgtDusRwihjcNqfIqUSaxz5f3ihgCYhweWMOI7jnZcakJWDT6gWw4TKL32vgdtKnm0q6j/kgCDoCW7hR5vJ+wBW4VORPRKdl9Dj57bwExf5NJseaJhSRgIbomXxrLpTIBBVVrFW5hJgk0EpUNj8mQPhLcB5YQicsjtAhTn4rGzdA0BTN6SQJ/ww0T+sUHxi0KxCNX4Hdwl7eyD8YNy117iXqBlHTBG93EkyBLm+SQHfao7KQeKUIKyVlc+Rq7JzntN9IPBIKzigpFFQRRHNQmhMpO6weveacSpQeyR8ni+Bhag4mutKCQlPWFbARjnAStqqYXEhPeLPjQqi4QpIpBY+jmpzKHb75Smbq8+J8xzD4q5OoIQlMf6aEP3eW5BX9T4Du+X7YgOosttXVlYhKHVKawtFnOoyqldvAJirTrb00UJKSrGteIwOShSiHITP9GgnHa9W+j0U+kd1XxIc5Jr/0xDuKHVkSl/9RIAlnQjPj4KdmxkeraanTfIbsXbsQFLP6K4LuKJ9xERUOeCN7QvATJRYN86Ac2MkzXJbQKSFU7ocIAUv+hseBC4IFUhIArqvJ0G6KurkfwkpJAkhz5k4xwm15KWle/yWa0DaZzj7CnQa5DK6I10buk6l8WT6Kv35O2gHRWIakXco07LRzozNvNPxmQwuQQAwZsi39HDAKCB0KiPgAAAABJRU5ErkJggg==' alt=''>
            </img>
            <img style={{transform: 'scaleX(-1)'}}
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgB7Vc9b9RAEJ1DMRIpQIIiFElxFC5IEQooUkDD76ZJc0VScEVSXIGLUCQSV+SQcsVFOubFs2RvY3tmfHaa+Ekr2+vx7tv5NtGAAQOeF0bUI9br9Tu+HPD4w2M+Go2W1BK9EWWSOV/yaOqWx4RK4mMeCx6XTP63Zb1eiDLJV3z5XvFqxSNL5mZMdkYKXlA/eFMzn1XM5eIijeiL6A75kHe6IJ8c8rtUambFJltQN3itCZiJSnAgCLJoDgEyZcLzRNx7gEwTMJmeCX2m0jzpgtDusRwihjcNqfIqUSaxz5f3ihgCYhweWMOI7jnZcakJWDT6gWw4TKL32vgdtKnm0q6j/kgCDoCW7hR5vJ+wBW4VORPRKdl9Dj57bwExf5NJseaJhSRgIbomXxrLpTIBBVVrFW5hJgk0EpUNj8mQPhLcB5YQicsjtAhTn4rGzdA0BTN6SQJ/ww0T+sUHxi0KxCNX4Hdwl7eyD8YNy117iXqBlHTBG93EkyBLm+SQHfao7KQeKUIKyVlc+Rq7JzntN9IPBIKzigpFFQRRHNQmhMpO6weveacSpQeyR8ni+Bhag4mutKCQlPWFbARjnAStqqYXEhPeLPjQqi4QpIpBY+jmpzKHb75Smbq8+J8xzD4q5OoIQlMf6aEP3eW5BX9T4Du+X7YgOosttXVlYhKHVKawtFnOoyqldvAJirTrb00UJKSrGteIwOShSiHITP9GgnHa9W+j0U+kd1XxIc5Jr/0xDuKHVkSl/9RIAlnQjPj4KdmxkeraanTfIbsXbsQFLP6K4LuKJ9xERUOeCN7QvATJRYN86Ac2MkzXJbQKSFU7ocIAUv+hseBC4IFUhIArqvJ0G6KurkfwkpJAkhz5k4xwm15KWle/yWa0DaZzj7CnQa5DK6I10buk6l8WT6Kv35O2gHRWIakXco07LRzozNvNPxmQwuQQAwZsi39HDAKCB0KiPgAAAABJRU5ErkJggg==' alt=''>
            </img>
            </div> 
              <span className={styles.오른쪽끄적임}>끄적임</span>
            </div>
      </div>


      <div className={styles.main2Container}>
        <div className={styles.main2Text}>
          <img src={process.env.PUBLIC_URL + "/imges/clover.png"} alt=""/>
          <span>오늘 하루도 수고한 당신에게,</span><br/>
               끄적임이 건네는 다정함 한 스푼
        </div>

        <div className={styles.main2InBox}>
          <p>적어도 나는 네 덕분에 행복해졌다고, 말해주고 싶었어.</p>
        </div>
      </div>

      <div className={styles.main3Container}>
        <div className={styles.main3Box1}>
          <div className={styles.main3Box1Text} onClick={goToBlue}>
            <span>요즘들어 나의 마음이<br/>
                시들어가는 기분이 든다면,</span>
          </div>
          
          <div className={styles.main3Box1Section2}>       
            <div style={{marginLeft: 30}}>유저님의 마음을 들여다 볼 자가진단</div>
            <div className={styles.line}></div>
            <div className={styles.Arrow}></div>
            <img src={process.env.PUBLIC_URL + "/imges/main1.png"} alt="" />
          </div> 
            <div className={styles.go}>검사 바로가기</div>       
        </div>


        <div className={styles.main3Box2} onClick={goToMap}>
          <div className={styles.main3Box2Text}>
            <span>내 집 주변<br />
                  가까운 정신의학과</span>
            <img src={process.env.PUBLIC_URL + "/imges/main2.png"} alt="" />
          </div>
          <div className={styles.main2Text2}>
            <div>찾아보기</div>
            <div className={styles.line2}></div>
            <div className={styles.Arrow2}></div>
          </div>
            <div className={styles.go2}>검색하러 가기</div>
        </div>

      </div>
      
    </div>
  )
}

export default Main1