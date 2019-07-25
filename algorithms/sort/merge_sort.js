/**
 * 归并排序
 *
 * 归并排序是建立在归并操作上的一种有效的排序算法。
 * 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * 将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。
 *
 * 算法描述:
 * 把长度为n的输入序列分成两个长度为n/2的子序列；
 * 对这两个子序列分别采用归并排序；
 * 将两个排序好的子序列合并成一个最终的排序序列。
 *
 * 时间复杂度（平均）：O(nlogn)
 * 时间复杂度（最坏）：O(nlogn)
 * 时间复杂度（最优）：O(nlogn)
 * 空间复杂度：O(n)
 * 稳定性：稳定
 *
 * 参考：https://segmentfault.com/a/1190000008866524
 */

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    return res.concat(left).concat(right);
}

/**
 * 空间复杂度为1的写法
 * @param {*} arr
 */
function mergeSort1(arr) {
    _mergeSort(arr, 0, arr.length - 1);
    return arr;
}

function _mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let mid = l + Math.floor((r - l) / 2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1]) _merge(arr, l, mid, r);
}

function _merge(arr, l, mid, r) {
    let aux = arr.slice(l, r + 1),
        i = l,
        j = mid + 1;
    for (let k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l];
            j++;
        } else if (j > r) {
            arr[k] = aux[i - l];
            i++;
        } else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i++;
        } else {
            arr[k] = aux[j - l];
            j++;
        }
    }
}
