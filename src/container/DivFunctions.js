export const ColorRandom = () => {
    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1
    return `rgb(${red},${green},${blue}`
}

