export const encodeBase64 = (value: string) => {
    const encodedText = Buffer.from(value).toString('base64')

    return encodedText.replace(/=/g, '')
}