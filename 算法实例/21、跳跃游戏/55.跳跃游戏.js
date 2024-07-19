/** 贪心算法
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // 定义两个变量 最远的距离
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果当前值大于最远距离 直接返回false
        if (i > maxReach) return false
        // 更新最远距离值
        maxReach = Math.max(maxReach, i + nums[i])
        if (maxReach >= nums.length - 1) return true
    }
    return false
};