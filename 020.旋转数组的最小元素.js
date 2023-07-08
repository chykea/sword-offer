/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) return numbers[i]
    }
    return min
};