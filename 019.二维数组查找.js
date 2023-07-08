/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) return false

    for (let i = 0; i < matrix.length; i++) {
        let j = 0, k = matrix[0].length - 1;

        while (j <= k) {
            let mid = Math.floor((j + k) / 2);
            if (matrix[i][mid] == target) return true
            if (matrix[i][mid] > target) k = mid - 1
            else j = mid + 1
        }
    }
    return false
};
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(matrix, 20));