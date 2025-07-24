import quickSortHoare from '../quickSortHoare.js';

console.log(quickSortHoare([3, 2, 1, 5, 4])); // => [1, 2, 3, 4, 5]
console.log(quickSortHoare([2, 8, 7, 1, 3, 5, 6, ])); // => [1, 2, 3, 4, 5, 6, 7, 8]
console.log(quickSortHoare([6, 5, 3, 1, 8, 7, 2, 4])); // => [1, 2, 3, 4, 5, 6, 7, 8]
console.log(quickSortHoare([3, 5, 3, 1, 2, 3, 4, 5, 3])); // => [1, 2, 3, 3, 3, 3, 4, 5, 5]
console.log(quickSortHoare([-1,2,-8,-10])); // => [-10, -8, -1, 2]