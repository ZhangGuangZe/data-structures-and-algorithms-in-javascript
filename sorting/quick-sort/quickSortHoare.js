export default function quickSortHoare(arr) {
  const sort = (lo, hi) => {
    if (lo >= hi) return;

    const pivotIndex = partition(arr, lo, hi); // 切分
    sort(lo, pivotIndex); // 将左半部分排序
    sort(pivotIndex + 1, hi); // 将右半部分排序
  };
  sort(0, arr.length - 1);

  return arr;
}

function partition(arr, lo, hi) {
  const mid = Math.floor((lo + hi) / 2);
  const pivot = arr[mid];
  let i = lo;
  let j = hi;

  while (true) {
    while (arr[i] < pivot) i++; // 从左往右查找第一个大于等于pivot的元素
    while (arr[j] > pivot) j--; // 从右往左查找第一个小于等于pivot的元素

    if (i >= j) return j;
    
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}