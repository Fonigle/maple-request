/**
 * generate a random int.
 *
 * @param {number} digit digit of the generated int. default is 5.
 */
export default function randomInt(digit: number = 5) {
    if (digit > 0) {
        const intFix = parseInt(digit.toString());
        const rdm = Math.random() * Math.pow(10, intFix);

        const result = parseInt(rdm.toFixed(0));

        return result;
    } else {
        throw new Error('the param fix must be more then 0');
    }
}
