function quickSort(array) {
  const sort = (lo, hi) => {
    if (lo >= hi) return;
    const mid = partition(array, lo, hi);
    sort(lo, mid);
    sort(mid + 1, hi);
  };
  sort(0, array.length - 1);
  return array;
}

function partition(array, lo, hi) {
  const mid = Math.floor((lo + hi) / 2);
  const povit = array[mid];
  let i = lo, j = hi;
  while (true) {
    while (array[i] < povit) i++;
    while (array[j] > povit) j--;
    if (i >= j) return j;
    [array[i], array[j]] = [array[j], array[i]];
    i++, j--;
  }
}

quickSort([6, 5, 3, 1, 8, 7, 2, 4]);