import React from 'react'

import restaurantLogo from "../../assets/restaurantLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { Fade, Tooltip } from '@mui/material';

import "./Header.scss"
export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__top">
                    <Tooltip title="For UI purposes" TransitionComponent={Fade} enterDelay={500} leaveDelay={200}>
                        <MenuIcon className="top__menuBtn" />
                    </Tooltip>
                    <Tooltip title="For UI purposes" TransitionComponent={Fade} enterDelay={500} leaveDelay={200}>
                        <Avatar className="top__avatar" />
                    </Tooltip>

                </div>
                <div className="header__bottom">
                    <img className="bottom__logo" src={restaurantLogo} alt="restaurantLogo" />
                </div>
            </div>
        </>
    )
}

export default Header
