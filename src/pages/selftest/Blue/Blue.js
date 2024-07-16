import React from 'react'
import styles from './Blue.module.css'
import { Container } from 'react-bootstrap'

const TestPart = ({ number, text }) => (
    <div className={styles.testpart2}>
        <div className={styles.testcircle}><span>{number}</span></div>
        <p>{text}</p>
    </div>
);

const Blue = () => {

    const testData = [
        { number: 2, text: '먹고 싶지 않고, 식욕이 없었다.' },
        { number: 3, text: '어느 누가 도와준다 하더라도, 나의 울적한 기분을 떨쳐 버릴 수 없을 것 같았다.' },
        { number: 4, text: '무슨 일을 하든 정신을 집중하기가 힘들었다.' },
    ];

  return (

    <Container>

        <div className={styles.topText}>
            <div className={styles.topTextCusor}>홈</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor}>자가진단</div>
            <div className={styles.Arrow}></div>
            <div className={styles.topTextCusor}>우울증</div>
        </div>

        <div style={{fontSize: 20, fontWeight: "bold"}}>나의 마음 들여다보기</div>

        <div className={styles.topSetion2}>
            <div className={styles.section2dsign}><span>우울증</span></div>
            <div className={styles.section2dsign}><span>스트레스</span></div>
            <div className={styles.section2dsign}><span>불안</span></div>
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
                <div className={styles.testcircle}><span>1</span></div>
                <p>평소에는 아무렇지도 않던 일들이 괴롭고 귀찮게 느껴졌다.</p>
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
                <div className={styles.testcircle}><span>5</span></div>
                <p>비교적 잘 지냈다.</p>
            </div>
            
            <div className={styles.part2}>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
                <button className={styles.part2circlelast}></button>
            </div>
        </div>

        <button className={styles.nextPage}>
            <p>다음 페이지</p> <span className={styles.nextPageline}></span> <span className={styles.nextPageArrow}></span>
        </button>

    </Container>
  )
}

export default Blue
