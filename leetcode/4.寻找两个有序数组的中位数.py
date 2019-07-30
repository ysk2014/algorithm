#
# @lc app=leetcode.cn id=4 lang=python3
#
# [4] 寻找两个有序数组的中位数
#


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        res = nums1 + nums2
        res.sort()
        n = len(res) // 2
        return res[n] if len(res) % 2 == 1 else (res[n]+res[n-1])/2
