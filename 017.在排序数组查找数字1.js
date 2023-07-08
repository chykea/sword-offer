/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.length) return 0
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) ? m.get(nums[i]) + 1 : 1)
    }
    console.log(m);
    return m.get(target) ? m.get(target) : 0
};

console.log(search(nums = [5, 7, 7, 8, 8, 10], target = 8));