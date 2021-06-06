/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 如果p和q都是null，空二叉树，那么他们相等
   if(p === null && q === null){
       return true
   }else if(p === null || q === null || p.val !== q.val){
       return false
   }else{
    //  p和q的值相等，需要递归绑定左右子树
       return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
   }
};

