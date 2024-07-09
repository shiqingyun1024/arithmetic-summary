/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLength = 0;
    let charMap = new Map(); // 用于记录字符及其在字符串中的位置

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        // 如果当前字符已经在窗口中存在，则需要更新左边界
        if (charMap.has(currentChar)) {
            left = Math.max(charMap.get(currentChar) + 1, left);
        }

        // 更新字符的最新位置
        charMap.set(currentChar, right);

        // 计算当前窗口的长度
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};