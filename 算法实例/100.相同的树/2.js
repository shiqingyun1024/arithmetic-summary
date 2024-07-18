function deleteString(string) {
    // 删除字符串中出现次数最多的字符，并返回剩下的字符
    // 先计算出字符串中哪个字符最多，然后再进行逐个删除，然后再进行拼接
    // aabbc -> c   abc -> ''  
    // 1、如果是空字符串，直接返回为空字符串
    if (string.length < 1) return ''
    // 先遍历字符串，记录每个字符串的数量
    let map = new Map();
}

function deleteMostFrequentChars(str) {
    if (str.length === 0) {
        return "";
    }

    // Step 1: 统计每个字符出现的次数
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Step 2: 找到出现次数最多的字符
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
        }
    }

    // Step 3: 删除所有出现次数最多的字符
    const result = [];
    for (let char of str) {
        if (charCount[char] !== maxCount) {
            result.push(char);
        }
    }

    // Step 4: 返回剩余的字符数组连接成字符串
    return result.join("");
}
// 示例用法
const inputStr = "abbcccddddeeeee";
const result = deleteMostFrequentChars(inputStr);
console.log(result); // 输出 "aa"
