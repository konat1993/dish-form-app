import React, { createContext } from 'react'
export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [data, setData] = React.useState(null)

    return (
        <FormContext.Provider value={{ isLoading, setIsLoading, data, setData }}>
            {children}
        </FormContext.Provider >
    )
}

export default FormContextProvider
