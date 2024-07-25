import { Container } from 'react-bootstrap'
import styles from './Stress.module.css'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// 각 테스트 항목을 위한 함수형 컴포넌트
const TestPart = ({ number, text, buttonStates, handleButtonClick, isLast }) => (
    <div className={styles.roofpart}>
        <div className={styles.testpart2}>
            <div className={styles.testcircle}><span>{number}</span></div>
            <p>{text}</p>
        </div>
        <div className={styles.part2}>
            {!isLast && <div className={styles.part2line}></div>}
            {[...Array(4)].map((_, index) => (
                <button
                    key={index}
                    className={`${styles.part2circlelast} ${buttonStates[index].active ? styles.active : ''} ${isLast ? styles.lastButton : ''}`}
                    onClick={() => handleButtonClick(number - 1, index)}
                >
                    {buttonStates[index].value}
                </button>
            ))}
        </div>
    </div>
);

const StressTest = () => {
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

    
    // 상태 초기화
    const [testData, setTestData] = useState([]);
    const [buttonStates, setButtonStates] = useState([]);

     // 로컬 스토리지에서 상태 복원
     useEffect(() => {
        const savedStates = JSON.parse(localStorage.getItem('buttonStates'));
        if (savedStates) {
            setButtonStates(savedStates);
        }

        // 테스트 데이터 설정 (예제)
        const exampleTestData = [
            { number: 6, text: '꼭 해야 하는 일을 처리할 수 없다고 자주 생각이 든다.' },
            { number: 7, text: '일상생활의 짜증을 잘 다스릴 수 있다.' },
            { number: 8, text: '최상의 컨디션이라고 느낀 적이 드물다.' },
            { number: 9, text: '통제할 수 없는 일 때문에 자주 화가 나는 경험을 한다.' },
            { number: 10, text: '어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 자주 받는다.' }
        ];
        setTestData(exampleTestData);

        // 초기 버튼 상태 설정
        const initialButtonStates = exampleTestData.map(() =>
            Array(4).fill(false).map((_, index) => ({ value: index, active: false }))
        );
        setButtonStates(initialButtonStates);

    }, []);

    // 버튼 클릭 핸들러 함수
    const handleButtonClick = (questionIndex, buttonIndex) => {
        console.log(`Button clicked - Question Index: ${questionIndex}, Button Index: ${buttonIndex}`);
        setButtonStates(prevState => {
            const updatedStates = prevState.map((buttons, qIndex) =>
                qIndex === (questionIndex - 5)  // 수정된 인덱스 비교
                    ? buttons.map((button, bIndex) => ({
                        ...button,
                        active: bIndex === buttonIndex
                    }))
                    : buttons
            );
            localStorage.setItem('buttonStates', JSON.stringify(updatedStates));
            return updatedStates;
        });
    };

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

        <div>
                {testData.map((data, index) => (
                    <TestPart
                        key={index}
                        number={data.number}
                        text={data.text}
                        buttonStates={buttonStates[index]}
                        handleButtonClick={handleButtonClick}
                        isLast={index === testData.length - 1}
                    />
                ))}
            </div>

            <div className={styles.pageButtonBox}>
                <button className={styles.nextPage} onClick={goToStress}>
                    <span className={styles.priviousPageline}></span>
                    <p>이전 페이지</p> 
                    <span className={styles.priviousPageArrow}></span>
                </button>

                <button className={styles.nextPage} onClick={nextPage}>
                    <p>다음 페이지</p> 
                    <span className={styles.nextPageline}></span> 
                    <span className={styles.nextPageArrow}></span>
                </button>
            </div>

    </Container>
  )
}

export default StressTest