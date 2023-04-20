JS算法_知识点精讲
https://juejin.cn/post/7161988405394735140

shuffle
function shuffle(arr){
  var result = [],
      random;
  while(arr.length>0){
      random = Math.floor(Math.random() * arr.length);
      result.push(arr[random])
      arr.splice(random, 1)
  }
  return result;
}

JavaScript 数组结构与树结构相互转换 🔥🔥🔥


1. Array -> Tree
/** 数组结构数据 */
const arrayData = [
  { id: 2, title: '中国', parent_id: 0 },
  { id: 3, title: '广东省', parent_id: 2 },
  { id: 4, title: '广州市', parent_id: 3 },
  { id: 5, title: '天河区', parent_id: 4 },
  { id: 6, title: '湖南省', parent_id: 2 },
  { id: 1, title: '俄罗斯', parent_id: 0 }
]

/**
 * 递归查找添加children
 * @param {数组数据} data 
 * @param {存放返回结果} result 
 * @param {父id} pid 
 */
function getChildren(data, result, pid) {
  for (const item of data) {
    if (item.parent_id === pid) {
      const newItem = { children: [], ...item }
      result.push(newItem)
      getChildren(data, newItem.children, item.id)
    }
  }
}

/**
 * 转化方法
 * @param {数组数据} data 
 * @param {父id} pid 
 * @returns 
 */
function arrayToTree(data, pid) {
  let result = []
  getChildren(data, result, pid)
  return result
}

console.log(arrayToTree(arrayData, 0));


2. Tree -> Array
/** 树状形结构数据treeData */
const treeData = [
  {
    id: 2, title: '中国', parent_id: 0,
    children: [
      {
        id: 3, title: '广东省', parent_id: 2,
        children: [
          {
            id: 4, title: '广州市', parent_id: 3,
            children: [
              { id: 5, title: '天河区', parent_id: 4 }
            ]
          }
        ]
      },
      { id: 6, title: '湖南省', parent_id: 2 }
    ]
  },
  { id: 1, title: '俄罗斯', parent_id: 0, },
]

function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
      tree.forEach((item) => {
          if (item.children) {
              dfs(item.children);
              delete item.children;
          }
          res.push(item);
      });
  };
  dfs(data);
  return res;
}


3. Tree 查找路径（id）
/**
 * 根据id查找所在目录路径
 * @param {树结构的数组数据} tree 
 * @param {要查找的id} id 
 * @param {初始路径} path 
 * @returns 
 */
function parseTreePath(tree, id, path = "") {
  for (let i = 0; i < tree.length; i++) {
    let tempPath = path;
    // 避免出现在最前面的/
    tempPath = `${tempPath ? tempPath + "/ " : tempPath}${tree[i].title}`; 
    if (tree[i].id == id) return tempPath;
    else if (tree[i].children) {
      let reuslt = parseTreePath(tree[i].children, id, tempPath);
      if (reuslt) return reuslt;
    }
  }
};
console.log(parseTreePath(treeData, 5));