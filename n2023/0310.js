前端播放webrtc
https://juejin.cn/post/7208736503520935995?

JS 实现文件的切割与合并
https://juejin.cn/post/7181420926074880058
大文件上传之切片上传、断点续传、秒传  很不错
https://juejin.cn/post/7185185479065600059

重新认识下网页水印
https://juejin.cn/post/7208465670991872061?
使用背景图图片
动态生成div
Canvas写入图片做背景水印
Canvas写入文字做背景水印
Svg做水印
shadowDom水印
盲水印
方案一：低透明度方案的暗水印
方案二：将水印内容以像素偏差记录到画布中
方案三：数字加密
MutationObserver

利用Vue3指令详细实现水印背景！
https://juejin.cn/post/7208466455879417893?

JavaScript 图片打印方案
https://juejin.cn/post/7208472817461116989

vue 可视化大屏适配插件之过程篇
https://juejin.cn/post/7134985068786745374

手摸手一步步带你封装Axios
https://juejin.cn/post/7207620183308501052

Excel导出，前后端两种方法让数据飞入你的手中！
https://juejin.cn/post/7208812808136753207?

如何在前端项目中引入外部字体并使用？
https://juejin.cn/post/7063111159372578829

使用Typescript和Rollup从零开发一个前端工具库
https://juejin.cn/post/7179203084512395319

websocket心跳机制，断线重连机制
websocket心跳机制：客户端和服务端通过websocket建立连接后,定期发送ping消息来检测连接是否还存活,这就是心跳机制。通过心跳机制可以及时发现连接是否中断,避免资源的浪费。
断线重连机制：当客户端通过心跳机制检测到连接已断开时,需要重连。客户端会重新发起websocket连接请求,服务端收到请求后先关闭已断开的连接,然后建立一个新的连接。这样就实现了websocket的断线重连。
异步加载方式
异步加载是webpack实现代码分割的一种手段。webpack通过import()动态导入语法来实现异步加载。使用import()语法，
import('./module').then(module => { ... })
复制代码
可以在运行时,异步地加载某个模块。webpack会自动把通过import()语法导入的模块,单独打包成一个JS文件。当代码执行到import()时,会自动加载这个JS文件,然后执行 .then()里的回调函数。 通过import()可以很好地实现代码的按需加载,提高页面加载速度。这也是webpack实现懒加载的方式之一。

链接：https://juejin.cn/post/7208488647535362105


35 树形结构转成列表
https://juejin.cn/post/6968713283884974088#heading-1
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
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

36 大数相加
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}

function add(a ,b){
	//取两个数字的最大长度
	let maxLength = Math.max(a.length, b.length);
	//用0去补齐长度
	a = a.padStart(maxLength , 0);//"0009007199254740991"
	b = b.padStart(maxLength , 0);//"1234567899999999999"
	//定义加法过程中需要用到的变量
	let t = 0;
	let f = 0;   //"进位"
	let sum = "";
	for(let i=maxLength-1 ; i>=0 ; i--){
		 t = parseInt(a[i]) + parseInt(b[i]) + f;
		 f = Math.floor(t/10);
		 sum = t%10 + sum;
	}
	if(f!==0){
		 sum = '' + f + sum;
	}
	return sum;
}

compose组合函数实现 https://juejin.cn/post/6989103878436290568
// 聚合函数
export default function compose(...funcs) {
  // 如果是空，直接返回空函数并接受一个参数
  if (funcs.length === 0) {
    return arg => arg
  }
  // 如果有一个，直接执行并返回结果
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 如果对reduce不了解，可以先去看下技术文章
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

3. 无重复字符的最长子串
https://juejin.cn/post/6973941162952687653#heading-8
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0; // 左指针的初始位置
    let res = 0; // 长度初始值为0
    const map = new Map();
    for(let r = 0; r < s.length; r++) {
        if(map.has(s[r]) && map.get(s[r]) >= l ) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
};

102. 二叉树的层序遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if(!root) {return [];}
	const q = [[root,0]];
	let res = [];
	while(q.length) {
			const [n,leave] = q.shift();
			if(!res[leave]) { // 层级为0 的时候，根节点入队
					res.push([n.val])
			}else {
					res[leave].push(n.val) // 根据层级添加对应的val值
			}
			console.log(n.val,leave)
			if(n.left) q.push([n.left,leave+1]);
			if(n.right) q.push([n.right,leave+1]);
	}
	return res;
};

浏览器指纹技术简介
https://juejin.cn/post/7039635796495712287

来聊一聊前端工程师会涉及的monorepo管理工具lerna
https://www.bilibili.com/video/BV1DP41177nj/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

网页重新部署，通知用户-最佳实践、
plugin-web-update-notification
https://juejin.cn/post/7209234917288886331?

从0到1实现一个属于自己的脚手架工具
https://juejin.cn/post/7209657931125178426?

深度使用html2canvas的经验总结
https://juejin.cn/post/7209862607975563301?

el-upload大文件切片上传
https://juejin.cn/post/7210310775277092924?

大屏适配解决方案
https://juejin.cn/post/6972416642600927246

十四.使用verdaccio搭建私有组件库
https://juejin.cn/post/7145706369578958879

返回上一页面如果没有上一页面返回首页
https://juejin.cn/post/7202047276918128697

封装一个切片上传组件 https://juejin.cn/post/7210661913726107703?

快速高效的将项目转换为灰度模式
https://juejin.cn/post/7210650495197823013?
行内样式（加上webkit更加兼容页面）：
<style="filter:grayscale(1);-webkit-filter:grayscale(1)">

style样式：
<style>
html { 
    filter: grayscale(1);
} 
</style>

摸鱼两天，彻底拿下虚拟滚动！
https://juejin.cn/post/7211088034179366973?

实现文件分片上传 🔥🔥🔥
https://juejin.cn/post/7211401380770627643?
实现文件分片上传
在大文件上传的过程中，文件分片上传是一种非常实用的解决方案。通过将文件分成多个较小的片段，我们可以提高上传速度、减少失败率，以及实现断点续传。本文将介绍如何使用React和Koa2实现文件分片上传功能，包括前端分片处理、后端合并分片、为每个文件分配唯一标识符、实现断点续传和上传进度显示（console打印下得了--！）。
链接：https://juejin.cn/post/7211401380770627643

快速实现上传进度条功能
https://juejin.cn/post/7210945608877948983

使用koa2完成Excel的导入和导出
https://juejin.cn/post/7211388928241418296?

纯前端实现 Excel在线解析和预览（兼容APP、Web、小程序）
https://juejin.cn/post/7211805251216031801?

文件上传
https://juejin.cn/post/7211861991533805625?

使用verdaccio搭建npm私有仓库
https://juejin.cn/post/6844903776533364749

标准化大厂编程规范解决方案之ESLint + Prettier + Git Hooks
https://juejin.cn/post/7211539869805150263?

树形结构转成列表
[
  {
      id: 1,
      text: '节点1',
      parentId: 0,
      children: [
          {
              id:2,
              text: '节点1_1',
              parentId:1
          }
      ]
  }
]
转成
[
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
  ...
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


优化实战 第 14 期 - 页面平滑滚动（返回顶部）
https://juejin.cn/post/7061027877210292255
anchor.scrollIntoView({ behavior: 'smooth', block: 'end' })
优化实战 第 17 期 - 文件类型的终极校验，堪称完美
https://juejin.cn/post/6999241171566329887
优化实战 第 42 期 - 前端如何高效的生成唯一ID
https://juejin.cn/post/7127145828611227678
npm install uuid 
优化实战 第 45 期 - 基于二进制流实现文件下载
https://juejin.cn/post/7028773314222882847

如何同步不同电脑的vscode配置，涵盖自定义配置
https://juejin.cn/post/7124901461661581348

62. webpack的热更新
主要依赖webpack, express, websocket

使用express启动本地服务，当浏览器访问的时候做出相应
服务端和客户端使用websocket实现长连接
webpack监听源文件的变化
每次编译完成之后会生成hash值，已改动模块的json文件，已改动模块代码的js文件
编译完成后通过socket向客户端推送当前编译的hash值

客户端的websocket监听到有文件改动推送过来的hash值，会和上一次进行对比
一致就走缓存
不一致则通过ajax和jsonp获取最新的资源
使用内存文件系统去替换有修改的内容实现局部更新
链接：https://juejin.cn/post/6844904078288355341
