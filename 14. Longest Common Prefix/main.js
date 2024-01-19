/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var allArray = [];
    let result = "";
    let minLength=201;
    strs.forEach((str) => {
        const strResult = str.split("");
        allArray.push(strResult);
        if (minLength > strResult.length) minLength = strResult.length;
    })
    if (allArray?.[0]) {
        for (let i = 0; i < minLength; i++) {
            let tmp = allArray[0][i];
            for (let j = 0; allArray.length; j++){
                if (!allArray?.[j]?.[i]) break;
                if (allArray[j][i] != tmp) return result;
            }
            result += tmp;
        }
    }
    return result;
};
