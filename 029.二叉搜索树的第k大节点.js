/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let arr = [];
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return arr[arr.length - k]
};

var kthLargest = function (root, k) {
    let cnt = k, res;
    function dfs(node) {
        if (!node) return
        dfs(node.right)
        cnt--
        if (cnt == 0) res = node.val
        dfs(node.left)
    }
    dfs(root)
    return res
};