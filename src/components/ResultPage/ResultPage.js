import React, { useContext } from 'react'
import foodDelivery from "../../assets/foodDelivery.png"
import { FormContext } from '../../context/FormContextProvider'
import { useNavigate } from 'react-router'
import Timer from "../Timer"

import "./ResultPage.scss"



const expiryTimeStamp = (timeData) => {
    if (timeData) {
        const { h, min, sec } = timeData
        const deliveryTime = h * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000
        const time = Date.now();
        const timeStamp = time + deliveryTime
        return timeStamp
    } else {
        return 0
    }
}
export const ResultPage = () => {
    const { timeData } = useContext(FormContext)
    const navigate = useNavigate()

    return (
        <div className="resultPage">
            <div className="resultPage__content">

                <img className="content__img" src={foodDelivery} alt="foodDeliveryImg" />
                <div className="content__info">
                    <p>Great !</p>
                    <span>Your meal should be delivered by:</span>
                    {timeData && <Timer countDownTimeStampMs={expiryTimeStamp(timeData)} />}
                </div>
                <div className="content__bottom">

                    <button className="bottom__button" onClick={() => navigate("/home")}>Go back and order again</button>
                </div>
            </div>
        </div>
    )
}

export default ResultPage
