/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []; // 如果根节点为空，直接返回空数组
    const queue = [root]; // 初始化队列，放入根节点
    const result = []; // 初始化结果数组
    while (queue.length > 0) {
        const levelSize = queue.length; // 当前层的节点数
        const currentLevel = []; // 存储当前节点的值
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();// 取出队首节点
            currentLevel.push(currentNode.val); // 将节点值加入当前层结果
            // 将当前节点的左右孩子加入队列（如果存在）
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right)
        }
        result.push(currentLevel); // 将当前层结果加入最终结果
    }
    return result;
};