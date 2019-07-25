/**
 * 插入排序
 *
 * 工作原理:
 * 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 *
 * 具体算法描述如下：
 *
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 将新元素插入到该位置后；
 * 重复步骤2~5。
 *
 * 时间复杂度（平均）：O(n^2)
 * 时间复杂度（最坏）：O(n^2)
 * 时间复杂度（最优）：O(n)
 * 空间复杂度：O(1)
 * 稳定性：稳定
 *
 * 参考：https://algorithm-visualizer.org/brute-force/insertion-sort
 */

function insertionSort(arr) {
    let len = arr.length;
    if (len === 0) {
        return arr;
    }

    for (let i = 1; i < len; i++) {
        let preIndex = i - 1;
        let current = arr[i];

        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = current;
    }

    return arr;
}

module.exports = insertionSort;
