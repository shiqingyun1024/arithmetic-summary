// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]


// 解题分析：
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。
// 但是，你不能重复利用这个数组中同样的元素。 给定 nums = [2, 7, 11, 15], target = 9。因为 nums[0] + nums[1] = 2 + 7 = 9。所以返回[0, 1] 思路
// 最简单的方法是通过两层for循环进行遍历, 使用暴力的查找两个子元素。但是这种方法的时间复杂度为O(n ^ 2) 。在大数据量的测试用例的情况下执行时间超时。那么我们有什么办法可以将时间复杂度降下来吗 ?
// 这时我们可以用到HashMap。通过HashMap我们可以将时间复杂度降为O(2n) 。如果是有序数组的情况下, 时间复杂度可以是O(n), 详见下方代码：

// 1、使用map
// 这个思路比较简单，而且复杂度低，但是需要对map有对应的应用和理解；
// 通过这个方法，我学习到的一点是：数组中的某一项和这一项的下标用map对应起来。通过map的key、value把数组中的值和它对应的下标很巧妙的结合起来，是一个很好的思路。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let [res, len, map] = [[], nums.length, new Map()];
    for (let i = 0; i < len; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) { // 如果map中存在这个数，则获取对应的这个数的数组下标；
            res.push(i, map.get(diff))
            return res;
        } else {
            // 对应的数组中的某个数和数字下标用map对应起来。通过map的key、value把数组中的值和它对应的下标对应起来。
            map.set(nums[i], i)
        }
    }
    return res;
};

// 2、使用两个for循环
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    let len = nums.length;
    // 使用两个for循环是我们大多数时候能想起来的思路，但是性能不如map好
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};


