/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        var tmp = [];
        for (var j = i; j < nums.length; j++) {
            if (nums[j] === 1 && nums[j] < k) {
                result++;
                continue;
            }
            tmp.push(nums[j]);
            var product = 1;
            for (var l = 0; l < tmp.length; l++) {
                product *= tmp[l];
            }
            if (product < k) {
                result++;
            } else {
                break;
            }
        }
    }
    return result;
};
