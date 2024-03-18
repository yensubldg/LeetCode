/**
 * solution 1
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const total = BigInt(num1) + BigInt(num2);
    return total.toString();
};

/**
 * solution 2.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const numberArray1 = num1.split("").reverse();
    const numberArray2 = num2.split("").reverse();
    const sumArray = [];
    const length =
        numberArray1.length > numberArray2.length
            ? numberArray1.length
            : numberArray2.length;
    let carry = 0;
    for (let i = 0; i <= length; i++) {
        const sum =
            (parseInt(numberArray1[i]) || 0) +
            (parseInt(numberArray2[i]) || 0) +
            carry;
        carry = Math.floor(sum / 10);
        sumArray.push(sum % 10);
    }
    return sumArray.reverse().join("").replace(/^0+/, "") || "0";
};