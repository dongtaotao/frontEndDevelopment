巧妙使用Vue.extend继承组件实现el-table双击可编辑（不使用v-if和v-else）
https://juejin.cn/post/7108542695387168799

推荐使用锚点做页面滚动（比scrollTop好用）
https://juejin.cn/post/7105782306706554888

v-for中动态校验el-form表单项代码示例
https://juejin.cn/post/7102463528245657614

vue中使用高德地图amap步骤流程代码案例
https://juejin.cn/post/7097828793041027080

vue中使用docx-preview插件预览word文档（后端express）
https://juejin.cn/post/7033962262494707749

vue预览word，excel，pptx，pdf文件
https://juejin.cn/post/7025400224721928223

基于 React + Socket.io 实现简易在线文档协作编辑
https://juejin.cn/post/7218109174085173306?

vue中使用a标签下载静态资源文件（比如excel、pdf等）后端不参与
https://juejin.cn/post/7007791264921993253

vue中父组件异步数据通过props方式传递给子组件，子组件接收不到的问题
https://juejin.cn/post/6971827710599364616

vue-esign签字板的使用步骤小demo
https://juejin.cn/post/6968447462491029534

requestAnimationFrame：告诉浏览器在下一次绘制之前执行
requestIdleCallback：在浏览器空闲的事件执行

CSRF
csrf：跨站请求伪造(Cross—Site Request Forgery) 攻击者利用 HTTP 请求会自动携带 cookie 的特定，利用用户的登陆状态发送恶意请求。 方法：自动发起 get/post 请求；诱导点击

CSRF 的过程：

用户登录了 a.com ，有了 cookie
黑客引诱用户访问 b.com 网页，偷偷让用户访问了 a.com/api/xxx（干某件事）
a.com api 接口收到请求 cookie ，误以为是真实用户的请求，就受理了
防御：

CSRF token 验证
HTTP 请求头的 referer 字段（可以伪造），Origin(不含具体 url)
SameSite 限制 Cookie 在跨站请求时不会被发送
Strict，必须是相同站点
Lax 宽松，允许部分类型，比如 a 链接
None 不限制

XSS
XSS：跨站脚本(Cross Site Scripting)

存储型：将恶意代码存在服务器，请求含有恶意代码的页面。
反射型：构建含有恶意代码的 url，服务器不存储，后端直接返回到页面。
DOM 型：前端解析恶意代码执行，相比前两者，属于前端的漏洞。
防御：

本质是防止恶意脚本的注入
存储型和反射性：改成纯前端渲染， 对输入内容进行转义和过滤
DOM 型：谨慎  innerHTML/ v-html ，字符串做代码执行的 eval,Function
CSP 内容安全策略 Content-Security-Policy，白名单告诉浏览器认可的资源来源，http 响应头/meta
很多 XSS 盗取是 cookie 的，可以设置 Cookie 的 HttpOnly

借助jsQR简简单单在H5中识别图片中的二维码
https://juejin.cn/post/7218506966545186877?

前端日志监控系统-上报SDK
https://juejin.cn/post/7218513153402224695?

el-input 过滤特殊字符或身份证脱敏
<el-input :value="input" @input='e => input = idCardValid (e)' placeholder="请输入内容"></el-input>


el-input 限制输入框只能输入数字 <el-input v-model.number="num"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input>

数组对象复杂求和

let arr1 = [
    {
        name: "张三",
        money: 100,
        children: [
            { name: "张欢欢", money: 200 },
            {
                name: "张乐乐",
                money: 100,
                children: [
                    { name: "张小欢", money: 300 },
                    { name: "张小乐", money: 400 },
                ],
            },
        ],
    },
    {
        name: "李四",
        money: 100,
        children: [
            { name: "李红红", money: 500 },
            { name: "李明明", money: 600 },
        ],
    },
];
let num = 0;
function fn(obj) {

    obj.forEach((item, index) => {
        if (item.children) {
            fn(item.children);
        } else {
            return num += item.money
        }
    })

}
fn(arr1)
console.log(num);


10万条数据前端怎么显示
https://juejin.cn/post/7216510811250884667
问题描述
问题考察点
使用express创建一个十万条数据的接口
点击按钮，发请求，获取数据，渲染到表格上
方案一: 直接渲染所有数据
方案二: 使用定时器分组分批分堆依次渲染（定时加载、分堆思想）
分组分批分堆函数
创建定时器去依次赋值渲染
方案三: 使用requestAnimationFrame替代定时器去做渲染
方案四: 搭配分页组件，前端进行分页（每页展示一堆，分堆思想）
方案五: 表格滚动触底加载（滚动到底，再加载一堆）
在el-table中使用el-table-infinite-scroll指令步骤
案例代码
方案六: 使用无限加载/虚拟列表进行展示
什么是虚拟列表？
写一个简单的虚拟列表
代码
使用vxetable插件实现虚拟列表
安装使用代码
方案七: 开启多线程Web Worker进行操作
方案八: 未雨绸缪，防患于未然
场景模拟
总结

使用 Vue 的插件 vue-cropperjs 来实现图片的裁剪


7. 场景题：进入一个页面白屏2分钟刷出来，从系统设计的角度说一下如何解决这个问题。
原因分析：
网络问题：网络连接不稳定或者延迟较高，导致网页无法加载。可以通过检查网络连接状态或者使用网络测试工具来判断是否是网络问题。
前端资源加载问题：可能是由于前端资源加载速度较慢，例如JS，CSS或者图片等文件下载时间过长，导致网页长时间无法加载，可以通过检查前端资源的加载速度或者使用工具分析前端性能，找出加载速度较慢的资源。
服务器问题：可能由于服务器响应时间长或者服务器发生故障，导致网页无法加载，可以通过检查服务器的负载情况或者监控工具来判断服务器是否正常；
DNS解析问题：可能是DNS解析问题，导致页面无法正常加载，可通过DNS查询工具来检查DNS解析是否正常。
JavaScript代码问题：可能是由于页面的JS代码出现了问题，导致页面无法正常加载，通过检查页面的JS代码或者使用调试工具来找出代码的问题。
解决方案：
减少文件加载体积，如html，js压缩等；
使用路由懒加载的方式，首次仅加载对应的js和css文件，减少首次请求的数量
采用骨架屏的方式，提高交互体验；
采用CDN的方式分布式部署静态页面；
使用SSR服务端预渲染；
采用缓存的方式，将一些资源进行缓存，减少服务器压力
搭建性能监控平台；
面试官希望我从一个前端系统的角度考虑这个问题的实现，比如网络方面，可以引申出网络的加载过程，Http协议的相关知识，DNS协议，状态码，请求之类的知识体系，同时能够引申出浏览器的相关原理，缓存相关知识，浏览器从输入一个域名到加载解析的全过程，服务器请求等；从JS层面可以说出如何前端的错误捕获，有哪些报错类型，如何避免类似的错误等等。我大概说了一下从哪些角度分析，解决问题，面试官说我没有一个完备的前端知识体系，仍然停留在解决问题的浅层次，我也知道自己的这些问题，但是没有想好怎么从一个系统的角度考虑这种问题，有大佬可以指点一下如何回答这类问题，怎么总结可以给个思路。

作者：铃铃六
链接：https://juejin.cn/post/7216147029230420005
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


场景题：如何实现给一个图片增加两层boder，紧密贴合，前提：在不更改dom结构；
https://juejin.cn/post/7216147029230420005#heading-20

pdf文件预览和下载探讨
https://juejin.cn/post/7214396380352774200

vue富文本编辑器vue-quill-editor的使用和介绍
https://juejin.cn/post/7212937418960289849

大文件分片上传前端实现思路
https://juejin.cn/post/7209825720385650747

3.介绍http1.0、http1.1和http2.0协议的区别？
http1.0：
    1. 无法复用连接：每次都要重新建立TCP
    2. 对头阻塞
http1.1：
    1. 长连接：connection： keep-alive    一个chrome域名下6个请求
    2. 管道化：基于长连接的基础上，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回。
    3. 缓存处理：cache-control，实现客户端缓存。
    4. 断点传输
http2.0：
    1. 二进制分帧：将传输的消息分为更小的二进制帧，每帧有自己的标识序号，即便被随意打乱也能在另一端正确组装。将同一个ID的stream的二进制进行组装成请求报文和响应报文。
    2. 多路复用：基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有队头阻塞问题，也无须遵守响应顺序
    3. 头部压缩：通过字典的形式，压缩头部信息，通过索引取值，减少头部数据量
    4. 服务器推送：http2.0 允许服务器直接推送消息给客户端，无须客户端明确的请求

	
网页全屏怎么实现？https://juejin.cn/post/6953139190569631751
document.documentElement.requestFullscreen()
1、网页全屏
function fullScreen() {
	if (!document.fullscreenElement &&
			!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
			if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
	}
}
2、取消网页全屏
function exitFullScreen() {
	if (document.exitFullscreen) {
			document.exitFullscreen();
	} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
	}
}

3、检测是否全屏
/**
 * 检查是否全屏
 * @return {[Boolean]} [是否全屏，为 true 没有全屏，false 全屏]
 */
function checkFullScreenValue () {
	return !document.fullscreenElement &&
			!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement
}

前端生成 excel 表格并下载
https://juejin.cn/post/6953139190569631751
/**
 * 前端下载表格
 * @param  {[Array]} data      [数据数组]
 * @param  {[String]} tableHead [表头字符串]
 * @return {[undefined]}           
 */
function downExcel (data, tableHead) {
  tableHead = tableHead
  data.forEach(item => {
    for (let i in item) {
      tableHead += `${item[i] + '\t'},`
    }
    tableHead += '\n'
  })
  const url = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(tableHead);
  //通过创建a标签实现
  const link = document.createElement("a");
  link.href = url;
  //对下载的文件命名
  link.download = "我的EXCEL表格.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// excel 数据
let tableData = [{
  name: '你好啊',
  time: 130000000000,
  pre: '127.130',
  source: '淘宝',
  otherTime: 1571276232000
}]
// excel 头部
let str = `用户名,时间,坐标,来源,授权时间\n`;
// 下载表格执行
downExcel(tableData, str)


handleExport() {
	this.http({
		...this.api.agent.otherSafetyExport,
		data: {
			request: {},
		},
	}).then((res) => {
		let content = this.toolClass.convertBase64ToBlob(
			res.data,
			"application/vnd.ms-excel",
			1024
		);
		const link = document.createElement("a");
		link.download = "其他安全检查数据.xls";
		link.href = URL.createObjectURL(content);
		link.click();
		URL.revokeObjectURL(link.href);
	});
}

exportData() {
	this.http({
	...this.api.allianceManage.instExport,
	responseType: "arraybuffer",
	data: this.params,
	showLoading: true,
})
	.then((res) => {
		const blob = new Blob([res], {
			type: "application/vnd.ms-excel;charset=utf-8",
		});
		const link = document.createElement("a");
		link.download = `${this.$route.meta.title}.xls`;
		link.href = URL.createObjectURL(blob);
		link.click();
		URL.revokeObjectURL(link.href);
	})
	.catch(() => { });
}


四十一、web worker
四十、JSBridge
https://juejin.cn/post/6953139050740088868#heading-94
四十二、webSocket

五天六万字，JavaScript 面试大全
https://juejin.cn/post/6982808443488829476

前端八股文 - 10. 数字汉化
写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。

trans(123456) // 十二万三千四百五十六
trans(100010001)// 一亿零一万零一
https://juejin.cn/post/7209089279141855288

下面是chatgpt
function trans(num) {
  // 数字对应的中文字符
  const CHN_NUMS = ['零','一','二','三','四','五','六','七','八','九'];
  const CHN_UNITS = ['', '十', '百', '千'];
  const CHN_BIGUNITS = ['', '万', '亿'];

  // 将一组数字转换成汉语
  function convertSection(section) {
    let str = '';
    let unitPos = 0;
    let zero = true;
    while (section > 0) {
      const digit = section % 10;
      if (digit === 0) {
        // 如果当前数字为0
        if (!zero) {
          // 如果前一个数字不为0，则在当前数字前面添加‘零’
          zero = true;
          str = CHN_NUMS[digit] + str;
        }
      } else {
        // 如果当前数字不为0
        zero = false;
        const unit = CHN_UNITS[unitPos];
        str = CHN_NUMS[digit] + unit + str;
      }
      unitPos++;
      section = Math.floor(section / 10);
    }
    return str;
  }

  // 对整数部分进行转换
  let integerPart = Math.floor(num);
  let decialPart = Math.round((num - integerPart) * 100);
  if (decialPart === 0) {
    return convertSection(integerPart);
  }
  return convertSection(integerPart) + '点' + convertSection(decialPart);
}


前端八股文 - 23. 设计一个转盘组件, 需要考虑什么, 需要和业务方协调好哪些技术细节? 前端如何防刷
https://juejin.cn/post/7216671329188446267

20道JS原理题助你面试一臂之力！
https://juejin.cn/post/6844903891591495693

前端面试题 - 30. Node开启子进程的方法有哪些?
前端面试题 - 31. node进程间如何通信?
https://juejin.cn/post/7216990794943316025
前端面试题 - 34. 前端安全都了解哪些?
https://juejin.cn/post/7217013944391680056
目录
XSS（跨站脚本攻击）
CSRF（跨站请求伪造）
SQL 注入
文件上传漏洞
点击劫持
其他

前端面试题 - 43. Webpack的原理, plugin loader 热更新等等
Webpack 是一个现代化的 JavaScript 应用程序的静态模块打包工具。其主要原理是将项目中的所有文件都视为模块，然后通过各种 Loader 和 Plugin 对这些模块进行处理和优化，
最终输出一个或多个打包后的文件，用于在浏览器中运行。

Webpack 的工作流程可以分为以下几步：

识别入口文件：Webpack 通过配置文件中的入口文件（Entry）来开始打包，一般情况下为一个 JavaScript 文件。
加载模块：Webpack 会根据入口文件中的依赖关系，递归地加载所有的模块。在加载模块的过程中，Webpack 使用各种 Loader 对模块进行处理和转换，
   例如将 ES6 代码转换成 ES5 代码，将 Sass 或 Less 文件转换成 CSS 文件等等。
生成打包文件：在加载和转换完所有模块后，Webpack 会将它们打包成一个或多个输出文件。在输出文件的生成过程中，Webpack 使用各种 Plugin 对代码进行优化和压缩，
例如代码分割、去重、压缩等等。最终生成的文件可以用于在浏览器中运行。
除了上述的基本原理之外，Webpack 还有以下特点：

Plugin：Webpack 的 Plugin 是一种扩展机制，可以用于在打包过程中执行各种任务，例如代码压缩、图片优化、自动生成 HTML 文件等等。
    Webpack 内置了许多常用的 Plugin，同时也支持自定义 Plugin。
Loader：Webpack 的 Loader 用于处理各种文件类型，例如 JavaScript、CSS、图片、字体等等。在处理文件的过程中，Loader 可以对文件进行转换、压缩、优化等等操作。
热更新：Webpack 支持热更新（Hot Module Replacement），可以在不刷新页面的情况下更新代码，提高开发效率。

前端面试题 - 46. https是如何保证安全的? 是如何保证不被中间人攻击的?
https://juejin.cn/post/7217704608034406460

前端业务开发如何使用好统计监控
https://juejin.cn/post/7220762847553568824? 
