import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Stress.module.css'
import { useNavigate } from 'react-router-dom';

const TestPart = ({ number, text }) => (
    <div className={styles.testpart2}>
        <div className={styles.testcircle}><span>{number}</span></div>
        <p>{text}</p>
    </div>
);

const StressTest2 = () => {
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

    const nextPage=()=>{
        Navigate('/stressResult')
    }
    
    const testData = [
        { number: 7, text: '일상생활의 짜증을 잘 다스릴 수 있다.' },
        { number: 8, text: '최상의 컨디션이라고 자주 느낀다.' },
        { number: 9, text: '통제할 수 없는 일 때문에 화가 난 경험이 자주 있다.' },
    ];

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
            <button className={styles.section2dsign} onClick={goToBlue}><span >우울증</span></button>
            <button className={styles.section2dsign} onClick={goToStress}><span >스트레스</span></button>
            <button className={styles.section2dsign} onClick={goToAnxiety}><span >불안</span></button>
        </div>


        <div className={styles.topSetion3}>
            <p>
                해당 자가진단은 <span>'스트레스'</span>에 관한 것입니다. <br/>
                아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한 질문입니다. <br/>
                이와 같은 일들이 지난 일주일 동안 얼마나 자주 일어났었는지 답변해 주십시오. <br/>
                <span>'끄적임'</span> 이 곳에선 숨기지 않으셔도 됩니다. <br/>
                솔직하게 답변하며 나의 마음을 들여다 보는 시간을 가져보세요.
            </p>
        </div>

        <div className={styles.topSetion4}>
            <p className={styles.section4p1}>왼쪽부터 0점 <span className={styles.line}></span> <span className={styles.Arrow2}></span> 3점입니다.</p> <br/>
            <p>(전혀 아니다 : 0점, 조금 느꼈다 : 1점, 상당히 느꼈다: 2점, 심하게 느꼈다: 3점)</p>
        </div>

        {/* 테스트 첫 문항 부분 */}

        <div>
            <div className={styles.testpart}>
                <div className={styles.testcircle}><span>6</span></div>
                <p>꼭 해야 하는 일을 처리할 수 없다고 생각한 적이 자주 있다.</p>
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
                <div className={styles.testcircle}><span>10</span></div>
                <p>어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 경험했다.</p>
            </div>
            
            <div className={styles.part2}>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
            </div>
        </div>

        <div className={styles.pageButtonBox}>
        <button className={styles.nextPage} onClick={goToStress}>
            <span className={styles.priviousPageline}></span><p>이전 페이지</p> <span className={styles.priviousPageArrow}></span>
            </button>

             <button className={styles.nextPage} onClick={nextPage}>
            <p>다음 페이지</p> <span className={styles.nextPageline}></span> <span className={styles.nextPageArrow}></span>
            </button>
        </div>

    </Container>
  )
}

export default StressTest2
