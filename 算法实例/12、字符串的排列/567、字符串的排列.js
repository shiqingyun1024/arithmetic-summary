/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false; // s1长度大于s2，不可能为子串
    // 计算s1中各字符的计数
    const countMap = new Map();
    for (const char of s1) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }
    console.log(countMap)
    // 定义滑动窗口的大小
    const windowSize = s1.length;
    // 循环遍历的时候一定要记住减去
    for (let i = 0; i <= s2.length - windowSize; i++) {
        // 重置滑动窗口的计数映射，为什么要重置滑动窗口？是因为在下面的for j循环中对tempMap进行改动，所以在每次for i循环中都需要对tempMap进行重置
        const tempMap = new Map(countMap);
        console.log(tempMap)

        // 检查当前窗口内的字符
        for (let j = 0; j < windowSize; j++) {
            const char = s2[i + j];
            if (tempMap.has(char)) {
                tempMap.set(char, tempMap.get(char) - 1);
                // 如果计数为0，可以从映射中移除
                if (tempMap.get(char) === 0) tempMap.delete(char);
            } else { // 如果不是的话，一定要跳出循环，要不然执行会超时
                break; // 当前字符不在s1的映射中，直接跳出循环
            }
        }
        // 如果映射为空，说明当前窗口内的字符与s1的排列一致
        if (tempMap.size === 0) return true;
    }
    return false; // 遍历结束，未找到匹配的子串
};
console.log(checkInclusion("ab", "eidbaooo")); // 输出: true