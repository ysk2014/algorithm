/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * 解题思路：
    找规律：
        1. 字符串自上向下排列，排到numRows再返回向上排列，我们认为它为一个单圈，它的字符串的数量是 numRows * 2 - 2
        2. 按行取值，首行与末行每圈取1个，其它行每圈到2个，相应索引值可自行计算。

 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // let finalArr = [];
    // let temp = [];
    // if (numRows >= s.length || numRows == 1) return s;

    // for (let i = 0; i < s.length; i++) {
    //     let j = i % (2 * numRows - 2);

    //     if (!temp[i % numRows]) temp[i % numRows] = [];

    //     if (j >= numRows) {
    //         temp[numRows - ((j + 1) % numRows) - 1].push(s[i]);
    //     } else {
    //         temp[j % numRows].push(s[i]);
    //     }
    // }

    // for (let i = 0; i < temp.length; i++) {
    //     finalArr = finalArr.concat(temp[i]);
    // }
    // return finalArr.join('');

    if (numRows === 1) return s;
    let len = Math.min(s.length, numRows);
    const rows = [];
    for (let i = 0; i < len; i++) rows[i] = '';

    let loc = 0;
    let down = false;

    for (const c of s) {
        rows[loc] += c;
        if (loc == 0 || loc == numRows - 1) down = !down;

        loc += down ? 1 : -1;
    }

    let ans = '';
    for (const row of rows) {
        ans += row;
    }
    return ans;
};
// console.log(convert('PAYPALISHIRING', 3));
