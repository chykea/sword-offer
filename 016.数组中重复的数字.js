/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    if (!nums.length) return -1
    let s = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) return nums[i]
        s.add(nums[i])
    }
    return -1
};
