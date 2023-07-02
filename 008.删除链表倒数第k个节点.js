/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    if (!head) head;
    let size = 0;
    let cur = head;
    while (cur != null) {
        size++;
        cur = cur.next
    }
    cur = head
    let cnt = size - k
    for (let i = 0; i < cnt; i++) cur = cur.next;
    return cur
};