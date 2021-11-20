import axios from 'axios'
import React from 'react'
import { FormContext } from '../context/FormContextProvider'

const URL = "https://frosty-wood-6558.getsandbox.com:443/dishes"

export const useAsyncFn = () => {
    const { setIsLoading, setData } = React.useContext(FormContext)
    const [error, setError] = React.useState(null)
    const [resetInputs, setResetInputs] = React.useState(false)

    const postRequest = async (data) => {
        setIsLoading(true)
        const request = axios.post(
            URL,
            data
        ).then(data => {
            setData(data.data)
            setTimeout(() => {
                setIsLoading(false)
                setResetInputs(true)
            }, 5000);
            return data
        })
            .catch(err => {
                setError(err)
                alert(err)
            })
        return request
    }
    return [
        { error, resetInputs, setResetInputs },
        postRequest
    ]
}

export default useAsyncFn