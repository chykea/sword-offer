/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 递归，只能处理3行
var spiralOrder = function (matrix) {
    if (!matrix.length) return []
    let flag = matrix.map(i => i.map(j => 1))
    let res = []
    function order(row, col) {
        if (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1) return

        if (!flag[row][col]) return
        res.push(matrix[row][col])
        flag[row][col] = 0
        order(row, col + 1)
        order(row + 1, col)
        order(row, col - 1)
        order(row - 1, col)
    }
    order(0, 0)
    return res
};


var spiralOrder = function (matrix) {
    if (!matrix.length) return []
    const res = []
    let top = 0;
    let bottom = matrix.length - 1
    let left = 0;
    let right = matrix[0].length - 1
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i])
        for (let i = top; i < bottom; i++) res.push(matrix[i][right])
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])
        for (let i = bottom; i > top; i--) res.push(matrix[i][left])
        top++
        left++
        right--
        bottom--
    }
    if (top == bottom) for (let i = left; i <= right; i++) res.push(matrix[top][i])
    else if (left == right) for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
    return res
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));