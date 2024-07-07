/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [-1]; // 哨兵，简化边界处理
    heights.push(0);  // 保证最后所有元素出栈
    let len = heights.length;
    for (let i = 0; i < len; i++) {
        // 当遇到比栈顶元素对应柱子矮的柱子时，计算栈顶元素的矩形面积
        console.log(heights[i]);
        console.log(stack[stack.length - 1])
        console.log(heights[stack[stack.length - 1]])
        console.log('-------------------------------------')
        while (heights[i] < heights[stack[stack.length - 1]]) {
            console.log("进入while")
            console.log("stack.length - 1", stack.length - 1)
            console.log('i', i)
            console.log('stack[stack.length - 1]', stack[stack.length - 1])
            console.log(i - stack[stack.length - 1])
            console.log(i - stack[stack.length - 1] - 1)
            let height = heights[stack.pop()];
            let width = i - stack[stack.length - 1] - 1;
            console.log('长度', width)
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i); // 当前柱子索引入栈
    }
    return maxArea
};
console.log(largestRectangleArea([6, 6, 6, 1]))

//  0  1  2  3 4
// [6, 6, 6, 1, 0]

// stack = [-1, 0, 1, 2]
