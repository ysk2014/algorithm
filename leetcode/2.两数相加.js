/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let c1 = l1,
        c2 = l2,
        l3,
        c3,
        carry = 0;
    while (c1 || c2 || carry) {
        let v1 = 0,
            v2 = 0;

        if (c1) {
            v1 = c1.val;
            c1 = c1.next;
        }

        if (c2) {
            v2 = c2.val;
            c2 = c2.next;
        }

        let sum = v1 + v2 + carry;

        carry = Math.floor(sum / 10);

        if (!c3) {
            l3 = new ListNode(sum % 10);
            c3 = l3;
        } else {
            c3.next = new ListNode(sum % 10);
            c3 = c3.next;
        }
    }

    return l3;
};
