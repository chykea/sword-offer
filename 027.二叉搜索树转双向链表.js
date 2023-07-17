/**
 * @param {Node} root
 * @return {Node}
 */
function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};
var treeToDoublyList = function (root) {
    if (!root) return null
    function dfs(node, arr) {
        if (!node) return
        dfs(node.left, arr)
        arr.push(node)
        dfs(node.right, arr)
        return arr
    }

};

let root = new Node(4, new Node(2, new Node(1), new Node(3)), new Node(5))
treeToDoublyList(root)
