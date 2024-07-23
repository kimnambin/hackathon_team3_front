import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Stress.module.css'
import { useNavigate } from 'react-router-dom';


const StressResult = () => {
    // 네비게이트 함수
    const Navigate = useNavigate();

    const goToMain=()=>{
        Navigate('/')
    }

    const goToBlue=()=>{
        Navigate('/blue')
    }

    const goToStress=()=>{
        Navigate('/StressTest')
    }
    
    const goToAnxiety=()=>{
        Navigate('/anxiety')
    }

  return (

    <Container>
    <div className={styles.topText}>
            <div className={styles.topTextCusor} onClick={goToMain}>홈</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor} onClick={goToBlue}>자가진단</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor} onClick={goToStress}>스트레스</div>
        </div>

        <div style={{fontSize: 20, fontWeight: "bold"}}>나의 마음 들여다보기</div>

        <div className={styles.topSetion2}>
            <button className={styles.section2dsign2} onClick={goToBlue}><span >우울증</span></button>
            <button className={styles.section2dsign} onClick={goToStress}><span >스트레스</span></button>
            <button className={styles.section2dsign2} onClick={goToAnxiety}><span >불안</span></button>
        </div>

      {/* 결과 박스 */}

      <div className={styles.resultBox}>
          <div className={styles.resultText}>
              <p>'유저'님의 검사 결과</p>
          </div>
          <div>
              <div className={styles.resultScoreLine}> <img src={process.env.PUBLIC_URL + "/imges/pol.png"} alt=""/></div> <br/>
              <p className={styles.scoreText}><span>0</span> <span>5</span> <span>10</span> <span>15</span> <span>20</span>
              </p>
          </div>
          <div className={styles.resultIntro}>
              <p>현재 '유저'님은 <span className={styles.resultHighlight}>'20점'</span>으로 <span className={styles.resultHighlight}>'심한 스트레스'</span>상태로 의심됩니다. <img src={process.env.PUBLIC_URL + "/imges/cloud.png"} alt="" /> <br/>
                 <span>'스트레스'</span>를 해소할 수 있는 활동을 적극적으로 하는 것을 추천드리며, <br/>
                 <span>전문가의 도움을 받아보시는 걸 권장드립니다.</span><img src={process.env.PUBLIC_URL + "/imges/drug.png"} alt="" />
              </p>
          </div>

          <div className={styles.resultLink}>
              <p>주변 정신과 의료기관 찾기</p>
              <div className={styles.plusline}></div>
              <div className={styles.resultArrow2}></div>
          </div>
      </div>

      {/* 추천 영상 */}

      <div className={styles.recommendBox}>
          <p>'유저'님을 위한 추천영상</p>
          <div className={styles.recomendVideo}>
              <div className={styles.recomendVideoBox}></div> <br />
              <div className={styles.recomendVideoBox}></div>
          </div>
      </div>

      <div className={styles.recommendBox}>
          <p>유저님을 위한 추천활동</p>
          <div className={styles.recommendActive}>
              <div>
                  <img src={process.env.PUBLIC_URL + "/imges/cicle.png"} alt="" /> <br/>
                  <span>자전거 타기</span>
              </div>
              <div>
                  <img src={process.env.PUBLIC_URL + "/imges/books.png"} alt="" style={{width: 110}}/><br />
                  <span>독서하기</span>
              </div>
              <div>
                  <img src={process.env.PUBLIC_URL + "/imges/yoga.png"} alt="" /><br/>
                  <span>명상하기</span>
              </div>
          </div>
      </div>

      <div className={styles.resultButtonBox}>
          <button className={styles.resultButton1}>결과 저장하기</button>
          <button className={styles.resultButton2} onClick={goToStress}>다시 검사하기</button>
      </div>
  </Container>
  )
}

export default StressResult
