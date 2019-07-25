/**
 * 计数排序
 *
 * 其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
 * 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 *
 *
 * 算法描述
 *
 * 找出待排序的数组中最大和最小的元素；
 * 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
 * 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
 * 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
 *
 *
 * 时间复杂度（平均）：O(n+k)
 * 时间复杂度（最坏）：O(n+k)
 * 时间复杂度（最优）：O(n+k)
 * 空间复杂度：O(n+k)
 * 稳定性：稳定
 *
 *
 * 参考：https://www.cnblogs.com/onepixel/p/7674659.html#!comments
 */

function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue + 1),
        sortedIndex = 0;
    (arrLen = arr.length), (bucketLen = maxValue + 1);

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}
