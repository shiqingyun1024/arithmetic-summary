// 难度：中等

// 题目：
// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表 intervals，其中 intervals[i] = [starti, endi] 表示第 i 个区间的开始和结束，并且 intervals 按照 starti 升序排列。同样给定一个区间 newInterval = [start, end] 表示另一个区间的开始和结束。

// 在 intervals 中插入区间 newInterval，使得 intervals 依然按照 starti 升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。

// 返回插入之后的 intervals。

// 注意 你不需要原地修改 intervals。你可以创建一个新数组然后返回它。

// 示例 1：

// 输入：intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
// 输出：[[1, 5], [6, 9]]

// 示例 2：

// 输入：intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
// 输出：[[1, 2], [3, 10], [12, 16]]
// 解释：这是因为新的区间[4, 8] 与[3, 5], [6, 7], [8, 10] 重叠。

// 提示：

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals 根据 starti 按 升序 排列
// newInterval.length == 2
// 0 <= start <= end <= 105

// 解题思路：
// 这道题目的解题思路主要是遍历给定的区间列表，并根据新插入的区间newInterval与当前遍历到的区间的关系，决定如何合并或插入新区间。具体步骤如下：

// 初始化：创建一个新的结果数组result，用于存放合并后的区间。
// 处理新区间前的区间：遍历区间列表，直到遇到第一个结束点大于等于newInterval的开始点的区间。在此之前的所有区间可以直接加入结果数组，因为它们与newInterval不重叠。
// 合并重叠区间：当遇到与newInterval重叠的区间时，更新newInterval的起始和结束点，以覆盖所有重叠的区间。继续遍历，直到不重叠为止。
// 将合并后的区间加入结果：将经过更新后的newInterval加入结果数组。
// 处理新区间后的区间：将剩余的区间（即结束点小于newInterval结束点的所有区间已处理完毕）直接加入结果数组。
// 返回结果：返回合并后的区间列表result。
// JavaScript 实现：

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];// 最后的结果区间
    let i = 0;
    //  当小于这个区间时直接加入 
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i])
        i++
    }
    // 合并区间  
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    result.push(newInterval)
    // 当大于这个区间直接加入
    while (i < intervals.length) {
        result.push(intervals[i])
        i++
    }
    return result
};


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert2(intervals, newInterval) {
    const result = [];
    let i = 0; // 用于遍历intervals的指针

    // 步骤2：处理新区间前的区间
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // 步骤3：合并重叠区间
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval); // 步骤4：将合并后的区间加入结果

    // 步骤5：处理新区间后的区间
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// 示例
// const intervals = [[1,3],[6,9]];
// const newInterval = [2,5];
// console.log(insert(intervals, newInterval)); // 输出: [[1,5],[6,9]]