剑指 Offer 26. 树的子结构

二叉树相关的算法题 https://juejin.cn/post/6964575851669127181

数据结构与算法之树
https://juejin.cn/post/6890086646973202439
const tree = {
  val: 'a',
  children: [
      {
          val: 'b',
          children: [
              {
                  val: 'd',
                  children: [],
              },
              {
                  val: 'e',
                  children: [],
              }
          ],
      },
      {
          val: 'c',
          children: [
              {
                  val: 'f',
                  children: [],
              },
              {
                  val: 'g',
                  children: [],
              }
          ],
      }
  ],
};

深度优先遍历
const dfs = root => {
  console.log(root.val);
  root.children.forEach(dfs)
}

广度优先遍历
const bfs = (root) => {
  const q = [root];
  while(q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach(child => {
      q.push(child)
    })
  }
}

const bt = {
  val: 1,
  left: {
      val: 2,
      left: {
          val: 4,
          left: null,
          right: null,
      },
      right: {
          val: 5,
          left: null,
          right: null,
      },
  },
  right: {
      val: 3,
      left: {
          val: 6,
          left: null,
          right: null,
      },
      right: {
          val: 7,
          left: null,
          right: null,
      },
  },
};

1. 先序遍历(根左右)
访问根节点
对根节点的左子树进行先序遍历
对根节点的右子树进行先序遍历

先序遍历(根左右)
const prorder = (root) => {
  if(!root) {
    return;
  }

  console.log(root.val);
  prorder(root.left);
  prorder(root.right);
}
prorder(bt)

const preorder = (root) => {
  if (!root) { return; }
  const stack = [root];
  while (stack.length) {
      const n = stack.pop();
      console.log(n.val);
      if (n.right) stack.push(n.right);
      if (n.left) stack.push(n.left);
  }
};

const preorder1 = (root) => {
  if (!root) { return; }
  const stack = [root];
  while (stack.length) {
      const n = stack.shift();
      console.log(n.val);
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
  }
};


2. 中序遍历(左根右)
对根节点的左子树进行中序遍历
访问根节点
对根节点的右子树进行中序遍历

const inorder = (root) => {
  if (!root) { return; }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

const inorder = (root) => {
  if (!root) { return; }
  const stack = [];
  let p = root;
  while (stack.length || p) {
      while (p) {
          stack.push(p);
          p = p.left;
      }
      const n = stack.pop();
      console.log(n.val);
      p = n.right;
  }
};

3. 后序遍历(左右根)
对根节点的左子树进行后序遍历
对根节点的右子树进行后序遍历
访问根节点
const postorder = (root) => {
  if (!root) { return; }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
const postorder = (root) => {
  if (!root) { return; }
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
      const n = stack.pop();
      outputStack.push(n);
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
  }
  while(outputStack.length){
      const n = outputStack.pop();
      console.log(n.val);
  }
};
104. 二叉树的最大深度
var maxDepth = function(root) {
  if (!root) {
      return 0
  }
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
};

111. 二叉树的最小深度
102. 二叉树的层序遍历
94. 二叉树的中序遍历
112. 路径总和


二叉搜索树中的搜索【二叉树】
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
  if (root == null) return null;
  if (root.val === val) return root;
  if (root.val > val) {
      return searchBST(root.left, val);
  } else if (root.val < val) {
      return searchBST(root.right, val);
  }
};

二叉树最近公共祖先 https://juejin.cn/post/6844904175562653710
https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
（1）深度优先查找，查到两节点任意一个返回
（2）当两个节点都找到时返回root，否则返回null
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(!left) return right;
    if(!right) return left;
    if(left && right) return root;  
    return null;
};

合并二叉树 https://juejin.cn/post/6844904175562653710 
var mergeTrees = function(t1, t2) {
  if(t1 && t2){
      t1.val += t2.val;
      t1.left = mergeTrees(t1.left,t2.left);
      t1.right = mergeTrees(t1.right,t2.right);
  }
  return t1 || t2; 
}; 
