/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * 回溯法或者回调法
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r", "s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"]
    };

    let res = [];

    function callback(str, d) {
        if (d.length>0) {
            for (let i = 0; i < phone[d[0]].length; i++) {
                callback(str+phone[d[0]][i], d.slice(1));
            }
        } else {
            res.push(str);
        }
    }

    if (digits.length > 0) {
        callback("", digits);
    } 

    return res;
    
};

