import React from 'react'
import styles from './Anxiety.module.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const TestPart = ({ number, text }) => (
  <div className={styles.testpart2}>
      <div className={styles.testcircle}><span>{number}</span></div>
      <p>{text}</p>
  </div>
);

const Anxiety4 = () => {
    // 네비게이트 함수
    const Navigate =useNavigate(); 
    
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

    const privpage=()=>{
        Navigate('/anxiety3')
    }

    const nextPage=()=>{
        Navigate('/anxiety5')
    }

  const testData = [
    { number: 17, text: '불안한 상태에 있다.' },
    { number: 18, text: '자주 소화가 안되고 뱃속이 불편하다.' },
    { number: 19, text: '가끔씩 기절할 것 같다.' },
];


  return (
    <Container>
      <div className={styles.topText}>
            <div className={styles.topTextCusor} onClick={goToMain}>홈</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor}>자가진단</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor}>우울증</div>
        </div>

        <div style={{fontSize: 20, fontWeight: "bold"}}>나의 마음 들여다보기</div>

        <div className={styles.topSetion2}>
            <div className={styles.section2dsign} onClick={goToBlue}><span>우울증</span></div>
            <div className={styles.section2dsign} onClick={goToStress}><span >스트레스</span></div>
            <div className={styles.section2dsign} onClick={goToAnxiety}><span >불안</span></div>
        </div>

        <div className={styles.topSetion3}>
            <p>
                해당 자가진단은 <span>'불안'</span>에 관한 것입니다. <br/>
                아래에 있는 항목들은 불안한 상태에서 경험할 수 있는 것들입니다. <br/>
                각 항목을 주의 깊게 읽고 지난 한 주 동안 당신의 경험이나 상태를 아래와 같이 그 정도에 따라 적절한 숫자로 표시하세요. <br/>
                <span>'끄적임'</span> 이 곳에선 숨기지 않으셔도 됩니다. <br/>
                솔직하게 답변하며 나의 마음을 들여다 보는 시간을 가져보세요.
            </p>
        </div>

        <div className={styles.topSetion4}>
            <p className={styles.section4p1}>왼쪽부터 0점 <span className={styles.line}></span> <span className={styles.Arrow2}></span> 3점입니다.</p> <br/>
            <p>(전혀 아니다 : 0점, 조금 느꼈다 : 1점, 상당히 느꼈다: 2점, 심하게 느꼈다 : 3점)</p>
        </div>

        {/* 테스트 첫 문항 부분 */}

        <div>
            <div className={styles.testpart}>
                <div className={styles.testcircle}><span>16</span></div>
                <p>죽을 것 같은 두려움을 느낀다.</p>
            </div>

            
            <div className={styles.part2}>
                <div className={styles.part2line}></div>
                <button className={styles.part2circle}></button>
                <button className={styles.part2circle}></button>
                <button className={styles.part2circle}></button>
                <button className={styles.part2circle}></button>
            </div>
        </div>

        {/* 테스트 문항 부분 반복*/}

        <div>
            {testData.map(({ number, text }, index) => (
                <React.Fragment key={index}>
                    <TestPart number={number} text={text} />

                    <div className={styles.part2}>
                        <div className={styles.part2line}></div>
                        <button className={styles.part2circle}></button>
                        <button className={styles.part2circle}></button>
                        <button className={styles.part2circle}></button>
                        <button className={styles.part2circle}></button>
                    </div>
                </React.Fragment>
            ))}
        </div>
  
        {/* 테스트 마지막 문항 부분 */}
        <div>
            <div className={styles.testpart2}>
                <div className={styles.testcircle}><span>20</span></div>
                <p>자주 얼굴이 붉어지곤 한다.</p>
            </div>
            
            <div className={styles.part2}>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
            </div>
        </div>

        <div className={styles.pageButtonBox}>
        <button className={styles.nextPage} onClick={privpage}>
            <span className={styles.priviousPageline}></span><p>이전 페이지</p> <span className={styles.priviousPageArrow}></span>
            </button>

             <button className={styles.nextPage} onClick={nextPage}>
            <p>다음 페이지</p> <span className={styles.nextPageline}></span> <span className={styles.nextPageArrow}></span>
            </button>
        </div>
    </Container>
  )
}

export default Anxiety4
