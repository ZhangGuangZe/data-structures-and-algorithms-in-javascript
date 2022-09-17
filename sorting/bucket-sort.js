import { insertionSort } from './insertion-sort.js';

export function bucketSort(array, size = 2) {
  const n = array.length;
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < n; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const count = Math.floor((maxValue - minValue) / size) + 1;
  const buckets = [];
  for (let i = 0; i < count; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    const j = Math.floor((array[i] - minValue) / size);
    buckets[j].push(array[i]);
  }
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (!buckets[i]) continue;
    insertionSort(buckets[i]);
    sortedArray.push(...buckets[i]);
  }
  return sortedArray;
}