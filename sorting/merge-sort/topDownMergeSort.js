/**
 * 自上而下归并排序
 * @param {*} arr 未排序数组
 * @returns 已排序数组
 */
export default function topDownMergeSort(arr) {
  const sort = (arr, lo, hi, temp = []) => {
    if (lo >= hi) return;

    const mid = lo + Math.floor((hi - lo) / 2);
    sort(arr, lo, mid, temp); // 递归排序左子数组
    sort(arr, mid + 1, hi, temp); // 递归排序右子数组
    merge(arr, lo, mid, hi, temp);  // 合并左右两个子数组
  };
  sort(arr, 0, arr.length - 1);

  return arr;
}

function merge(arr, lo, mid, hi, temp) {
  let i = lo;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= hi) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= hi) temp[k++] = arr[j++];

  for (let i = lo; i <= hi; i++) {
    arr[i] = temp[i - lo];
  }
}
