import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import restaurantLogo from "../../assets/restaurantLogo.png"
import { FormContext } from '../../context/FormContextProvider'

import "./Loader.scss"
const Loader = () => {
    const { isLoading } = useContext(FormContext)
    const navigate = useNavigate()
    useEffect(() => {
        !isLoading && navigate("/home")
    }, [isLoading, navigate])

    return (
        <>
            {isLoading && <div className="loader">
                <img className="restaurantLogo-loader" src={restaurantLogo} alt="restaurantLogo" />
                <p>Loading...</p>
            </div>}
        </>
    )
}

export default Loader
