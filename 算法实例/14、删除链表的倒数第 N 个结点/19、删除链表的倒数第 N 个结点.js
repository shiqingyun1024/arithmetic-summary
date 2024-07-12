/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 创建一个哑节点作为辅助，防止删除头节点时的边界问题
    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // 让fast先走n+1步，因为dummy的存在，所以fast走到n步时，slow恰好在正确的位置
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // 现在两个指针一起走，当fast走到链表尾部时，slow刚好在待删节点的前一个位置
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // 删除slow.next指向的节点
    slow.next = slow.next.next;

    // 返回真正的头节点
    return dummy.next;
};