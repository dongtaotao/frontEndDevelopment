Vue和React对比学习之路由(Vue-Router、React-Router) 
https://juejin.cn/post/7104242876007055396
Redux 异步数据流方案对比(redux-thunk、redux-promise、redux-saga)
https://juejin.cn/post/7105302789600854029
Vue和React对比学习之生命周期函数(Vue2、Vue3、老版React、新版React)
Vue和React对比学习之组件传值(Vue2 12种、Vue3 9种、React 7种)
Vue和React对比学习之Style样式
Vue和React对比学习之Ref和Slot
Vue和React对比学习之Hooks
Vue和React对比学习之路由(Vue-Router、React-Router)
Vue和React对比学习之状态管理 (Vuex和Redux)
链接：https://juejin.cn/post/7106034846417289247

聊聊浏览器的缓存
https://juejin.cn/post/7055224159642583047

VuePress 是一个以 Markdown 为中心的静态网站生成器。
你可以使用 Markdown在新窗口打开 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

Vue+better-scroll 实现通讯录字母索引
https://juejin.cn/post/7106464378895106062

VSCode插件开发流程（超详细！）
https://juejin.cn/post/7105949232993370119

8 种技巧让你编写更简洁的 JavaScript 代码
https://mp.weixin.qq.com/s/nEBp9YYUYFLP8O3xJfbm9A

使用 react-pdf 打造在线简历生成器
https://juejin.cn/post/7067108714355884069
https://cv.runjs.cool/

vue2 与 vue3 虚拟列表实现 https://juejin.cn/post/7081790864573333512

前端取消请求与取消重复请求
https://juejin.cn/post/7108359238598000671
还不知道npm私服？一篇教会你搭建私服并发布vue3组件库到nexus
https://juejin.cn/post/7109026865259479076 

封装一个图片压缩方法
https://juejin.cn/post/7109389978982940709

自己实现一个大文件切片上传+断点续传
https://juejin.cn/post/7110121072032219166
基于原生js和node实现文件上传和大文件切片上传
https://www.bilibili.com/video/BV1zS4y1B7Eg?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

渲染十万条数据就把你卡住了？不存在的
https://juejin.cn/post/7110588879060598820

你知道的提高前端安全的手段有哪些
https://juejin.cn/post/7110607638806659102

React 如何处理异常
https://juejin.cn/post/7106811792290447396

nodejs 多进程
https://juejin.cn/post/7107948258328051726
Node.js 开启多进程
答案
可使用 child_process.fork 和 cluster.fork 开启子进程
使用 send on 传递消息

前端H5与客户端Native交互原理 - JSBridge双向通信机制的实现
https://juejin.cn/post/7114282473164374029 

十分钟学会快速搭建个人网站和技术博客  vitepress  
https://www.bilibili.com/video/BV13g411P7WG/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

实现双向数据绑定
let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

JS实现树形结构与数组结构相互转换并在树形结构中查找对象
https://www.jb51.net/article/253467.htm
var tree=[
  {
    'id': '1',
    'name': '教学素材管理',
    'children':[
      {
        'id': '101',
        'name': '教学素材',
        'children':[
          {
            'id': '10101',
            'name': '修改',
          },
          {
            'id': '10102',
            'name': '添加',
          }
        ]
      },  {
        'id': '102',
        'name': '测试试题',
      },
      {
        'id': '103',
        'name': '问题任务',
      }
    ]
  }, {
    'id': '2',
    'name': '基础数据管理',
    'children':[
      {
        'id': '201',
        'name': '专业设置',
      },
      {
        'id': '202',
        'name': '专业管理',
      }
    ]
  }
]

1、如何在tree中找到id=10102的对象？
思路一：深度遍历，从顶点开始，当前节点有子节点则遍历当前节点的子节点（递归）。
function deepQuery(tree,id) {
  var isGet = false;
  var retNode = null;
  function deepSearch(tree,id){
      for(var i = 0; i<tree.length; i++) {
          if(tree[i].children && tree[i].children.length>0) {
              deepSearch(tree[i].children,id);
          }
          if(id === tree[i].id || isGet) {
              isGet||(retNode = tree[i]);
              isGet = true;
              break;
          }
      }
  }
  deepSearch(tree,id);
  return retNode;
}

var getNode = deepQuery(tree,10102);
console.log(getNode)

思路二：广度遍历，遍历根节点的所有子节点，再从第一个子节点开始依次遍历。
function breadthQuery(tree, id) {
  var stark = [];
  stark = stark.concat(tree);
  while(stark.length) {
      var temp = stark.shift();
      if(temp.children) {
          stark = stark.concat(temp.children);
      }
      if(temp.id === id) {
          return temp;
      }
  }
}

var getNode=breadthQuery(tree,10102);
console.log(getNode);


2、如何将树形结构转换为有父子关系属性的数组结构？
function flatten1(tree) {
  var arr = [];
  function spread(tree,pid) {
      for (var i=0; i < tree.length; i++ ) {
          item = tree[i]
          let {id,name}=item;
          arr.push({id,name,pid})
          if (item.children) {
              spread(item.children,item.id)
              delete item.children
          }
      }
  }
  spread(tree,0)
  return arr;
}
var newArr = flatten1(tree);
function flatten2 (data,pid) {
  return data.reduce((arr, {id, name, children = []}) =>
    arr.concat([{id, name,pid}], flatten2(children,id)), [])
} 
var newArr = flatten2(tree,0);

3、如何将数组结构转换为树形结构？
function treeData(data){   
  let cloneData = JSON.parse(JSON.stringify(data))
  return cloneData.filter(parent=>{
      let branchArr = cloneData.filter(child => parent['id'] == child['pid']);
      branchArr.length>0 ? parent['children'] = branchArr : '';
      return parent['pid'] == 0 ;
  })
}

var newTree = treeData(newArr) 