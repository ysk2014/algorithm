/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */
/**
 * 贪心算法
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let index = 0;
    let res = '';

    while (index < 13) {
        while (num >= nums[index]) {
            res += romans[index];
            num -= nums[index];
        }
        index += 1;
    }
    return res;
};
