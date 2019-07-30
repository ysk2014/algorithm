#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0
        if res is None or len(s) == 0:
            return res

        d = {}
        start = 0
        tmp = 0
        for i in range(len(s)):
            if s[i] in d and d[s[i]] >= start:
                start = d[s[i]]+1

            tmp = i - start + 1
            d[s[i]] = i
            res = max(res, tmp)

        return res
