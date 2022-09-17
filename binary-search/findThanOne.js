// 查找第一个大于等于给定值的元素
function binarySearch(arr, target) {
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
        let mid = left + (right - left >> 1);

        if (arr[mid] >= target) {
            if (mid === 0 || arr[mid - 1] < target) return mid;
            right = mid - 1;
        }
        else left = mid + 1;
    }
    return - 1;
}

// binarySearch([3, 4, 6, 7, 8], 5);
binarySearch([1, 3, 5, 7, 9], 10); // => 3