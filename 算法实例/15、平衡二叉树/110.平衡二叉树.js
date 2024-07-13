// 难度：简单

// 题目
// 给定一个二叉树，判断它是否是 平衡二叉树

// 示例：
// 示例1：
// 输入：root = [3, 9, 20, null, null, 15, 7]
// 输出：true

// 示例2：
// 输入：root = [1, 2, 2, 3, 3, null, null, 4, 4]
// 输出：false

// 示例3：
// 输入：root = []
// 输出：true

// 提示：
// ● 树中的节点数在范围[0, 5000] 内
// ● -104 <= Node.val <= 104

// 解题思路：
// 暴力解判断一棵二叉树是否是平衡二叉树，我们需要理解“平衡”的定义：对于树中的任意节点，它的左子树和右子树的高度差不超过1。这个问题可以通过自底向上递归的方式来解决，每个递归函数返回两个值：当前子树是否平衡以及该子树的高度。

// 1、定义递归函数：编写一个递归函数，该函数接收一个树节点作为参数。这个函数需要返回两个值：
// ○ 一个布尔值，表示以该节点为根的子树是否平衡。
// ○ 一个整数，表示以该节点为根的子树的高度。

// 2、基本情况：
// ○ 如果节点为空，可以直接返回“平衡”状态（true）以及高度0，因为空树被认为是平衡的。

// 3、递归计算：
// ○ 对当前节点的左子树进行递归调用，得到左子树是否平衡及高度。
// ○ 对当前节点的右子树进行递归调用，得到右子树是否平衡及高度。

// 4、判断并返回：
// ○ 根据左、右子树的平衡状态和高度，判断当前节点的子树是否平衡：
// ■ 如果左、右子树都平衡且它们的高度差不超过1，则当前子树平衡。
// ■ 否则，当前子树不平衡。
// ○ 计算当前子树的高度，即左右子树高度中的较大者加1。
// 5、主函数调用：从根节点开始调用递归函数，仅关心返回的平衡状态，忽略高度信息。


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
