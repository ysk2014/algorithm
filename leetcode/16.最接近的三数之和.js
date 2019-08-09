/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    nums.sort((a, b) => a - b);

    let res = nums[0] + nums[1] + nums[2];
    if (target < res) return res;

    for (let i = 0; i < len; i++) {
        let start = i + 1;
        let end = len - 1;

        while (start < end) {
            let sum = nums[start] + nums[i] + nums[end];

            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }

            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return res;
            }
        }
    }

    return res;
};
