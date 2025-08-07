/**
 * 自下而上归并排序
 * @param {*} arr 未排序数组
 * @returns 已排序数组
 */
export default function bottomUpMergeSort(arr) {
  const n = arr.length;
  const temp = [];

  for (let i = 1; i < n; i *= 2) {
    for (let j = 0; j < n; j += i * 2) {
      merge(arr, j, j + i - 1, Math.min(j + 2 * i - 1, n - 1), temp);
    }
  }

  return arr;
}

function merge(arr, lo, mid, hi, temp) {
  let i = lo;
  let j = mid + 1;
  
  for (let k = lo; k <= hi; k++) {
    temp[k] = arr[k];
  }

  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = temp[j++];
    } else if (j > hi) {
      arr[k] = temp[i++];
    } else if (temp[i] > temp[j]) {
      arr[k] = temp[j++];
    } else {
      arr[k] = temp[i++];
    }
  }
}
