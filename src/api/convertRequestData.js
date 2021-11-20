const prepTimeMerge = (data) => {
    const h = data.prepTime__hours.length === 1 ? "0" + data.prepTime__hours : data.prepTime__hours
    const min = data.prepTime__minutes.length === 1 ? "0" + data.prepTime__minutes : data.prepTime__minutes
    const s = data.prepTime__seconds.length === 1 ? "0" + data.prepTime__seconds : data.prepTime__seconds
    const time = `${h}:${min}:${s}`

    return time
}

export const convertRequestData = (data) => {
    const createNewData = { ...data }
    delete createNewData["prepTime__hours"]
    delete createNewData["prepTime__minutes"]
    delete createNewData["prepTime__seconds"]

    const convertData = Object.entries(createNewData).reduce((reduced, el) => {
        const key = el[0]
        const value = isNaN(el[1]) ? el[1] : parseInt(el[1])
        reduced[key] = value
        return reduced
    }, {})


    const newData = {
        ...convertData,
        preparation_time: prepTimeMerge(data)
    }
    return newData
}

export default convertRequestData