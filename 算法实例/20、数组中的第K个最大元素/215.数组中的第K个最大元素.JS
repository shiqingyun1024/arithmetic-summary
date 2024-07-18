function findKthLargest(nums, k) {
    function partition(left, right, pivotIndex) {
        // 获取基准元素
        const pivotValue = nums[pivotIndex];
        // 将基准元素交换到数组末尾
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivotValue) {
                [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
                storeIndex++;
            }
        }
        // 将基准元素放到正确的位置
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
        return storeIndex;
    }

    function quickSelect(left, right, kSmallest) {
        if (left === right) return nums[left];

        let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        pivotIndex = partition(left, right, pivotIndex);

        if (kSmallest === pivotIndex) {
            return nums[kSmallest];
        } else if (kSmallest < pivotIndex) {
            return quickSelect(left, pivotIndex - 1, kSmallest);
        } else {
            return quickSelect(pivotIndex + 1, right, kSmallest);
        }
    }

    // 调整k为基于0的索引
    return quickSelect(0, nums.length - 1, nums.length - k);
}

// 示例
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 输出: 5，因为排序后数组为[1,2,3,4,5,6]，第2大的元素是5
