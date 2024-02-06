3.5w字 | 47道 LeetCode 题目带你看看二叉树的那些套路（上）
https://juejin.cn/post/6943091553250312229

//================================================================
// 反转二叉树
var invertree = (root) => {
  if(!root) {
    return null
  };
  return {
    val: root.val,
    left: invertree(root.right),
    right: invertree(root.left)
  } 
}
//================================================================
源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5

function Mirror(root){
  if(root){
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    Mirror(root.right);
    Mirror(root.left);
  }
}

//================================================================
给定一棵二叉搜索树，请找出其中的第k小的结点。 例如，
（5，3，7，2，4，6，8） 中
，按结点数值大小顺序第三小结点的值为4。
#
思路
二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。
#

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

//================================================================
给定一个二叉树，判断其是否是一个有效的二叉搜索树。
假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
链接：https://leetcode-cn.com/problems/validate-binary-search-tree

解题思路：
题目要求输入一个二叉树判断它是不是二叉搜索树
中序遍历二叉树即：左根右的顺序，思考下输出是不是1，2，3，是的刚好是一个升序，因此我们通过中序遍历一颗树的结果是不是一个升序结果，
从而判断它是不是二叉搜索树。
JavaScript 代码：
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var queue = []
  function inorder(root){
    if (!root) return
    if (root.left) inorder(root.left)
    if (root) queue.push(root.val)
    if (root.right) inorder(root.right)
  }

  inorder(root)
  // 判断中序遍历输出的数组是不是升序排列的
  for (let i =0; i< queue.length-1; i++){
      if (queue[i] >= queue[i+1]) return false
  }
  return true
};
链接：https://juejin.im/post/6844904161557872653

//================================================================
// 对称二叉树
var isSymmetric = (root) => {
  if(!root) return true;
  const isMirroe = (l, r) => {
    if(!l && !r) {
      return true;
    }
    if(l && r && l.val === r.lva && isMirroe(l.left, r.left) &&
      isMirroe(r.right && l.right)) {
      return true
    }
    return false;
  }
  return isMirroe(root.left, root.right)
}
//================================================================
相同的树
var issametree = (p, q) => {
  if(!p && !q) return true;
  if(p && q && p.val === q.val && issametree(p.left, q.left) && issametree(p.right, q.right)) {
    return true
  }
  return false;
}

怎么理解DFS和BFS
https://juejin.cn/post/6950200059543683086

层序遍历const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

function BFS(root) {
  let queue = [];
  // 根结点首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    // 这里队列前面不断被更新
    const top = queue[0];
    // 输出值
    console.log(top.val);
    // 将可到达的点 入队
    top.left && queue.push(top.left);
    top.right && queue.push(top.right);
    // 访问完毕，队头元素出队
    queue.shift();
  }
}
BFS(root);
**************************************************
function BFS1(root) { 
  let queue = [];
  // 根结点首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
  
    const top = queue.shift();
    console.log(top.val);
    // 将可到达的点 入队
    top.left && queue.push(top.left);
    top.right && queue.push(top.right);
    // 访问完毕，队头元素出队
    
  }
}

//================================================================
（1）前序遍历
function preorder(root) {
  if(!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}
//=============================================================================
（4）层序遍历
function levelTraversal(root) {
  if(!root) {
    return []
  }
  var q = [root];
  var result = [];
  while(q.length) {
    var node = q.shift();
    result.push(node.val);
    if(node.left) {
      q.push(node.left);
    }
    if(node.right) {
      q.push(node.right)
    }
  }
  return result
}

//================================================================
（4）二叉树的层序遍历
[
  [3],
  [9,20],
  [15,7]
]

let leveOrder = (root) => {
  if(!root) {
    return []
  }

  const q = [[root, 0]];
  const res = [];
  while(q.length) {
    const [n, level] = q.shift();
    if(!res[level]) {
      res.push([n.val])
    } else {
      res[level].push(n.val)
    }
    if(n.left) q.push([n.left, level+1])
    if(n.right) q.push([n.right, level+1])
  }
}
//================================================================
（12）相同的树
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
  if(!p && !q){
      return true
  }
  if(p === null || q === null){
      return false
  }
  if(p.val !== q.val){
      return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

//================================================================
（15）二叉树的最大深度

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
  if(!root){
      return 0;
  }else{
      var leftDepth = maxDepth(root.left)
      var rightDepth = maxDepth(root.right)
      return Math.max(leftDepth,rightDepth)+1
  }
};


（1）翻转二叉树
输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1
复制代码

var invertTree = (root) => {
  if(!root) {
    return root;
  }

  root.right = invertTree(root.left);
  root.left = invertTree(root.right);
  return root;
}

（2）合并二叉树
输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7

var mergeTrees = function(t1, t2) {
  if(!t1 && t2){
      return t2
  }
  if(t1 && !t2 || !t1 && !t2){
      return t1
  }

  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
};
作者：CUGGZ
链接：https://juejin.cn/post/6943092291561062436

二叉搜索树中的搜索
https://juejin.cn/post/6950855380620541960

700. 二叉搜索树中的搜索
给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
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
var searchBST = function(root, val) {
  let n = null;
  trave(root);
  return n;
  function trave(root){
      if(root == null) return;
      if(root.val>val){
        trave(root.left)
      }else if(root.val<val){
        trave(root.right)
      }else{
        n = root;
      }
  }
};
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

724. 寻找数组的中心下标
示例 1：

输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

var pivotIndex = function(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      if (2 * sum + nums[i] === total) {
          return i;
      }
      sum += nums[i];
  }
  return -1;
};

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-pivot-index
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

1221. 分割平衡字符串
在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。
给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
注意：分割得到的每个字符串都必须是平衡字符串，且分割得到的平衡字符串是原平衡字符串的连续子串。
返回可以通过分割得到的平衡字符串的 最大数量 。
示例 1：

输入：s = "RLRRLLRLRL"
输出：4
解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
示例 2：

输入：s = "RLLLLRRRLR"
输出：3
解释：s 可以分割为 "RL"、"LLLRRR"、"LR" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
要求通过分割得到的平衡字符串的最大数量。那么当然是能分割就一定要分割，从左边开始计数，只要满足 L 和 R 数量相同就分割一次。
var balancedStringSplit = function(s) {
    let ans = 0, cnt = 0
    for (let i = 0; i < s.length; i ++) {
        cnt += (s[i] === 'L' ? 1 : -1)
        if (cnt === 0) {
            ans ++
        }
    }
    return ans
};
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

翻转二叉树
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return null
    let l = invertTree(root.left)
    let r = invertTree(root.right)
    root.left = r 
    root.right = l
    return root
};

完全二叉树的节点个数 https://juejin.cn/post/7035631738659274759
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
 * @return {number}
 */
 var countNodes = function(root) {
    if(root == null) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};

110. 平衡二叉树
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    return getHeight(root) >= 0
};

var getHeight = function(root){
    if(root == null) return 0
    let l = getHeight(root.left)
    let r = getHeight(root.right)
    // 用正负数判断，不平衡返回-1，平衡返回正数
    if(l<0 || r<0) return -1
    if(Math.abs(l - r) > 1) return -1
    return Math.max(l,r) + 1
}



N 叉树的前序遍历 https://juejin.cn/post/7073484423336820744
/** 
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
  const res = new Array()
  dfs = function(node) {
      if(node != null) {
          res.push(node.val)
          for(const child of node.children)
              dfs(child)
      }
  }
  dfs(root)
  return res
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
 N 叉树的后序遍历
/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
  const ans = new Array()
  dfs = function(node) {
      if(node != null) {
          for(const child of node.children)
              dfs(child)
          ans.push(node.val)
      }
  }
  dfs(root) 
  return ans
}
   