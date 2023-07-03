/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    if (!nums.length) return []
    let left = 0, right = nums.length - 1;
    while (left < right) {

        while (right > left && nums[left] % 2 == 1) {
            left++;
        }
        while (right > left && nums[right] % 2 == 0) {
            right--;
        }
        let tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++;
        right--;
    }
    console.log(nums);
    return nums
};
exchange([1, 2, 3, 4])
// exchange([1, 3, 5])
// console.log(exchange([1, 2, 3, 4]));