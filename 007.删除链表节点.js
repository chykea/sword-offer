/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var deleteNode = function (head, val) {
    if (!head) return
    if (head.val == val) return head.next
    let cur = new ListNode(0);
    cur.next = head;

    while (cur.next != null) {
        if (cur.next.val == val) {
            break;
        }
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head
};
