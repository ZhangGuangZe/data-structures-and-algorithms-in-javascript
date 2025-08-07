/**
 * Lomuto 快速排序算法
 * @param {*} arr 未排序数组
 * @returns 已排序数组
 */
export default function quickSortLomutoPartition(arr) {
  const sort = (arr, lo, hi) => {
    if (lo >= hi) return;

    const pivotIndex = partition(arr, lo, hi);
    sort(arr, lo, pivotIndex - 1); // 排序左子数组
    sort(arr, pivotIndex + 1, hi); // 排序右子数组
  };
  sort(arr, 0, arr.length - 1);

  return arr;
}

function partition(arr, lo, hi) {
  const pivot = arr[hi]; // 选择最后一个元素作为主元
  let i = lo;

  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // 将主元放到正确的位置
  [arr[i], arr[hi]] = [arr[hi], arr[i]];

  return i;
}