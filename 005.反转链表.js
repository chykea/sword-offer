/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function (head) {
    if (!head) return null
    let pre = null, cur = head, next = null;
    while (cur != null) {
        next = cur.next;
        cur.next = pre;
        pre = cur
        cur = next;
    }

    return pre
};


let arr = [1, 2, 3, 4, 5]
let tmp = []
for (let i = 0; i < arr.length; i++) {
    tmp.push(new ListNode(arr[i]))
}
for (let i = 0; i < tmp.length - 1; i++) {
    tmp[i].next = tmp[i + 1];
}
reverseList(tmp[0])