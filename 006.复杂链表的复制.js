
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * @param {Node} head
 * @return {Node}
 */
// 不知道原题目在讲什么
// ..
var copyRandomList = function (head) {
    if (!head) return head;
    let cur = head;
    let newLink = new Node(head.val, null, null);
    let newCur = newLink;
    while (cur != null) {
        if (cur.next != null) {
            newCur.next = new Node(cur.next.val, null, null);
        }
        if (cur.random != null) {
            newCur.random = new Node(cur.random.val, null, null);
        }
        newCur = newCur.next
        cur = cur.next;
    }
    return newLink;
};