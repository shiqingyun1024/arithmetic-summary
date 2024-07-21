/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
    let leftMin = 0, leftMax = 0;

    // 前向遍历，同时跟踪最小和最大可能的左括号数量
    for (let char of s) {
        if (char === '(') {
            leftMin++; // 左括号最小计数增加
            leftMax++; // 左括号最大计数增加
        } else if (char === ')') {
            if (leftMin > 0) leftMin--; // 优先减少最小左括号计数，模拟最优情况
            leftMax--; // 减少最大左括号计数
            if (leftMax < 0) return false; // 如果最大左括号计数小于0，说明右括号过多
        } else { // char === '*'
            if (leftMin > 0) leftMin--; // 可选减少最小左括号计数
            leftMax++; // 星号也可以作为右括号，所以最大左括号计数可以增加
        }
    }

    // 最终检查：最小左括号计数必须为0，确保所有左括号至少能被匹配
    return leftMin === 0;
}

// 测试例子
console.log(checkValidString("(*))")); // 应该输出true
