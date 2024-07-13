// 定义二叉树节点
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 判断是否平衡的递归函数
function isBalancedHelper(node) {
    if (!node) return [true, 0]; // 空树，高度为0，平衡

    const [leftBalanced, leftHeight] = isBalancedHelper(node.left);
    const [rightBalanced, rightHeight] = isBalancedHelper(node.right);

    // 当前节点是否平衡的判断依据
    const balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

    // 当前子树的高度
    const height = Math.max(leftHeight, rightHeight) + 1;

    return [balanced, height];
}

// 主函数
function isBalanced(root) {
    return isBalancedHelper(root)[0]; // 只关心是否平衡的结果
}

// 示例
//const root = new TreeNode(1,
//     new TreeNode(2,
//         new TreeNode(3),
//         new TreeNode(4)),
//     new TreeNode(2));
// console.log(isBalanced(root)); // 输出: false，因为右子树的左子树高度为2，导致不平衡
