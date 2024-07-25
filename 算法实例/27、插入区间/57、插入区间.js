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