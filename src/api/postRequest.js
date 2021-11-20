import axios from 'axios'
import dataToPost from './requestData'

const URL = "https://frosty-wood-6558.getsandbox.com:443/disshes"

export const postRequest = (data) => {
    const newData = dataToPost(data)
    const request = axios.post(
        URL,
        newData
    ).then(data => console.log(data))
        .catch(err => {
            alert(err)
        })
    return request
}

export default postRequest