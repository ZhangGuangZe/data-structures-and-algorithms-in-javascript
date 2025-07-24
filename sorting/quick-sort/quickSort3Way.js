export default function quickSort3Way(arr) {
  const sort = (lo, hi) => {
    if (lo >= hi) return;

    const pivot = arr[lo]; // 选择第一个元素为主元
    let lt = lo; // arr[lo..lt-1] < pivot
    let gt = hi; // arr[gt+1..hi] > pivot
    let i = lo + 1; // arr[lt..i-1] == pivot

    while (i <= gt) {
      if (arr[i] < pivot) {
        [arr[i], arr[lt]] = [arr[lt], arr[i]];
        lt++;
        i++;
      } else if (arr[i] > pivot) {
        [arr[i], arr[gt]] = [arr[gt], arr[i]];
        gt--;
      } else { // arr[i] == pivot
        i++;
      }
    }

    sort(lo, lt - 1);
    sort(gt + 1, hi);
  }

  sort(0, arr.length - 1);
  return arr;
}