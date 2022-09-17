/**
 * 支持动态扩容的数组
 *
 * @class DynamicArray
 */
class DynamicArray {
    constructor(n) {
        this.arr = new Array(n).fill(0);
        this.size = n;
        this.count = 0;
    }
    insert(v) {
        if (this.count >= this.size) {
            const temp = this.arr;
            this.size *= 2;
            this.arr = new Array(this.size).fill(0);
            for (let i = 0; i < temp.length; i++) {
                this.arr[i] = temp[i];
            }
        }

        this.arr[this.count++] = v;
    }
}

/* const arr = new DynamicArray(10);
for (let i = 1; i <= 12; i++) {
    arr.insert(i);
} */


/**
 * 大小固定的有序数组，支持动态增删改操作
 *
 * @class FixedOrderedArray
 */
class FixedOrderedArray {
    constructor(capacity) {
        this.arr = new Array(capacity).fill(0);
        this.count = 0;
        this.size = capacity;
    }
    insert(element) {
        if (this.count >= this.size) return -1; // 处理越界
        
        // 保证有序性
        let j = this.count;
        for (let i = 0; i < j; i++) {
            if (this.arr[i] > element) {
                let temp = element;
                while (i < j) {
                    this.arr[j] = this.arr[j - 1];
                    j--;
                }
                this.arr[j] = temp;
                this.count++;
            }
        }

        if (this.count <= j)
            this.arr[this.count++] = element;
    }
    remove(element) {
        for (let i = 1; i <= this.count; i++) {
            if (this.arr[i - 1] === element) {
                while (i < this.count) {
                    this.arr[i - 1] = this.arr[i];
                    i++;
                }
                this.arr[i - 1] = 0;
                this.count--;
            }
        }
    }
    modify(index, element) {
        if (index < 0 || index >= this.count) return -1; // 处理越界
        this.arr[index] = element;

        // 保证有序性
        for (let i = index + 1; i < this.count; i++) {
            if (this.arr[i - 1] > this.arr[i]) {
                [this.arr[i - 1], this.arr[i]] = [this.arr[i], this.arr[i - 1]];
            }
        }
    }
}

const orderedArray = new FixedOrderedArray(5);
orderedArray.insert(2);    // => [2, 0, 0, 0, 0]
orderedArray.insert(4);    // => [2, 4, 0, 0, 0]
orderedArray.insert(1);    // => [1, 2, 4, 0, 0]
orderedArray.insert(5);    // => [1, 2, 4, 5, 0]
orderedArray.insert(3);    // => [1, 2, 3, 4, 5]
orderedArray.insert(6);    // => [1, 2, 3, 4, 5]
orderedArray.remove(3);    // => [1, 2, 4, 5, 0]
orderedArray.remove(1);    // => [2, 4, 5, 0, 0]
orderedArray.remove(5);    // => [2, 4, 0, 0, 0]
orderedArray.modify(0, 6); // => [4, 6, 0, 0, 0]


/**
 * 实现两个有序数组合并为一个有序数组
 *
 * @class MergeArray
 */
class MergeArray {
    constructor() {
        this.arr = [];
        this.count = 0;
    }
    merge(arr1, arr2) {
        const m = arr1.length, n = arr2.length;

        let i = 0, j = 0;
        while (i < m || j < n) {
            if (arr1[i] === undefined) {
                this.arr[this.count++] = arr2[j];
                j++;
            } else if (arr2[j] === undefined) {
                this.arr[this.count++] = arr1[i];
                i++;
            } else if (arr1[i] <= arr2[j]) {
                this.arr[this.count++] = arr1[i];
                i++;
            } else {
                this.arr[this.count++] = arr2[j];
                j++;
            }
        }

        return this.arr;
    }
}

// const arr = new MergeArray();
// const arr1 = [3,4,5,6], arr2 = [1,2,3];
// arr.merge(arr1, arr2);

function merge(arr1, arr2) {
    const m = arr1.length, n = arr2.length;
    const arr = [];
    let count = 0;

    let i = 0, j = 0;
    while (i < m || j < n) {
        if (arr1[i] === undefined) {
            arr[count++] = arr2[j];
            j++;
        } else if (arr2[j] === undefined) {
            arr[count++] = arr1[i];
            i++;
        } else if (arr1[i] <= arr2[j]) {
            arr[count++] = arr1[i];
            i++;
        } else {
            arr[count++] = arr2[j];
            j++;
        }
    }

    return arr;
}

const arr1 = [1,3,5], arr2 = [0,2,4,6];
merge(arr1, arr2);