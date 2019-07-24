/**
 * 冒泡排序
 *
 * 描述：
 * 它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
 * 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 * 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 *
 * 步骤：
 * 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * 针对所有的元素重复以上的步骤，除了最后一个；
 * 重复步骤1~3，直到排序完成。
 *
 *
 * 时间复杂度（平均）：O(n^2)
 * 时间复杂度（最坏）：O(n^2)
 * 时间复杂度（最优）：O(n)
 * 空间复杂度：O(1)
 * 稳定性：稳定
 *
 *
 * 参考：https://segmentfault.com/a/1190000014175918
 */

function bubbleSort(arr = []) {
    let len = arr.length;
    if (len == 0) {
        return arr;
    }

    for (let i = 0; i < len - 1; i++) {
        let done = true;

        /**
         * 当第一次，找到最大数，放到最后，那么下一次，遍历的时候，是不是就不能把最后一个数算上了呢？
         * 因为他就是最大的了，不会出现，前一个数比后一个数大，要交换位置的情况，
         * 所以内层 for 循环的次数，改成 j < len - 1 - i ，才合适，看下面的代码。
         */
        for (let j = 0; j < len - 1 - j; j++) {
            // 如果前一个数 大于 后一个数 就交换两数位置
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                done = false;
            }
        }

        // 如果某次循环完后，没有任何两数进行交换，就将标志位 设置为 true，表示排序完成，这样我们就可以减少不必要的排序，提高性能。
        if (done) {
            break;
        }
    }

    return arr;
}
