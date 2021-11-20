import axios from 'axios'
import React from 'react'
import { FormContext } from '../context/FormContextProvider'

const URL = "https://frosty-wood-6558.getsandbox.com:443/dishes"

export const useAsyncFn = () => {
    const { setIsLoading, setData } = React.useContext(FormContext)
    const [error, setError] = React.useState(null)

    const postRequest = async (data) => {
        setIsLoading(true)
        const request = axios.post(
            URL,
            data
        ).then(data => {
            setData(data.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
            return data
        })
            .catch(err => {
                setError(err)
                alert(err)
            })
        return request
    }
    return [
        { error },
        postRequest
    ]
}

export default useAsyncFn