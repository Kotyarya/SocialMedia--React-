export const required = (value) => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (maxLength) => (value) => {
    if (value.length <= maxLength) return undefined
    return `Max length is ${maxLength} symbols`
}
export const minLength = (minLength) => value => {
    if (value.length >= minLength) return undefined
    return `Min length is ${minLength} symbols`
}

