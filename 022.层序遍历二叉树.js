/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let res = []
    while (queue.length !== 0) {
        let size = queue.length;
        while (size > 0) {
            let node = queue.shift();
            res.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

            size--
        }
    }
    return res
};