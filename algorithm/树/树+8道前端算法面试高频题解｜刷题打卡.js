往期回顾

数组回炉重造+6道前端算法面试高频题解｜刷题打卡
链表+6道前端算法面试高频题解｜刷题打卡

树的相关名词科普

根节点
叶子节点
父节点
子节点
兄弟节点
高度
深度
层


A 是 根节点。C、D、F、G 是 叶子节点。A 是 B 和 E 的 父节点。B 和 E 是 A 的 子节点。B、E 之间是 兄弟节点。
高度、深度、层 如上图所示。
为了方便理解记忆，高度就是抬头看，深度就是低头看。
与 高度、深度 不同，层 类比盗梦空间里的楼，楼都是从 1 层开始计算，盗梦空间中的楼颠倒过来，从上往下。
关于树的基本知识我们就回顾到这里，如果你想了解更多请稍移玉步到我的这篇专栏「种树专业户」“树”业有专攻
开启刷题

前端食堂的 LeetCode 题解仓库

年初立了一个 flag，上面这个仓库在 2021 年写满 100 道前端面试高频题解，目前进度已经完成了 50%。
如果你也准备刷或者正在刷 LeetCode，不妨加入前端食堂，一起并肩作战，刷个痛快。
下面马上开启我们愉快的刷题之旅，我整理了 8 道高频的 LeetCode 链表题及题解如下。
01 二叉树的中序遍历
原题链接

中序遍历：先打印当前节点的左子树，再打印当前节点，最后打印当前节点的右子树 (CBDAFEG)，如上图。
const inorderTraversal = function(root) {
    const result = [];
    function pushRoot(root) {
        if (root !== null) {
            if (root.left !== null) {
                pushRoot(root.left);
            }
            result.push(root.val);
            if (root.right !== null) { 
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return result;
};
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

02 二叉树的前序遍历 
原题链接

前序遍历：先打印当前节点，再打印当前节点的左子树，最后打印当前节点的右子树 (ABCDEFG)，如上图。
const preorderTraversal = function(root) {
    const result = [];
    function pushRoot(node){
        if (node !== null) {
            result.push(node.val);
            if (node.left !== null){ 
                pushRoot(node.left);
            }
            if (node.right !== null) {
                pushRoot(node.right);
            } 
        }
    }
    pushRoot(root);
    return result;
};
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

03 二叉树的后序遍历
原题链接

后序遍历：先打印当前节点的左子树，再打印当前节点的右子树，最后打印当前节点 (CDBFGEA)，如上图。
const postorderTraversal = function(root) {
    const result = [];
    function pushRoot(node) {
        if (node !== null) {
            if (node.left !== null) {
                pushRoot(node.left);
            }
            if (node.right !== null) {
                pushRoot(node.right);
            } 
            result.push(node.val);
        }
    }
    pushRoot(root);
    return result;
};
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

04 相同的树
原题链接
深度优先搜索 DFS

如果两个二叉树都为空，则它们相同返回 true。
如果两个二叉树中有一个为空，则它们不同返回 false。
如果两个二叉树都不为空，首先判断根节点是否相同，不同则返回 false。
如果两个二叉树的根节点相同，则分别递归判断其左右子树是否相同。

const isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
复制代码

时间复杂度: O(min(m, n))
空间复杂度: O(min(m, n))

05 对称二叉树
原题链接
递归
先明确，所谓“对称”，也就是两个树的根节点相同且

第一个树的左子树与第二个树的右子树镜像对称。
第一个树的右子树与第二个树的左子树镜像对称。

const isSymmetric = function(root) {
    if (root === null) return true
    return isEqual(root.left, root.right) // 比较左右子树是否对称
};

const isEqual = function(left, right) {
    // 递归终止条件
    if (left === null && right === null) return true // 对称
    if (left === null || right === null) return false // 不对称
    // 比较左右子树的 root 值以及左右子树是否对称
    return left.val === right.val
        && isEqual(left.left, right.right)
        && isEqual(left.right, right.left)
}
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

06 二叉树的层序遍历 
原题链接
DFS 深度优先遍历
按照树的深度将每层对应的节点添加到对应层的数组中即可。
const levelOrder = function(root) {
    if (!root) return []
    const res = []
    dfs(root, 0, res)
    return res
};

const dfs = function(root, depth, res) {
    if (!root) return // 递归终止条件
    if (!res[depth]) res[depth] = []
    res[depth].push(root.val) // 存入每层的节点值
    dfs(root.left, depth + 1, res) // drill down
    dfs(root.right, depth + 1, res)
}
复制代码
BFS 广度优先遍历
根据层次返回其对应的结果集合。

边界处理，初始化队列 queue 和存放结果的数组 res。
外层循环遍历层级结构，内层循环遍历每一层的子节点。
遍历时需要记录当前层的遍历次数 len 以及当前层的节点数组 arr。
取得 node 依次出队，并依次存入当前层的节点数组中。
若存在左右子节点，则依次入队，并更新 len。
遍历完后返回结果 res。

const levelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const res = []
    while (queue.length > 0) {
      const arr = []
      let len = queue.length
      while (len) {
        let node = queue.shift()
        arr.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        len--
      }
      res.push(arr)
    }
    return res
};
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

07 二叉树的最大深度
原题链接
DFS 深度优先搜索
树的深度 = 左右子树的最大深度 + 1
const maxDepth = function(root) {
    if (!root) { // 递归终止条件
        return 0
    } else {
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        return Math.max(left, right) + 1
    }
};
复制代码

时间复杂度: O(n)
最坏空间复杂度: O(height), height 表示二叉树的高度

BFS 广度优先搜索
层序遍历时记录树的深度。
二叉树的层序遍历可参考轻松拿下二叉树的层序遍历
const maxDepth = function(root) {
    let depth = 0
    if (root === null) {
        return depth
    }
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            const cur = queue.shift()
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        depth++
    }
    return depth
};
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

08 翻转二叉树
原题链接

Google：我们 90% 的工程师都用你写的软件（Homebrew），但你没法在白板上翻转二叉树，所以翻滚吧，蛋炒饭。

原推截图，至今仍在。 Max Howell 当年吐槽之后 LeetCode 马上加入了这道题。
会了这道题，是不是我们也可以超越世界级大牛了？(狗头保命)
首先明确，所谓二叉树的翻转需要满足以下两点：

它的左右子树要交换位置。
并且左右子树内部的所有子树或是结点都要进行交换位置。

递归

从根节点开始，递归的对树进行遍历。
从叶子结点开始进行翻转。
左右子树都已经翻转后，交换两棵子树的位置即可完成全部的翻转。

const invertTree = function(root) {
    if (root === null) return null // 递归终止条件
    invertTree(root.left)
    invertTree(root.right)
    const temp = root.left
    root.left = root.right
    root.right = temp
    return root
}
复制代码

时间复杂度: O(n)
空间复杂度: O(n)

当然你也可以将上面的 2，3 两个步骤颠倒执行，也就是先交换两棵子树的位置，再对其内部进行翻转。
const invertTree = function(root) {
    if (root === null) return null // 递归终止条件 
    const temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
}
复制代码
BFS
层序遍历遍历二叉树，当根结点出列时，翻转它的左右子树。然后将其左右子节点入列，以便下一层时翻转。
二叉树的层序遍历可参考上文的题解。
const invertTree = (root) => {
  if (root == null) return null;
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    [cur.left, cur.right] = [cur.right, cur.left]; 
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return root;
}

作者：童欧巴
链接：https://juejin.cn/post/6938385018267893767
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。