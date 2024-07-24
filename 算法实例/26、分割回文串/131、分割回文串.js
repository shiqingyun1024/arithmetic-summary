/**
 * @param {string} s
 * @return {string[][]}
 */
// 判断是不是回文串
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// s是原始字符串   start: 当前处理的子串起始位置。path: 用于存储当前递归路径上的回文子串。result: 最终结果数组，用于收集所有满足条件的分割方案。
function partition(s, start = 0, path = [], result = null) {
    if (result === null) {
        result = [];
    }

    if (start === s.length) {
        result.push([...path]);
        return result;
    }

    for (let i = start; i < s.length; i++) {
        if (isPalindrome(s.slice(start, i + 1))) {
            path.push(s.slice(start, i + 1));
            partition(s, i + 1, path, result);
            path.pop(); // 回溯
        }
    }
    return result;
}

function partitionPalindromes(s) {
    return partition(s);
}

// 测试用例
// const testString = "aab";
// const result = partitionPalindromes(testString);
// console.log(result);
