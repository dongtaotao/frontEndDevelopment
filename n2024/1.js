// 帮我生成一个防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 帮我生成一个节流函数
function throttle(fn, delay) {
  let timer = null;
  return function () {
    let args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
// 写一个遍历二叉树的方法
function traverseBinaryTree(root) {
  // 检查当前节点是否为空，如果为空则直接返回，不再进行后续操作
  if (!root) return;
  
  // 递归遍历当前节点的左子树
  traverseBinaryTree(root.left);
  
  // 递归遍历当前节点的右子树
  traverseBinaryTree(root.right);
}


let a =1;
let b =2;
let c =3;
let d =4;
let e =5;
let f =6;
let g =7;
let h =8;
let i =9;
