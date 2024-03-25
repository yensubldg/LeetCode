/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let tmp;
    const result = [];
    nums.sort().forEach(num => {
        if (tmp === num) result.push(num);
        tmp = num;
    })
    return result;
};