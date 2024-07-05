/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    // 遍历给定的逆波兰表达式tokens
    for (let token of tokens) {
        // 如果token是数字，直接转化为整数并压入栈中
        if (!isNaN(token)) {
            stack.push(parseInt(token))
        } else {
            // 否则，从栈顶弹出两个操作数进行运算
            let num2 = stack.pop();
            let num1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':// 注意处理向零截断的除法
                    // JavaScript的除法已经自动向零截断，但仍需要注意负数除法的情况
                    stack.push(Math.trunc(num1 / num2));
                    break;
                default:
                    throw new Error('Invalid operator')
            }
        }
    }
    // 最终栈中剩下的唯一元素即为表达式的结果
    return stack.pop()
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN2 = function (tokens) {
    let stack = []
    // 遍历给定的数组
    for (let token of tokens) {
        if (!isNaN(token)) {
            let number = parseInt(token)
            stack.push(number)
        } else {
            let num1 = stack.pop();
            let num2 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(num1 + num2)
                    break
                case '-':
                    stack.push(num1 - num2)
                    break
                case '*':
                    stack.push(num1 * num2)
                    break
                case '/':
                    stack.push(Math.trunc(num1 / num2)) // 向零截断
                    break
                default:
                    throw new Error('Invalid operator')
            }
        }
    }
    // 最终栈中剩下的唯一元素即为表达式的结果
    return stack.pop()
}