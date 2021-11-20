import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs"

import "./TimerErrorLabel.scss"

export const TimerErrorLabel = ({ errors }) => {
    const timeErrorVal = () => {
        if (errors["prepTime__hours"] ||
            errors["prepTime__minutes"] ||
            errors["prepTime__seconds"]) {
            return true
        } else {
            return false
        }
    }
    return (

        <div className={`timerErrorLabel ${timeErrorVal() ? "timerErrorLabel--active" : ""}`}>
            <div className="timerErrorLabel__tooltip">
                <span>Hint:</span>
                <BsInfoCircleFill className="tooltip__icon" />
            </div>
            <div className="timerErrorLabel__description">
                <p>You have to provide time: HH:mm:ss</p>
                <p>HH - between 0 - 99</p>
                <p>mm - between 0 - 59</p>
                <p>ss - between 0 - 59</p>
                <p>All fields must have max 2 integers.</p>
            </div>
        </div>
    )
}

export default TimerErrorLabel
