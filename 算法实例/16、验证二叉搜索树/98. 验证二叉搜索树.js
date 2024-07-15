class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) return true; // 空树满足条件

    // 当前节点值不在合法范围内，说明不满足二叉搜索树的定义
    if (root.val <= min || root.val >= max) return false;

    // 递归检查左子树和右子树
    return (
        isValidBST(root.left, min, root.val) && // 左子树的最大值应小于当前节点值
        isValidBST(root.right, root.val, max) // 右子树的最小值应大于当前节点值
    );
}

// 示例
// const root = new TreeNode(2,
//     new TreeNode(1),
//     new TreeNode(3));
// console.log(isValidBST(root)); // 输出: true，这是一个有效的二叉搜索树
