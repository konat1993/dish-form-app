/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'

import Header from "../Header/Header"
import Form from "../Form/Form"
import { FormContext } from '../../context/FormContextProvider'
import { useNavigate, Outlet, useLocation } from 'react-router'

export const HomePage = () => {
    const { isLoading, data } = useContext(FormContext)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        isLoading && !data && navigate("/")
    }, [])
    return (
        <div className="homePage">
            <Header />
            {location.pathname === "/home" && <Form />}
            {location.pathname === "/home/result" && <Outlet />}
        </div>
    )
}

export default HomePage
