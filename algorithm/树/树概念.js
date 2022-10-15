3.5w字 | 47道 LeetCode 题目带你看看二叉树的那些套路（上）
https://juejin.cn/post/6943091553250312229

3.5w字 | 47道 LeetCode 题目带你看看二叉树的那些套路（下）
https://juejin.cn/post/6943092291561062436


https://juejin.cn/post/6844904154066845703
二叉树


三、平衡二叉树
二叉树中，每一个节点的左右子树的高度相差不能大于 1，称为平衡二叉树。 
这题和求二叉树的最大深度关联。如果节点为空直接判断为平衡二叉树，否则判断左右子树的高度差是否大于1，大于的话不是平衡二叉树，否则继续递归判断左子树和右子树。
var isBalanced = function (root) {
  if (!root) return true
  function getHeight(tree) {
      if (!tree) return 0
      return Math.max(getHeight(tree.left), getHeight(tree.right)) + 1 
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
      return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
};


另外还有满二叉树、完全二叉树等： 

满二叉树：除了叶结点外每一个结点都有左右子叶且叶子结点都处在最底层的二叉树
完全二叉树：深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第h 层所有的结点都连续集中在最左边

作者：前端瓶子君
链接：https://juejin.cn/post/6844904154066845703
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

遍历一个二叉树所有节点，返回它们的和
function numSum(root) {
  if(!root) return 0;
  return root.val + numSum(root.left) + numSum(root.right); 
}
