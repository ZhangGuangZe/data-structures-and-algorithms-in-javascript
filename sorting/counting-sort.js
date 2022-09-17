export function countingSort(array) {
  const n = array.length;
  const findMaxValue = array => {
    let max = array[0];
    for (let i = 1; i < n; i++) {
      if (max < array[i]) max = array[i];
    }
    return max;
  };

  if (n <= 1) return array;

  const k = findMaxValue(array);
  const count = new Array(k + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[array[i]] += 1;
  }

  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
  }

  const temp = [...array];
  for (let i = n - 1; i >= 0; i--) {
    array[count[temp[i]] - 1] = temp[i];
    count[temp[i]] -= 1;
  }
  return array;
}