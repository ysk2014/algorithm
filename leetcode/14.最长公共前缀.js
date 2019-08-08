/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let res = strs[0] || '';

//     for (let i = 0; i < strs.length; i++) {
//         let regex = new RegExp('^' + res);
//         while (!regex.test(strs[i]) && res.length) {
//             res = res.slice(0, res.length - 1);
//             regex = new RegExp('^' + res);
//         }
//     }

//     return res;
// };
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return '';
    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return res;
            }
        }

        res += strs[0][i];
    }

    return res;
};
