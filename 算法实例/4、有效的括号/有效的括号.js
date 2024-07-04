/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 定义一个映射，方便查找左右括号的对应关系
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    // 初始化一个栈
    let stack = [];

    // 遍历字符串
    for (let char of s) {
        // 如果是左括号，压入栈中
        if (Object.values(bracketMap).includes(char)) {
            stack.push(char);
        } else if (char in bracketMap) { // 如果是右括号
            // 栈为空或者栈顶的左括号与当前的右括号不匹配，则字符串无效
            if (!stack.length || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {// 如果遇到了非括号字符，也可以根据题目的具体要求决定如何处理，这里假设输入只包含括号
            throw new Error("Invalid character encountered.");
        }
    }
    // 遍历结束，如果栈为空，说明所有括号都已正确闭合
    return stack.length === 0;
};
