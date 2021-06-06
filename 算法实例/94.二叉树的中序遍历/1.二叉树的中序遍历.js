/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 中序遍历， 不过前中后都要熟悉一下
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   let res = [];
   const inorder = (root) =>{
       if(root === null) return;
       inorder(root.left)
       res.push(root.val)
       inorder(root.right)
   }
   inorder(root)
   return res
};