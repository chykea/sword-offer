/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let cur1 = l1;
    let cur2 = l2;
    let dummy = new ListNode(-1), cur = dummy;

    while (cur1 != null && cur2 != null) {
        if (cur1.val <= cur2.val) {
            cur.next = new ListNode(cur1.val)
            cur1 = cur1.next
        } else {
            cur.next = new ListNode(cur2.val)
            cur2 = cur2.next
        }
        cur = cur.next
    }
    while (cur1 != null) {
        cur.next = new ListNode(cur1.val)
        cur1 = cur1.next
        cur = cur.next
    }
    while (cur2 != null) {
        cur.next = new ListNode(cur2.val)
        cur2 = cur2.next
        cur = cur.next
    }
    return dummy.next
};