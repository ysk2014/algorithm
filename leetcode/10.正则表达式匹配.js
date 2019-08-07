/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let reg = new RegExp('^' + p + '$');
    return reg.test(s);
};

/**
 * 回溯法
 */
// var isMatch = function(s, p) {
//     if (!p) return !s;

//     let first_match = Boolean(s) && ['.', s[0]].includes(p[0]);

//     if (p.length >= 2 && p[1] === '*') {
//         return isMatch(s, p.substr(2)) || (first_match && isMatch(s.substr(1), p));
//     } else {
//         return first_match && isMatch(s.substr(1), p.substr(1));
//     }
// };
