export function merge(array, lo, mid, hi) {
  const n1 = mid - lo + 1, n2 = hi - mid;
  const arr1 = [], arr2 = [];
  for (let i = 0; i < n1; i++) {
    arr1[i] = array[lo + i];
  }
  for (let j = 0; j < n2; j++) {
    arr2[j] = array[mid + j + 1];
  }
  arr1[n1] = Infinity;
  arr2[n2] = Infinity;
  let i = 0, j = 0;
  for (let k = lo; k <= hi; k++) {
    if (arr1[i] <= arr2[j]) {
      array[k] = arr1[i];
      i += 1;
    } else {
      array[k] = arr2[j];
      j += 1;
    }
  }
}

export function mergeSort(array) {
  const sort = (lo, hi) => {
    if (lo >= hi) return;
    const mid = lo + Math.floor((hi - lo) / 2);
    sort(lo, mid);
    sort(mid + 1, hi);
    merge(array, lo, mid, hi);
  };
  sort(0, array.length - 1);
  return array;
}

// mergeSort([6, 5, 3, 1, 8, 7, 2, 4]);