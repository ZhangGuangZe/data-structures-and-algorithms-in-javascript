/**
 * 计数排序基础实现
 * @param {*} arr 未排序数组
 * @returns 已排序数组
 */
export default function countingSortBase(arr) {
  // 获取数组中的最小值和最大值
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count = new Array(max - min + 1).fill(0);

  // 计算每个元素的出现次数
  for (const num of arr) {
    count[num - min]++;
  }

  // 重构排序后的数组
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index++] = i + min;
      count[i]--;
    }
  }

  return arr;
}