function subsets(nums) {
    const result = []; // 存储所有子集的数组
    const backtrack = (start, path) => {
        // 将当前子集添加到结果集中
        result.push([...path]);
        // 遍历数组，从start开始，避免重复选择
        for (let i = start; i < nums.length; i++) {
            // 选择当前元素，加入路径
            path.push(nums[i]);
            // 递归调用，进入下一层决策树
            backtrack(i + 1, path);
            // 回溯，撤销选择，回到上一层决策树
            path.pop();
        }
    };
    // 调用回溯函数，初始时子集为空，从数组第一个元素开始考虑
    backtrack(0, []);
    return result;
}

// 示例
const nums = [1, 2, 3];
console.log(subsets(nums)); // 应输出所有子集
