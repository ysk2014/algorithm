/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return '';
    if (s.length < 2) return s;
    s = '^#' + s.split('').join('#') + '#$';
    var radius = new Array(s.length).fill(0);
    var C = 0,
        centerIndex = 0,
        maxRight = 0,
        maxLen = 0;

    for (var i = 1; i < s.length - 1; i++) {
        // 计算初始回文半径, i' = 2 * C - i
        radius[i] = maxRight > i ? Math.min(maxRight - i, radius[2 * C - i]) : 0;
        // 扩展半径
        while (
            s[i + 1 + radius[i]] &&
            s[i - 1 - radius[i]] &&
            s[i + 1 + radius[i]] === s[i - 1 - radius[i]]
        )
            radius[i]++;
        // 更新当前搜索的最大右边界和位置
        if (i + radius[i] > maxRight) {
            C = i;
            maxRight = i + radius[i];
        }
        // 更新最大回文串长度及位置
        if (maxLen < radius[i]) {
            maxLen = radius[i];
            centerIndex = i;
        }
    }

    return s
        .slice(centerIndex - maxLen, centerIndex + maxLen + 1)
        .split('#')
        .join('');
};
