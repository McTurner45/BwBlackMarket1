/**
 * Generates random uppercase letters
 * @param length Number of letters to generate
 * @return 'ABCD' depending on length
 */
export const generateRandomLetters = (length) => {
    // declare all characters
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

/**
 * Generates a random whole number string
 * @param length Number of digits in number
 * @return '1234' depending on length
 */
export const generateRandomNumber = (length) => {
    return Math.random().toString().substring(2, length+2);
}