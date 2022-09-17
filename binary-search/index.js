
const binarySearch = (nums, target) => {
    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        let mid = lo + (hi - lo >> 1);
        if (nums[mid] > target) hi = mid - 1;
        else lo = mid + 1;
    }

    return lo > 0 && nums[hi] === target ? hi : -1;
};
binarySearch([1, 1, 1, 1, 1, 1], 1); // => 5
binarySearch([0, 1, 2, 2, 2, 3], 2); // => 4
binarySearch([0, 1, 2, 3, 3, 3], 3); // => 5
binarySearch([0, 1, 2, 3, 3, 3], 4); // => -1