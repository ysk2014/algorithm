/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dumy = new ListNode(0);
    dumy.next = head;

    let first = dumy, second = dumy;

    for (let i = 0; i <= n; i++ ) {
        first = first.next;
    }

    while (first != null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dumy.next;
};

