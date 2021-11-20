import React from 'react'
import restaurantLogo from "../../assets/restaurantLogo.png"

import "./Loader.scss"
const Loader = () => {

    return (
        <div className="loader">
            <img className="restaurantLogo-loader" src={restaurantLogo} alt="restaurantLogo" />
            <p>Loading...</p>
        </div>
    )
}

export default Loader
