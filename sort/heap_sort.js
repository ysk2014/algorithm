/**
 * 堆排序
 *
 * 堆的预备知识:
 * 堆是一个完全二叉树
 * 完全二叉树： 二叉树除开最后一层，其他层结点数都达到最大，最后一层的所有结点都集中在左边（左边结点排列满的情况下，右边才能缺失结点）。
 * 大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
 * 小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。
 * 堆的存储： 堆由数组来实现，相当于对二叉树做层序遍历。
 * 对于结点 i ，其子结点为 2i+1 与 2i+2 。
 *
 *
 * 算法描述
 * 将初始二叉树转化为大顶堆（heapify）（实质是从第一个非叶子结点开始，从下至上，从右至左，对每一个非叶子结点做shiftDown操作），此时根结点为最大值，将其与最后一个结点交换。
 * 除开最后一个结点，将其余节点组成的新堆转化为大顶堆（实质上是对根节点做shiftDown操作），此时根结点为次最大值，将其与最后一个结点交换。
 * 重复步骤2，直到堆中元素个数为1（或其对应数组的长度为1），排序完成。
 *
 *
 * 时间复杂度（平均）：O(nlogn)
 * 时间复杂度（最坏）：O(nlogn)
 * 时间复杂度（最优）：O(nlogn)
 * 空间复杂度：O(1)
 * 稳定性：不稳定
 *
 *
 * 参考：https://segmentfault.com/a/1190000015487916
 */

function heapSort(arr) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    let len = arr.length;

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0, len);
    }

    return arr;
}

// 堆调整
function heapify(arr, i, len) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (i != largest) {
        swap(arr, i, largest);
        heapify(arr, largest, len);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(Arr);
console.log(Arr);
