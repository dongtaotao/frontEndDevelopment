//================================================================
No.31 二叉树的深度
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
例如：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
提示：

节点总数 <= 10000
求解：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

};
来源：力扣（LeetCode）剑指 Offer 55 - I 题
链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
来源：力扣（LeetCode）算法 104 题
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
  if(!root) return 0

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};
https://github.com/isboyjc/DailyAlgorithms/issues/31

//================================================================
No.32 二叉树的镜像&翻转二叉树
请完成一个函数，输入一个二叉树，该函数输出它的镜像。
例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
来源：力扣（LeetCode）剑指 Offer 27 题
链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
来源：力扣（LeetCode）算法 226 题
链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof

var mirrorTree = function(root) {
  if(!root) return null;
  [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
  return root;
};
https://github.com/isboyjc/DailyAlgorithms/issues/32

//================================================================
No.33 合并二叉树
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:

	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出合并后的树:

	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
注意: 

合并必须从两个树的根节点开始。
求解：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {

};
来源：力扣（LeetCode）算法 617 题
链接：https://leetcode-cn.com/problems/merge-two-binary-trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  // 每次递归将t1与t2看作独立的个体相加，以t1为最终相加目标
  // t1与t2都不存在返回空
  if(!t1 && !t2) return null
  // t1不存在直接返回t2
  if(!t1) return t2
  // t2不存在直接返回t1
  if(!t2) return t1

  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)

  // 返回t1
  return t1
};

https://github.com/isboyjc/DailyAlgorithms/issues/33
//================================================================
No.35 二叉搜索树中的搜索
给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。
 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

例如，
给定二叉搜索树:
        4
       / \
      2   7
     / \
    1   3

和值: 2
你应该返回如下子树:

      2
     / \ 
    1   3
在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
求解：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

};
来源：力扣（LeetCode）算法 700 题
链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if(root == null) return root
  if(root.val == val) return root
  return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val)
};

https://github.com/isboyjc/DailyAlgorithms/issues/35

No.36 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
//================================================================


//=======二叉树景象
function Mirror(root) {
  if(root === null) return;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root
}
//================================================================
二叉搜索树的第K个节点
给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，
按结点数值大小顺序第三小结点的值为4。

  //递归实现
  function KthNode(pRoot, k) { 
    const arr = [];
    loopThrough(pRoot, arr);
    if (k > 0 && k <= arr.length) {
      return arr[k - 1];
    }
    return null;
  }

  function loopThrough(node, arr) {
    if (node) {
      loopThrough(node.left, arr);
      arr.push(node);
      loopThrough(node.right, arr);
    }
  }

JZ55 二叉树的深度
function TreeDepth(pRoot)
{
    if(!pRoot) return 0 ;
    return Math.max(1+TreeDepth(pRoot.left), 1+TreeDepth(pRoot.right));
}
module.exports = {
    TreeDepth : TreeDepth   
};