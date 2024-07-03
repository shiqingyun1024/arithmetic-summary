// ** 题目：最长连续序列 **

//     给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1：
// 输入：nums = [100, 4, 200, 1, 3, 2]
// 输出：4
// 解释：最长数字连续序列是[1, 2, 3, 4]。它的长度为 4。

// 示例 2：
// 输入：nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// 输出：9

// 提示：
// 0 <= nums.length <= 105
//     - 109 <= nums[i] <= 109

// 我们做算法题的时候，一定先审好题：题目要求找出 ** 数字连续的最长序列 **（不要求序列元素在原数组中的连续）的长度。
// 其中的关键点是 ** 不要求在原数组的连续 **，所以我们可以进行先进行 ** 去重和排序 **。

// ### 解题思路：
// 这道题的关键点在于如何识别并统计出最长的连续数字序列。我们可以采用以下步骤来解决问题：
// 1. ** 去重与排序 **：首先，我们需要去除数组中的重复元素并对其进行排序。这是因为连续序列的元素在排序后会相邻，且去重可以避免重复计算同一个数字。（先用new Set去重，再用sort进行排序）
// 2. ** 遍历排序后的数组 **：然后，遍历排序后的数组，逐个检查每个数字是否可以延伸出一个更长的连续序列，这里的关键思路是，从数组中的第二个值开始遍历，对于当前的数字，如果前一个数字与当前数字相差为1，说明是连续的。就把它加入到当前的连续序列中；否则，它就作为新序列的起始点。
// 3. ** 记录最长序列长度 **：在遍历过程中，不断更新最长序列的长度。并在遍历结束后返回这个长度。


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 先判断是否为一个空数组，如果是，就返回0
    if (nums.length === 0) return 0;
    // 先去重，再排序，然后得到一个每个数字具有唯一性的数组
    let uniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b)
    // 接着声明最长数字连续序列长度为1，然后需要声明一个存储当前长度的变量，初始化值为1
    let maxLength = currentLength = 1;
    // 数组经过去重排序之后，接着进行遍历数组，如果数组当前值与前一个值相差为1，说明是连续的，当前长度加currentLength加1。
    // 如果不相等，则重新比较maxLength与currentLength值，最大的赋值给maxLength，currentLength则重新开始从1算起。
    for (let i = 1; i < uniqueNums.length; i++) {
        if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
            currentLength++; // 如果数组当前值与前一个值相差为1，说明是连续的，当前长度加currentLength加1
        } else {
            // 如果不相等，则重新比较maxLength与currentLength值，最大的赋值给maxLength，currentLength则重新开始从1算起。
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }
    // 最后再比较一下最大长度值和当前长度值，得出最后的最大长度。为什么最后再比较一下呢，
    // 因为在上面的循环中，只有在else中maxLength才会进行更新，如果是一直在if中，maxLength就不会进行更新，所以最后需要重新比较一下。
    maxLength = Math.max(maxLength, currentLength);
    return maxLength;
}