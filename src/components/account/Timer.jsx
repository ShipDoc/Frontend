import React, { useState, useEffect } from "react";

const Timer = () => {
    // 5분을 초로 환산한 초기 상태 설정 (5 * 60 = 300초)
    const [seconds, setSeconds] = useState(300);

    useEffect(() => {
        // 1초마다 실행될 함수 설정
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // 컴포넌트가 언마운트될 때 setInterval을 정리(clean up)
        return () => clearInterval(interval);
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되게 함

    // 남은 시간을 MM:SS 형식으로 변환
    const formatTime = () => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    return <>남은 시간: {formatTime()}</>;
};

export default Timer;
