// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// 示例 1：
// 输入: s = “A man, a plan, a canal: Panama”
// 输出：true
// 解释：“amanaplanacanalpanama” 是回文串。

// 示例 2：
// 输入：s = “race a car”
// 输出：false
// 解释：“raceacar” 不是回文串。

// 示例 3：
// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 “” 。
// 由于空字符串正着反着读都一样，所以是回文串。

// 提示：
// 1 <= s.length <= 2 * 105
// s 仅由可打印的 ASCII 字符组成

// 解题思路：
// 清理字符串：首先，需要将字符串中的所有大写字母转换为小写字母，以忽略大小写的差异。接着，移除所有非字母数字字符，只保留字母和数字。这是因为题目要求只考虑字母和数字字符。
// 反转字符串：然后，将清理后的字符串反转，准备与原始的清理后字符串进行比较。
// 比较字符串：最后，比较清理并转换后的字符串与其反转后的字符串是否相等。如果相等，则表明该字符串是一个回文串；反之，则不是。
// JavaScript实现：



/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // 步骤1：清理字符串
    // 使用正则表达式匹配所有非字母数字字符，并使用toLowerCase()方法统一为小写
    let cleanedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // 步骤2：反转字符串
    // split('')将字符串拆分成字符数组，reverse()反转数组，join('')将数组合并成字符串
    let reversedS = cleanedS.split('').reverse().join('');

    // 步骤3：比较并返回结果
    return cleanedS === reversedS;
}

// 示例
//console.log(isPalindrome("A man, a plan, a canal: Panama")); // 应该返回 true
//console.log(isPalindrome("race a car")); // 应该返回 false

// 这段代码首先使用正则表达式[^ a - zA - Z0 - 9]匹配并移除所有非字母数字字符，然后使用toLowerCase()方法将所有字符转为小写，
// 确保比较时忽略大小写。之后，通过字符串的split - reverse - join操作反转清理后的字符串，
// 最后比较原字符串与反转后的字符串是否相等。这是一种直接且有效的方法来判断一个字符串是否为回文串。


