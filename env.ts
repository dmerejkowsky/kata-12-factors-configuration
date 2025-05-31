export const getValue = (key : string) : string => {
    const res = process.env[key]
    if(!res) {
        throw new Error(`Variable ${key} not found in environment`)
    }
    return res
}

export const getOptionalValue = (key : string) : string | undefined => {
    return process.env[key]
}