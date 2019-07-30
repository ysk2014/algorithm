#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        isFirst = True
        currentNode = None
        head = None
        while(l1 or l2 or carry != 0):
            val1 = 0
            val2 = 0
            if l1:
                val1 = l1.val
                l1 = l1.next
            if l2:
                val2 = l2.val
                l2 = l2.next
            sum = val1 + val2 + carry
            if sum >= 10:
                carry = 1
                sum = sum % 10
            else:
                carry = 0
            node = ListNode(sum)
            
            if isFirst:
                currentNode = node
                head = currentNode
                isFirst = False
            else:
                currentNode.next = node
                currentNode = currentNode.next
        return head

