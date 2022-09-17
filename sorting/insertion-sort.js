export function insertionSort(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}