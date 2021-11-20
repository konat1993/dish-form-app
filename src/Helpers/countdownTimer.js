import dayjs from "dayjs"

export const getRemainingTimeUntilMsTimestamp = (timestampMs) => {
    const timestampDayjs = dayjs(timestampMs)
    const nowDayjs = dayjs()
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs)
    }
}

const getRemainingHours = (nowDayjs, timestampDayjs) => {
    const hours = timestampDayjs.diff(nowDayjs, 'hours')
    return hours
}
const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return padWithZeros(minutes, 2)

}
const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return padWithZeros(seconds, 2)
}

const padWithZeros = (number, minLength) => {
    const numberString = number.toString()
    if (numberString.length >= minLength) return numberString
    return "0".repeat(minLength - numberString.length) + numberString
}