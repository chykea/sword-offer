/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!A || !B) return false
    if (A.val == B.val && helper(A.left, B.left) && helper(A.right, B.right)) return true
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
var helper = function (root1, root2) {
    if (!root2) return true
    if (!root1) return false
    if (root1.val == root2.val) return helper(root1.left, root2.left) && helper(root1.right, root2.right)
    else return false
}