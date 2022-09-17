// 查找最后一个小于等于给定值的元素

function binarySearch(arr, target) {
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
        let mid = left + (right - left >> 1);

        if (arr[mid] > target) {
            right = mid - 1
        } else {
            if (mid === arr.length - 1 || (arr[mid + 1] > target)) return mid;
            left = mid + 1;
        }
    }
    return - 1;
}

binarySearch([3, 4, 6, 7, 8], 7);