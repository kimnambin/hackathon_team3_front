import React from 'react'
import styles from './Blue.module.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const TestPart = ({ number, text }) => (
    <div className={styles.testpart2}>
        <div className={styles.testcircle}><span>{number}</span></div>
        <p>{text}</p>
    </div>
);

const Blue3 = () => {
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

    const privPage=()=>{
        Navigate('/blue2')
    }

    const nextPage=()=>{
        Navigate('/blue4')
    }

    const testData = [
        { number: 12, text: '막연히 두려움을 느낀다.' },
        { number: 13, text: '평소에 비해 말수가 적어졌다.' },
        { number: 14, text: '세상에 홀로 있는 듯한 외로움을 느낀다.' },
    ];

  return (

    <Container>

        <div className={styles.topText}>
            <div className={styles.topTextCusor} onClick={goToMain}>홈</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor} onClick={goToBlue}>자가진단</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor} onClick={goToBlue}>우울증</div>
        </div>

        <div style={{fontSize: 20, fontWeight: "bold"}}>나의 마음 들여다보기</div>

        <div className={styles.topSetion2}>
            <button className={styles.section2dsign} onClick={goToBlue}><span >우울증</span></button>
            <button className={styles.section2dsign2} onClick={goToStress}><span >스트레스</span></button>
            <button className={styles.section2dsign2} onClick={goToAnxiety}><span >불안</span></button>
        </div>

        <div className={styles.topSetion3}>
            <p>
                해당 자가진단은 <span>'우울증'</span>에 관한 것입니다. <br/>
                아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한 질문입니다. <br/>
                이와 같은 일들이 지난 일주일 동안 얼마나 자주 일어났었는지 답변해 주십시오. <br/>
                <span>'끄적임'</span> 이 곳에선 숨기지 않으셔도 됩니다. <br/>
                솔직하게 답변하며 나의 마음을 들여다 보는 시간을 가져보세요.
            </p>
        </div>

        <div className={styles.topSetion4}>
            <p className={styles.section4p1}>왼쪽부터 0점 <span className={styles.line}></span> <span className={styles.Arrow2}></span> 3점입니다.</p> <br/>
            <p>(1일 이하 : 0점, 1~2일 : 1점, 3~4일: 2점, 5일 이상: 3점)</p>
        </div>

        {/* 테스트 첫 문항 부분 */}

        <div>
            <div className={styles.testpart}>
                <div className={styles.testcircle}><span>11</span></div>
                <p>잠을 설친다(잠을 잘 이루지 못한다).</p>
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
                <div className={styles.testcircle}><span>15</span></div>
                <p>큰 불만 없는 생활을 한다.</p>
            </div>
            
            <div className={styles.part2}>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
            </div>
        </div>

        <div className={styles.pageButtonBox}>
        <button className={styles.nextPage} onClick={privPage}>
            <span className={styles.priviousPageline}></span><p>이전 페이지</p> <span className={styles.priviousPageArrow}></span>
            </button>

             <button className={styles.nextPage} onClick={nextPage}>
            <p>다음 페이지</p> <span className={styles.nextPageline}></span> <span className={styles.nextPageArrow}></span>
            </button>
        </div>

    </Container>
  )
}

export default Blue3;
