import React, { createContext, useEffect } from 'react'
export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState(null)
    const [timeData, setTimeData] = React.useState(null)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2300);
    }, [])

    return (
        <FormContext.Provider value={{ isLoading, setIsLoading, data, setData, timeData, setTimeData }}>
            {children}
        </FormContext.Provider >
    )
}

export default FormContextProvider
