/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let left = headA
    let right = headB;
    while (left != right) {
        left = left == null ? headB : left.next
        right = right == null ? headA : right.next
    }
    return left
};