export function merge(array, lo, mid, hi, temp) {
  for (let k = lo; k <= hi; k++) {
    temp[k] = array[k];
  }
  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) array[k] = temp[j++];
    else if (j > hi) array[k] = temp[i++];
    else if (temp[i] > temp[j]) array[k] = temp[j++];
    else array[k] = temp[i++];
  }
}

export function topDownMergeSort(array) {
  const n = array.length;
  const temp = new Array(n).fill(0);
  const sort = (lo, hi) => {
    if (lo >= hi) return;
    const mid = lo + Math.floor((hi - lo) / 2);
    sort(lo, mid);
    sort(mid + 1, hi);
    merge(array, lo, mid, hi, temp);
  };
  sort(0, n - 1);
  return array;
}

export function bottomUpMergeSort(array) {
  const n = array.length;
  const temp = new Array(n).fill(0);
  for (let i = 1; i < n; i *= 2) {
    for (let j = 0; j < n; j += i * 2) {
      merge(array, j, j + i - 1, Math.min(j + 2 * i - 1, n - 1), temp);
    }
  }
  return array;
}

// bottomUpMergeSort([6, 5, 3, 1, 8, 7, 2, 4]);