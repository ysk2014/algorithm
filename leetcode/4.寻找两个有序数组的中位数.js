/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr;
    if (!nums1 || !nums1.length) {
        arr = nums2;
    } else if (!nums2 || !nums2.length) {
        arr = nums1;
    } else {
        arr = nums1.concat(nums2).sort((a, b) => b - a);
    }

    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
        return arr[(arr.length - 1) / 2];
    }
};
