/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null; // 前一个节点
    let curr = head; // 当前节点
    while (curr !== null) {
        let next = curr.next; // 保存当前节点的下一个节点
        curr.next = prev; // 将当前节点指向前一个节点，完成一次反转
        prev = curr; // 前一个节点向后移动
        curr = next; // 当前节点向后移动
    }
    return prev; // 最终prev会指向原链表的尾节点，即新链表的头节点
};