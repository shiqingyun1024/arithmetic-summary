/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    // 1、去重并排序
    let newNums = Array.from(new Set(nums)).sort((a, b) => a - b);
    // 数组经过排序之后，如果当前值和后面的一个值，差值为1，说明是连续的，所以可以这样判断
    // 先声明最大长度，初始化值为1（数组中至少有一个值，所以连续值最少是为1的）,然后需要声明一个存储当前长度的变量，初始化值为1
    let maxLength = currentLength = 1;
    for (let i = 1; i < newNums.length; i++) {
        if (newNums[i] === newNums[i - 1] + 1) {
            currentLength++
        } else {
            maxLength = Math.max(maxLength, currentLength)
            currentLength = 1;
        }
    }
    // 最后再比较一下最大长度值和当前长度值，得出最后的最大长度。为什么最后再比较一下呢，
    // 因为在上面的循环中，只有在else中maxLength才会进行更新，如果是一直在if中，maxLength就不会进行更新，所以最后需要重新比较一下。
    maxLength = Math.max(maxLength, currentLength);
    return maxLength
};

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