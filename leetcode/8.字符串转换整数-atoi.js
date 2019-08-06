/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
// var myAtoi = function(str) {
//     if (!str) return 0;

//     str = str.trim();

//     let status = 'plus',
//         start = 0,
//         res = '';

//     if (str[0] == '-') {
//         start = 1;
//         status = 'minus';
//     } else if (str[0] == '+') {
//         start = 1;
//         status = 'plus';
//     } else if (isNaN(parseInt(str[0]))) {
//         return 0;
//     } else {
//         start = 0;
//         status = 'plus';
//     }
//     for (let i = start; i < str.length; i++) {
//         if (isNaN(parseInt(str[i]))) {
//             break;
//         } else {
//             res += str[i];
//         }
//     }
//     if (res) {
//         res = parseInt(res);

//         let max = Math.pow(2, 31);

//         if (status == 'plus') {
//             if (res <= max - 1) {
//                 return res;
//             } else {
//                 return max - 1;
//             }
//         } else {
//             if (res <= max) {
//                 return -res;
//             } else {
//                 return -max;
//             }
//         }
//     } else {
//         return 0;
//     }
// };
var myAtoi = function(str) {
    let result = parseInt(str);
    if (String(result) === 'NaN') {
        return 0;
    }
    if (result > 0) {
        return Math.min(result, Math.pow(2, 31) - 1);
    } else {
        return Math.max(result, Math.pow(2, 31) * -1);
    }
};
