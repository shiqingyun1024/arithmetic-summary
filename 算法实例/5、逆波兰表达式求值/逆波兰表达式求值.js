// 题目：逆波兰表达式求值

// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
// 请你计算该表达式。返回一个表示表达式值的整数。

// 注意：
// 有效的算符为 ‘+’、‘-’、‘*’ 和 ‘/’ 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。

// 示例 1：
// 输入：tokens = [“2”, “1”, “+”, “3”, “*”]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

// 示例 2：
// 输入：tokens = [“4”, “13”, “5”, “/”,“+”]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6

// 示例 3：
//     输入：tokens = [“10”, “6”, “9”, “3”, “+”, “-11”, ““, ”/“,””,“17”,“+”,“5”,“+”]
// 输出：22
// 解释：该算式转化为常见的中缀算术表达式为：
//         ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// 提示：
//         1 <= tokens.length <= 104
// tokens[i] 是一个算符（“+”、“-”、“*” 或 “/”），或是在范围 [-200, 200] 内的一个整数

// 逆波兰表达式：

//         逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

//         平常使用的算式则是一种中缀表达式，如(1 + 2) * (3 + 4) 。
//         该算式的逆波兰表达式写法为((1 2 + )(3 4 + ) * ) 。
//         逆波兰表达式主要有以下两个优点：

//         去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
//         适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。

//         解题思路:
//         1、根据题目分析：上面很重要的一句话的提示是适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。其实刚开始做这道题的时候，想了好一会儿才有点思路。
//         2、初始化一个栈：用于存放操作数和临时结果。
//         3、遍历输入数组：对于每个元素：

//         如果元素是数字，将其压入栈中。
//         如果元素是操作符（+，-，*，/）,从栈顶弹出两个操作数，进行相应的运算，然后将结果压回栈中。
// 4、最后的结果：遍历结束后，栈中只剩下一个元素，即为表达式的计算结果。
//         5、注意点：对于除法操作，需要进行向零截断的整数除法。使用Math.trunc

// JavaScript实现:


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