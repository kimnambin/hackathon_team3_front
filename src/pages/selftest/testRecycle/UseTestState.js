import { useState, useEffect } from 'react';

const UseTestState = (initialTestData, localStorageKey) => {
    const [testData, setTestData] = useState(initialTestData);
    const [buttonStates, setButtonStates] = useState([]);

    useEffect(() => {
        const savedStates = JSON.parse(localStorage.getItem(localStorageKey));
        if (Array.isArray(savedStates)) {
            setButtonStates(savedStates);
        } else {
            const initialButtonStates = initialTestData.map(() =>
                Array(4).fill(null).map((_, index) => ({ value: index, active: false }))
            );
            setButtonStates(initialButtonStates);
        }
    }, [initialTestData, localStorageKey]);

    const handleButtonClick = (questionIndex, buttonIndex) => {
        setButtonStates(prevState => {
            const updatedStates = prevState.map((buttons, qIndex) =>
                qIndex === questionIndex
                    ? buttons.map((button, bIndex) => ({
                        ...button,
                        active: bIndex === buttonIndex
                    }))
                    : buttons
            );
            localStorage.setItem(localStorageKey, JSON.stringify(updatedStates));
            return updatedStates;
        });
    };

    return [testData, buttonStates, handleButtonClick];
};

export default UseTestState;
