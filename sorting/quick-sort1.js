function quickSort(array) {
  const sort = (lo, hi) => {
    if (lo >= hi) return;
    const mid = partition(array, lo, hi);
    sort(lo, mid - 1);
    sort(mid + 1, hi);
  };
  sort(0, array.length - 1);
  return array;
}

function partition(array, lo, hi) {
  const povit = array[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (array[j] <= povit) {
      [array[i], array[j]] = [array[j], array[i]];
      i += 1;
    }
  }
  [array[i], array[hi]] = [array[hi], array[i]];
  return i;
}

quickSort([2, 8, 7, 1, 3, 5, 6, 4]);