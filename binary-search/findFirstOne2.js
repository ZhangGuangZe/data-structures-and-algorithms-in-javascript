// 查找第一个值等于给定元素的数组

function binarySearch(arr, target) {
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
        let mid = left + (right - left >> 1);

        if (arr[mid] > target) {
            right = mid - 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            if (mid === 0 || arr[mid - 1] !== target) return mid;
            else right = mid -1;
        }
    }

    return - 1;
}

binarySearch([1, 3, 5, 7, 9, 10, 11, 11, 11, 15, 19, 20], 11);