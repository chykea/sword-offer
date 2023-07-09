/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(0, i, j)) return true
        }
    }
    function dfs(n, row, col) {
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] != word.charAt(n)) return false
        if (word.length - 1 == n) return true
        let tmp = board[row][col]
        board[row][col] = '-'
        let res = dfs(n + 1, row, col + 1)
            || dfs(n + 1, row + 1, col)
            || dfs(n + 1, row, col - 1)
            || dfs(n + 1, row - 1, col);

        board[row][col] = tmp
        return res
    }

    return false
};
console.log(exist(board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"));