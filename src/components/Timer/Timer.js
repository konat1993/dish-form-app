import React, { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from '../../Helpers/countdownTimer'
import "./Timer.scss"
const defaultRemainingTime = {
    seconds: "",
    minutes: "",
    hours: ""
}
export const Timer = ({ countDownTimeStampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countDownTimeStampMs)
        }, 1000);
        return () => clearInterval(intervalId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }
    return (
        <div className="timer">
            <div className="timer__hours">
                {remainingTime.hours}h</div>
            <div className="timer__minutes">
                {remainingTime.minutes}min</div>
            <div className="timer__seconds">
                {remainingTime.seconds}s</div>
        </div>
    )
}

export default Timer
