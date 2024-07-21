/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
    let n = nums.length;
    if (n === 1) return 0; // 如果数组只有一个元素，不需要跳跃
    // jumps表示跳跃次数，maxReach表示当前能到达的最远位置，lastJumpPos表示记录上一次跳跃后能到达的最远位置
    let jumps = 0, maxReach = 0, lastJumpPos = 0;

    for (let i = 0; i < n - 1; i++) {
        // 找到当前能跳到的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);

        // 当前位置已经是上次跳跃能达到的最远位置，需要再进行一次跳跃
        if (i === lastJumpPos) {
            jumps++;
            lastJumpPos = maxReach; // 更新下次跳跃需要开始的位置
        }
    }

    return jumps;
}

// 输入: nums = [2, 3, 1, 1, 4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
// 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。


// jumps  maxReach  lastJumpPos
// 0        0          0

// 1        2          2
// 1        4          2
// 2        4          4
// 2        4          4
