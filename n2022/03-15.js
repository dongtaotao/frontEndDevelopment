
JS 对象的深拷贝和浅拷贝
浅拷贝：假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，A、B是指向一个地址的；
深拷贝：创建一个新的和原始字段的内容相同的字段，是两个一样大的数据段；两个的地址是吧不一样的；

前端登录，这一篇就够了 ************* 单点退出  
 https://www.cnblogs.com/itgezhu/p/13268420.html
******* 单点登录
1.用户访问web1系统
2.web1没有登录，就会跳转到sso系统， sso系统也没有登录就会弹出登录页面
3.用户提交账户密码提交后，会将登陆状态写入sso的session
4.并且会在浏览器中写入sso域下的cookie， sso系统登录完成后会生成以一个ticket
  然后跳转到web1系统页面，同时将ticket做位参数传递给web1系统
5.Web1系统拿到ticket后，从服务端向sso发送请求，验证ticket是否有效，并且获取用户信息
验证通过后，web1系统会将用户信息写入session并且设置web域下的cookie，

6这样跨域单点登录就完成了。

web2，由于web2也没有登录，所以这时候会跳转到sso，
由于sso已经登录了，不需要输入账号密码进行验证，sso会直接生成ticket
返回给web2， 从服务端向sso发送请求，验证ticket是否有效，
，并且获取用户信息
验证通过后，app系统会将用户信息写入session并且设置web域下的cookie，

https://www.bilibili.com/video/BV12a411273W/?spm_id_from=333.788.recommend_more_video.1

用户向系统1发起注销请求
系统1根据用户与系统1建立的会话id拿到令牌，向sso认证中心发起注销请求
sso认证中心校验令牌有效，销毁全局会话，同时取出所有用此令牌注册的系统地址
sso认证中心向所有注册系统发起注销请求
各注册系统接收sso认证中心的注销请求，销毁局部会话
sso认证中心引导用户至登录页面

单点登录原理与简单实现 
https://www.cnblogs.com/ywlaker/p/6113927.html


https://www.cnblogs.com/ywlaker/p/6113927.html
下面对上图简要描述

用户访问系统1的受保护资源，系统1发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数
sso认证中心发现用户未登录，将用户引导至登录页面
用户输入用户名密码提交登录申请
sso认证中心校验用户信息，创建用户与sso认证中心之间的会话，称为全局会话，同时创建授权令牌
sso认证中心带着令牌跳转会最初的请求地址（系统1）
系统1拿到令牌，去sso认证中心校验令牌是否有效
sso认证中心校验令牌，返回有效，注册系统1
系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源
用户访问系统2的受保护资源
系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数
sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌
系统2拿到令牌，去sso认证中心校验令牌是否有效
sso认证中心校验令牌，返回有效，注册系统2
系统2使用该令牌创建与用户的局部会话，返回受保护资源
　　用户登录成功之后，会与sso认证中心及各个子系统建立会话，用户与sso认证中心建立的会话称为全局会话，用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过sso认证中心，全局会话与局部会话有如下约束关系

局部会话存在，全局会话一定存在
全局会话存在，局部会话不一定存在
全局会话销毁，局部会话必须销毁


　　sso认证中心一直监听全局会话的状态，一旦全局会话销毁，监听器将通知所有注册系统执行注销操作

注销
　　单点登录自然也要单点注销，在一个子系统中注销，所有子系统的会话都将被销毁，用下面的图来说明
　　下面对上图简要说明

用户向系统1发起注销请求
系统1根据用户与系统1建立的会话id拿到令牌，向sso认证中心发起注销请求
sso认证中心校验令牌有效，销毁全局会话，同时取出所有用此令牌注册的系统地址
sso认证中心向所有注册系统发起注销请求
各注册系统接收sso认证中心的注销请求，销毁局部会话
sso认证中心引导用户至登录页面

react-ant-admin后台管理系统，用于快速创建后台项目模板
https://www.cnblogs.com/kongyijilafumi/p/14695044.html

const cityData = [
{
  id: 'axzx',
  name: '广东省',
  children: [
    {
      id: 'sdsd',
      name: '深圳市',
      children: [
        {
          id: '45dss',
          name: '南山区'
        },
        {
          id: 'sdsd11',
          name: '福田区',
          children: [{
            id: 'ddrr2',
            name: 'A街道'
          }]
        }
      ]
    },
    {
      id: '2323d',
      name: '东莞市',
      children: [
        {
          id: 'xxs2',
          name: 'A区'
        },
        {
          id: 'kklio2',
          name: 'B区',
        }
      ]
    }
  ]
}];
  

function getPathById(cityData, id){
    //定义变量保存当前结果路径
    let temppath = [];
    try {
      function getNodePath(node) {
        temppath.push(node.name);
        // console.log('==========',temppath)
        //找到符合条件的节点，通过throw终止掉递归
        if (node.id === id) {
          throw ('GOT IT!');
        }
        if (node.children && node.children.length > 0) {
          for (let i = 0; i < node.children.length; i++) {
            getNodePath(node.children[i]);
          }
          //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
          temppath.pop();
        } else {
          //找到叶子节点时，删除路径当中的该叶子节点
          temppath.pop();
        }
      }
      getNodePath(cityData);
    } catch (e) {
      console.log(temppath)
      return temppath;
    }
  }
  getPathById(cityData.shift(), 'sdsd11')

  
  千分位【阿里】https://juejin.cn/post/6899316658377555976
  // function format(str) {  //1，234，568
  //   // 校验、小数点、负数 先切掉
  //   return str.split('').reduceRight((pre, next, index,origin) => {
  //     return (index % 3 ? next : next + ',') + pre;
  //   });
  // }

react
// 触发更新的三种方式
// 1. setState (作用: 修改state数据, 更新视图)
// 2. forceUpdate 强制触发更新
// 3. props 变化时, 触发更新

25 手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
{
  tag: 'DIV',
  attrs:{
    id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

function _render(vnode) {
  if(typeof vnode === 'number') {
    vnode = String(vnode);
  }
  if(typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  const dom = document.createElement(vnode.tag);
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    })
  }
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}


手写-实现一个对象的 flatten 方法（阿里）
const obj = {
  a: {
         b: 1,
         c: 2,
         d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }
 
 function isObject(val) {
  return typeof val === "object" && val !== null;
}

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}
flatten();

https://juejin.cn/post/7004638318843412493

最新的前端大厂面经（详解答案）
https://juejin.cn/post/7004638318843412493  