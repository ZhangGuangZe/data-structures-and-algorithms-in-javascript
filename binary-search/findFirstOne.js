// 查找第一个值等于给定元素的数组

function binarySearch(arr, target) {
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
        let mid = left + (right - left >> 1);

        if (arr[mid] >= target) right = mid - 1;
        else left = mid + 1;
    }

    if (left < arr.length && arr[left] === target) return left;
    else return - 1;
}

binarySearch([1, 3, 5, 7, 9, 10, 11, 11, 11, 15, 19, 20], 11);