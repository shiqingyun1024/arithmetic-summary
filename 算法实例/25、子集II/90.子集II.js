/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b); // 先排序
    const result = [];
    const backtrack = (start, path, lastSelected = -1) => {
        // 将当前子集添加到结果集中
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            // 跳过重复元素 为什么会这样跳过呢？
            if (i > start && nums[i] === nums[i - 1] && lastSelected !== i - 1) continue;
            // 选择当前元素
            path.push(nums[i]);
            backtrack(i + 1, path, i); // 注意传递当前元素的下标
            // 回溯，撤销选择 最后一步为什么这样写呢？
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
};
// 示例
const nums = [1, 2, 2];
console.log(subsetsWithDup(nums)); // 输出所有不重复的子集