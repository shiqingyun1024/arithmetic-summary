/**
 * @param {number[]} arr
 * @return {number}
 */
// 第一种解法
var peakIndexInMountainArray = function (arr) {
    let left = 1
    let right = arr.length - 2
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid
        } else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
            right = mid - 1
        } else if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        }
    }
};

// 第二种解法

var peakIndexInMountainArray2 = function (arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};

