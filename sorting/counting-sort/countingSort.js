/**
 * 计数排序稳定实现
 * @param {*} arr 未排序数组
 * @returns 已排序数组
 */
export default function countingSort(arr) {
  // 获取数组中的最小值和最大值
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count = new Array(max - min + 1).fill(0);

  // 计算每个元素的出现次数
  for (const num of arr) {
    count[num - min]++;
  }

  // 通过前缀和累加计数，计算每个元素在排序后数组中的位置
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const res = [];

  // 从后向前遍历原始数组，保证排序的稳定性
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    res[count[num - min] - 1] = num;
    count[num - min]--;
  }

  return res;
}