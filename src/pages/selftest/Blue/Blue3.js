import React, { useState, useEffect } from 'react';
import styles from './Blue.module.css';
import { Container } from 'react-bootstrap';
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



const Blue3 = () => {
    const navigate = useNavigate();

    const goToMain = () => navigate('/');
    const goToBlue = () => navigate('/blue');
    const goToStress = () => navigate('/StressTest');
    const goToAnxiety = () => navigate('/anxiety');
    const nextPage = () => navigate('/blue4');
    const privPage=()=>navigate('/blue2')

    // 상태 초기화
    const [testData, setTestData] = useState([]);
    const [buttonStates, setButtonStates] = useState([]);

    // 초기 데이터 설정
    useEffect(() => {
        const savedStates = JSON.parse(localStorage.getItem('buttonStates'));
        if (savedStates) {
            setButtonStates(savedStates);
        }

        // 테스트 데이터 설정 (예제)
        const exampleTestData = [
            { number: 11, text: '잠을 설쳤다(잠을 잘 이루지 못했다).' },
            { number: 12, text: '두려움을 느꼈다.' },
            { number: 13, text: '평소에 비해 말수가 줄어들었다.' },
            { number: 14, text: '세상에 홀로 있는 듯한 외로움을 느꼈다.' },
            { number: 15, text: '큰 불만 없이 생활했다.' }
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
        // 콘솔 로그를 통해 클릭된 인덱스를 확인합니다.
        console.log(`Button clicked - Question Index: ${questionIndex}, Button Index: ${buttonIndex}`);
    
        setButtonStates(prevState => {
            
            const updatedStates = prevState.map((buttons, qIndex) =>
                qIndex === (questionIndex - 10)  // 수정된 인덱스 비교
                    ? buttons.map((button, bIndex) => ({
                        ...button,
                        active: bIndex === buttonIndex
                    }))
                    : buttons
            );
    
            // 업데이트된 상태를 콘솔에 로그로 찍어봅니다.
            console.log('Updated States:', updatedStates);
    
            // 로컬 스토리지에 상태를 저장합니다.
            localStorage.setItem('buttonStates', JSON.stringify(updatedStates));
    
            // 업데이트된 상태를 반환하여 컴포넌트를 리렌더링합니다.
            return updatedStates;
        });
    };
    

    return (
        <Container>
            <div className={styles.topText}>
                <div className={styles.topTextCusor} onClick={goToMain}>홈</div>
                <div className={styles.Arrow}></div>
                <div className={styles.topTextCusor}>자가진단</div>
                <div className={styles.Arrow}></div>
                <div className={styles.topTextCusor}>우울증</div>
            </div>

            <div style={{ fontSize: 20, fontWeight: "bold" }}>나의 마음 들여다보기</div>

            <div className={styles.topSetion2}>
                <button className={styles.section2dsign} onClick={goToBlue}><span>우울증</span></button>
                <button className={styles.section2dsign2} onClick={goToStress}><span>스트레스</span></button>
                <button className={styles.section2dsign2} onClick={goToAnxiety}><span>불안</span></button>
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
                <button className={styles.nextPage} onClick={privPage}>
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
    );
};

export default Blue3;
