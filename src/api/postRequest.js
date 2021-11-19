import axios from 'axios'
import dataToPost from './requestData'
export const postRequest = (data) => {
    const newData = dataToPost(data)
    const request = axios.post("https://frosty-wood-6558.getsandbox.com:443/dishes",
        newData
    ).then(data => console.log(data))
        .catch(err => {
            alert(err)
        })
    return request
}

export default postRequest