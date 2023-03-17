
export const formatDate  = (date) => {
    const now = new Date(date)
    let d = now.getDate()
    let m = now.getMonth()
    let y = now.getFullYear()

    let h = now.getHours()
    let mint = now.getMinutes()
    return `${d}/${m}/${y} , ${h}:${mint}`
}