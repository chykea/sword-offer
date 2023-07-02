function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    if (!head) return [];
    let cur = head;
    let arr = []
    while (cur != null) {
        arr.push(cur.val)
        cur = cur.next
    }
    return arr.reverse()
};