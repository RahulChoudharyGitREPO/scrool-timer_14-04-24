import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h2>Timer Component</h2>
            <p>This component displays a timer.</p>
            <p>Timer Value: {timer}</p>
        </div>
    );
};

export default TimerComponent;
