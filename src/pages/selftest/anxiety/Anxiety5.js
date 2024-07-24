import React, { useState, useEffect } from 'react';
import styles from './Anxiety.module.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

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

const Anxiety5 = () => {
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
        Navigate('/anxiety4')
    }

    const nextPage=()=>{
        Navigate('/AnxietyResult')
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
         { number: 21, text: '땀을 많이 흘린다.' }
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
           qIndex === (questionIndex - 20)  // 수정된 인덱스 비교
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
            <div className={styles.topTextCusor} onClick={goToAnxiety}>불안</div>
        </div>

        <div style={{fontSize: 20, fontWeight: "bold"}}>나의 마음 들여다보기</div>

        <div className={styles.topSetion2}>
            <button className={styles.section2dsign2} onClick={goToBlue}><span >우울증</span></button>
            <button className={styles.section2dsign2} onClick={goToStress}><span >스트레스</span></button>
            <button className={styles.section2dsign} onClick={goToAnxiety}><span >불안</span></button>
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

export default Anxiety5
