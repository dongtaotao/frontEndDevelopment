vue 是怎么解析template的? template会变成什么? ---------------------------------
Vue.js 在运行时使用了一个模板编译器来解析 Vue 组件的模板。当你编写 Vue 组件时，你可以使用类似 HTML 的模板语法，
但这些模板最终会被 Vue 编译成一个渲染函数。
这个渲染函数是 JavaScript 代码，它返回一个虚拟 DOM 树，描述了组件的结构和状态。
这个虚拟 DOM 树然后会被 Vue.js 的运行时渲染系统用于生成实际的 DOM，并随着组件的状态的变化而更新。
模板编译器的主要任务是将模板字符串转换成可执行的 JavaScript 代码。这个过程包括以下步骤：

1.解析： 将模板字符串解析成抽象语法树（AST）表示，这是一个树状结构，描述了模板的语法结构。
2.优化： 对 AST 进行一些优化，例如标记静态节点，以便在后续更新中能够更高效地处理。
3.代码生成： 将优化后的 AST 转换成可执行的 JavaScript 代码。这个代码最终就是一个渲染函数，
接受组件的状态作为参数，返回一个虚拟 DOM 树。

这个渲染函数通常是在组件实例化时生成的，并且在组件的生命周期中被调用。
当组件的状态发生变化时，Vue.js 会重新调用这个渲染函数，得到新的虚拟 DOM 树，然后通过比较新旧虚拟 DOM 树的差异来更新实际的 DOM。
总体而言，模板编译的过程是将声明式的模板转换成能够在运行时执行的 JavaScript 代码，从而实现动态的、响应式的用户界面。
这个过程是 Vue.js 在运行时实现其声明式模板语法的核心。


如何解析指令? 模板变量? html标签---------------------------------
1.解析指令：

指令（Directives）： Vue.js 中的指令是带有 v- 前缀的特殊属性，用于在模板中添加响应式行为。例如，v-if 用于条件性地渲染一个元素，v-for 用于循环渲染元素列表。
解析过程： 模板编译器通过解析模板中的指令，将其转换为对应的 JavaScript 代码。这包括生成更新 DOM 的逻辑，以确保在数据变化时，视图能够正确地进行响应。
解析模板变量：

2.模板变量： 模板中可以包含变量，这些变量通常与组件的数据绑定在一起，形成响应式关系。在 Vue 模板中，你可以通过双花括号 {{ variable }} 插值语法来插入模板变量。
解析过程： 模板编译器会识别模板中的插值语法，将其转换为 JavaScript 代码，以便在运行时可以动态地获取和更新变量的值。
解析 HTML 标签：

3.HTML 标签： 模板中包含的 HTML 标签描述了组件的结构。Vue.js 的模板编译器会解析这些标签，将其转换为虚拟 DOM 树的节点表示。
解析过程： 模板编译器会遍历模板，解析 HTML 标签，并生成相应的虚拟 DOM 节点。这些节点包含了组件的结构信息，包括标签名、属性、事件处理等。
总体而言，模板编译的目标是将声明式的模板转换为可执行的 JavaScript 代码，以便在运行时创建虚拟 DOM 树并实现响应式的视图更新。这个过程涉及指令、模板变量和 HTML 标签的解析和转换。Vue.js 的运行时系统随后使用这些生成的代码来动态地渲染和更新用户界面。


用过vue 的render吗? render和template有什么关系
render 函数是 Vue.js 中的一个高级选项，用于手动定义一个组件的渲染函数。相比之下，template 选项是声明式地定义组件模板的一种方式。这两者之间存在一些关系，但它们也有一些区别。

template 选项：
声明式模板： 使用 template 选项，你可以以一种类似 HTML 的方式声明组件的模板。这是 Vue.js 的默认方式，也是大多数开发者首选的方式，因为它更直观易懂。
编译： Vue.js 在运行时会使用模板编译器将 template 中的模板字符串编译成渲染函数。这个过程是隐式的，无需开发者手动介入。
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  }
};
</script>
render 函数：
手动渲染： 使用 render 函数，你可以手动编写组件的渲染逻辑，以 JavaScript 代码的形式定义虚拟 DOM 结构。
灵活性： render 函数提供了更高的灵活性和编程能力，允许你在渲染过程中执行更多的逻辑。
JSX 支持： 如果你使用 JSX，render 函数更加自然，因为 JSX 本质上就是 JavaScript。
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  render(h) {
    return h('div', [h('p', this.message)]);
  }
};
</script>
关系：
template 和 render 都用于定义组件的模板，但是 template 更为声明式，而 render 更为编程式。
在许多情况下，使用 template 是更简单、更易读的选择。然而，当你需要更多的控制和灵活性时，可以使用 render 函数。
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  render(h) {
    return h('div', [h('p', this.message)]);
  }
};
</script>
总的来说，template 是一种方便的声明式模板语法，而 render 函数提供了更高级、更灵活的编程式模板定义方式。选择使用哪一种方式取决于你的项目需求和个人偏好。


实现一个批量请求函数, 能够限制并发量?---------------------------------




【代码题】 去除字符串中出现次数最少的字符，不改变原字符串的顺序。---------------------------------
“ababac” —— “ababa”
“aaabbbcceeff” —— “aaabbb”
function removeLeastFrequent(str) {
  // 统计每个字符出现的次数
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 找到出现次数最少的字符的次数
  const minCount = Math.min(...Object.values(charCount));

  // 构建新字符串，去除出现次数最少的字符
  const result = str.split('').filter(char => charCount[char] !== minCount).join('');

  return result;
}

// 示例用法
const result1 = removeLeastFrequent("ababac");
console.log(result1); // 输出 "ababa"

const result2 = removeLeastFrequent("aaabbbcceeff");
console.log(result2); // 输出 "aaabbb"

【代码题】 写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。---------------------------------

trans(123456) —— 十二万三千四百五十六
trans（100010001）—— 一亿零一万零一
function trans(num) {
  const units = ['', '十', '百', '千'];
  const digits = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  const sectionToChinese = (section) => {
    const chineseDigits = [];
    let zeroFlag = false;

    for (let i = 0; i < 4; i++) {
      const digit = section % 10;
      if (digit === 0) {
        if (!zeroFlag && chineseDigits.length > 0) {
          zeroFlag = true;
          chineseDigits.unshift(digits[digit]);
        }
      } else {
        zeroFlag = false;
        chineseDigits.unshift(units[i]);
        chineseDigits.unshift(digits[digit]);
      }
      section = Math.floor(section / 10);
    }

    return chineseDigits.join('');
  };

  const sections = [];
  while (num > 0) {
    const section = num % 10000;
    sections.unshift(sectionToChinese(section));
    num = Math.floor(num / 10000);
  }

  const chineseUnits = ['', '万', '亿'];
  let result = sections.join('');

  if (result === '') {
    result = '零';
  } else {
    result += chineseUnits[sections.length - 1];
  }

  return result;
}

// 示例用法
console.log(trans(123456)); // 输出 "十二万三千四百五十六"
console.log(trans(100010001)); // 输出 "一亿零一万零一"



Node的日志和负载均衡怎么做的---------------------------------
在 Node.js 中，日志记录（logging）和负载均衡（load balancing）是两个常见的主题，它们通常与应用程序的可维护性、性能和可伸缩性相关。下面分别介绍一下在 Node.js 中如何处理这两个方面。

1. 日志记录 (Logging):
在 Node.js 中进行日志记录可以使用不同的库，其中一些常见的包括 winston、morgan 等。下面是一个使用 winston 的简单示例：

首先，你需要安装 winston：

bash
npm install winston
然后，在你的 Node.js 应用程序中，可以这样使用：

javascript
const winston = require('winston');

// 创建一个日志记录器
const logger = winston.createLogger({
  level: 'info', // 日志级别
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(), // 输出到控制台
    new winston.transports.File({ filename: 'app.log' }) // 输出到文件
  ],
});

// 使用日志记录器
logger.log('info', 'This is an informational message.');
logger.log('error', 'This is an error message.');
以上示例创建了一个日志记录器，配置了输出到控制台和文件，然后使用不同级别的日志记录方法来记录信息和错误。

2. 负载均衡 (Load Balancing):
负载均衡是为了分散网络流量，提高系统的性能和可用性。在 Node.js 中，可以使用各种工具和技术来实现负载均衡，其中一种常见的方法是通过反向代理。

使用反向代理实现负载均衡:
你可以使用反向代理工具（例如 Nginx 或 Apache）来在多个 Node.js 服务器之间分发请求。以下是一个简单的 Nginx 配置示例：

http {
  upstream nodejs_servers {
    server 127.0.0.1:3000;  # 你的第一个 Node.js 服务器
    server 127.0.0.1:3001;  # 你的第二个 Node.js 服务器
    # 可以继续添加更多服务器...
  }

  server {
    listen 80;

    location / {
      proxy_pass http://nodejs_servers;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
  }
}
在上面的配置中，Nginx 将请求代理到多个 Node.js 服务器上，实现了负载均衡。

总的来说，这两个方面都是在构建 Node.js 应用程序时需要考虑的重要因素，具体的实现方式可能因应用程序的需求和架构而有所不同。



async/await, generator, promise这三者的关联和区别是什么?---------------------------------
async/await、generator 和 Promise 是 JavaScript 中用于处理异步操作的三种不同的机制，它们之间有关联但也有一些区别。

1.Promise:


2.Promise 是一种用于处理异步操作的对象。
3.它有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。
4.Promise 可以链式调用 .then() 和 .catch() 方法来处理异步操作的结果或错误。
5.Promise 通常用于处理单个异步操作。

   const promise = new Promise((resolve, reject) =&gt; {
     // 异步操作
     if (/* 操作成功 */) {
       resolve(result);
     } else {
       reject(error);
     }
   });

   promise.then(result =&gt; {
     // 处理成功结果
   }).catch(error =&gt; {
     // 处理错误
   });


6.Async/Await:


7.async 函数是用于处理异步操作的函数，它返回一个 Promise。
8.await 关键字只能在 async 函数中使用，用于等待一个 Promise 对象的解决或拒绝，并返回结果。
9.async/await 提供了一种更直观、更同步化的写法，避免了回调地狱（callback hell）。

   async function example() {
     try {
       const result = await someAsyncFunction();
       // 处理成功结果
     } catch (error) {
       // 处理错误
     }
   }


10.Generator:


11.Generator 函数是一种特殊的函数，通过 function* 关键字定义，可以通过 yield 暂停和恢复函数的执行。
12.每次调用 next() 方法都会执行到下一个 yield 表达式。
13.Generator 函数与 Promise 结合使用可以实现更灵活的异步流程控制。

   function* example() {
     try {
       const result = yield someAsyncFunction();
       // 处理成功结果
     } catch (error) {
       // 处理错误
     }
   }

   const generator = example();
   const { value, done } = generator.next();

区别和关联:

14.Promise 是一种基础的异步操作机制，async/await 是基于 Promise 的语法糖，使异步代码更易读。
15.Generator 函数是一种更底层的异步机制，可以手动控制函数的执行流程，也可以通过库或框架结合 Promise 使用。
16.async/await 是一种更高层次的抽象，更易用，更接近同步代码的写法。
17.async/await 只能用于 async 函数内部，而 Generator 可以在任何函数中使用。
18.async/await 自带错误处理机制，使用 try/catch 来处理异步操作的错误；而 Promise 和 Generator 需要手动处理错误。
19.在实际开发中，async/await 更为常用，但 Promise 和 Generator 仍然有它们在某些场景下的用武之地。


Node是怎么部署的? pm2守护进程的原理?---------------------------------
Node开启子进程的方法有哪些?
进程间如何通信?
Node.js 的部署方式：
Node.js 应用程序可以通过以下几种方式进行部署：

手动部署：

将应用程序的代码和依赖项上传到服务器，然后在服务器上运行 Node.js 应用。
缺点是手动管理和更新应用，不够灵活。
使用容器（Docker）：

将应用程序和其依赖项打包成容器，然后在支持 Docker 的环境中运行。
提供了环境的隔离和一致性，方便部署和扩展。
使用服务器less架构：

使用无服务器（Serverless）架构，如 AWS Lambda、Google Cloud Functions 或 Azure Functions。
将应用程序以函数的形式运行，无需关心服务器的管理。
使用部署工具：

使用部署工具，如 PM2、Forever 等，它们可以帮助管理 Node.js 进程、日志和应用程序的生命周期。
PM2 守护进程的原理：
PM2 是一个流行的 Node.js 进程管理工具，它的原理主要包括以下几个方面：

进程管理：

PM2 负责启动、停止和重启 Node.js 进程。它可以监控应用程序的运行状态，确保进程一直处于运行状态。
日志管理：

PM2 提供了日志功能，将应用程序的输出保存到日志文件中，方便排查问题和监控应用程序的运行。
集群模式：

PM2 支持集群模式，可以启动多个 Node.js 进程来处理更多的请求，提高应用程序的并发性能。
进程守护：

PM2 会在进程意外退出时重新启动它，保证应用程序的稳定性。
Node.js 开启子进程的方法：
在 Node.js 中，可以通过 child_process 模块来开启子进程。常用的方法有：

spawn 方法：

用于启动一个新的进程，并通过管道连接标准输入、输出和错误流。
javascript
const { spawn } = require('child_process');
const child = spawn('command', ['arg1', 'arg2']);
exec 方法：

用于执行一个命令，并缓存输出结果。
javascript
const { exec } = require('child_process');
exec('command', (error, stdout, stderr) => {
  // 处理输出
});
fork 方法：

用于创建一个新的 Node.js 进程，并执行指定的模块。父子进程之间可以通过消息进行通信。
javascript
const { fork } = require('child_process');
const child = fork('child.js');
进程间如何通信：
在 Node.js 中，进程间通信可以通过以下几种方式实现：

共享内存：

使用共享内存的方式，多个进程可以访问同一块内存区域。Node.js 中可以使用 Buffer 对象来实现共享内存。
消息传递：

使用消息传递机制，父子进程或不同进程之间可以通过事件、Socket 或 IPC（Inter-Process Communication）进行通信。child_process 模块的 fork 方法就是通过消息传递来实现父子进程通信。
Socket 通信：

使用网络 Socket 进行通信，可以在同一台机器上的不同进程之间或者不同机器上的进程之间进行通信。
IPC（Inter-Process Communication）：

使用 IPC 通信，可以通过命名管道、套接字等机制在进程之间传递消息。
选择通信方式取决于应用程序的需求和场景，例如，如果是父子进程之间的通信，可以使用 fork 方法；如果是不同机器上的进程通信，可以选择网络 Socket 通信等。



csp是为了解决什么问题的?=============================================

CSP（Content Security Policy）是为了解决网络安全中的一些问题而设计的标准，主要目的是减轻和防止网站遭受恶意攻击，特别是那些涉及到跨站脚本攻击（XSS）的攻击。

主要问题和解决方案如下：

XSS 攻击：

问题： 跨站脚本攻击是一种安全漏洞，攻击者通过在网页中注入恶意脚本，盗取用户的信息或执行一些危险的操作。
解决方案： CSP 允许网站管理员通过配置 HTTP 头来明确指定浏览器应该加载哪些资源，从而减少或阻止恶意脚本的执行。通过限制允许加载的资源和脚本的来源，CSP 有效地减少了 XSS 攻击的风险。
数据窃取：

问题： 恶意脚本可以通过发送用户数据到恶意站点，实现数据窃取。
解决方案： CSP 通过限制允许发送数据的目标来防止数据窃取。网站可以配置 CSP 策略，只允许与特定域的连接，从而防止数据流向不受信任的目标。
点击劫持：

问题： 点击劫持是一种攻击，攻击者通过将透明的 iframe 放在一个看似无害的按钮或链接上，引导用户执行不经意的操作。
解决方案： CSP 提供了 frame-ancestors 指令，允许网站管理员控制哪些网站可以通过 iframe 嵌入自己的内容，从而防止点击劫持攻击。
通过使用 CSP，网站管理员可以在客户端浏览器中实施一系列安全策略，限制加载的资源和执行的脚本，从而提高网站的安全性，防范一系列潜在的安全威胁。需要注意的是，CSP 需要被支持和启用，而不是所有浏览器都支持 CSP 的所有功能。



async await的原理是什么?===========================================
async/await 是 ECMAScript 2017 (ES8) 中引入的一种异步编程的语法糖，它的原理涉及到两个关键概念：async 函数和 Promise。

1. async 函数的原理：
async 函数本质上是 Generator 函数的语法糖，它会返回一个 Promise 对象。
当一个函数被声明为 async 时，它会隐式地返回一个 Promise，并且函数内部的 return 语句的值会被包装成一个解决的 Promise。
下面是一个简化的例子，展示了 async 函数的原理：

javascript
async function example() {
  return 42;
}

// 等价于
function example() {
  return Promise.resolve(42);
}
2. await 的原理：
await 关键字只能在 async 函数内部使用，它用于等待一个 Promise 对象的解决。
当在 async 函数内部使用 await 关键字时，它会阻塞函数的执行，等待 Promise 对象的状态变为 resolved（解决）或 rejected（拒绝）。
如果 await 后面的表达式是一个 Promise，await 会暂停函数的执行，直到 Promise 解决，并将解决的值返回；如果是一个非 Promise 的值，await 会将其转换为已解决的 Promise。
下面是一个简化的例子，展示了 await 的原理：

javascript
async function example() {
  const result = await someAsyncFunction();
  // 等待 someAsyncFunction 的解决，然后继续执行下面的代码
  console.log(result);
}

// 等价于
function example() {
  return someAsyncFunction().then(result => {
    console.log(result);
  });
}
总体而言，async/await 的原理是基于 Promise 的机制，通过使异步代码看起来更像同步代码的方式，提高了可读性和维护性，同时保留了 Promise 的异步非阻塞的特性。它使得异步编程更加直观和易于理解。




webscoket的连接原理==============================================
WebSocket（通常简称为 WS）是一种在单个 TCP 连接上提供全双工通信的协议，它是为了解决传统的 HTTP 协议无法实现实时双向通信的问题而设计的。以下是 WebSocket 连接的基本原理：

握手过程（Handshake）：

WebSocket 连接的建立始于客户端发起一个 HTTP 请求，该请求包含了对 WebSocket 协议的支持。这个请求被称为握手请求。
服务器接收到握手请求后，如果支持 WebSocket 协议，会回复一个包含特定标识的 HTTP 响应，表示协议升级。这个过程就是握手。
协议升级：

握手完成后，连接从 HTTP 协议升级到 WebSocket 协议。这意味着从此时起，通信将遵循 WebSocket 协议的规范。
WebSocket 使用的默认端口是 80（ws）和 443（wss，通过 TLS/SSL 加密的 WebSocket），但可以使用其他端口。
全双工通信：

WebSocket 连接建立后，客户端和服务器之间可以通过同一个连接进行双向通信。这意味着无论是客户端还是服务器，都可以主动发送消息给对方。
通信是基于事件驱动的，每一方可以监听消息事件，并在接收到消息时进行处理。
帧（Frames）：

WebSocket 数据以帧的形式传输。帧是 WebSocket 协议中最小的数据单元，可以包含文本、二进制数据或控制信息。
控制帧用于传输协议级别的信息，例如关闭连接的请求。
保持连接状态：

WebSocket 连接是持久的，它可以保持长时间的打开状态，而不需要像传统的 HTTP 连接那样在每次通信后关闭连接。
这种长连接的特性使得 WebSocket 适用于实时应用，如聊天应用、实时通知等。
总的来说，WebSocket 连接的原理在于通过握手建立一个持久的 TCP 连接，然后通过这个连接实现双向的、实时的通信。这使得 WebSocket 成为一种有效的实时通信解决方案，相比于传统的 HTTP 连接，WebSocket 在性能和效率上有着显著的优势。


Electron架构
Electron 是一个开源的桌面应用程序开发框架，它允许开发者使用 HTML、CSS 和 JavaScript 构建跨平台的桌面应用程序。以下是 Electron 架构的主要组成部分：

主进程（Main Process）：

主进程是 Electron 应用程序的核心。它运行 Node.js，并负责创建和控制应用程序的各种窗口及其对应的渲染进程。
主进程负责管理应用程序的生命周期、处理系统事件、执行操作系统相关的任务（如菜单、对话框等）以及与底层系统进行交互。
渲染进程（Renderer Process）：

渲染进程是由主进程创建的，每个窗口对应一个独立的渲染进程。渲染进程运行着一个基于 Chromium 的浏览器实例，用于呈现和渲染用户界面。
这些渲染进程使用 HTML、CSS 和 JavaScript 渲染应用程序的用户界面，并处理与界面相关的交互和事件。
主进程和渲染进程之间的通信（Inter-Process Communication，IPC）：

主进程和渲染进程之间通过 IPC 机制进行通信。Electron 提供了多种方式进行进程间通信，如 ipcMain 和 ipcRenderer 模块，允许它们之间进行数据传输和消息交换。
Node.js API：

Electron 提供了许多 Node.js API，使开发者可以在主进程中使用 Node.js 的各种模块和功能，包括文件系统、网络、操作系统等。这使得 Electron 应用能够获得更多的本地系统功能的支持。
Chromium 基础：

Electron 使用 Chromium 作为其核心渲染引擎，这为开发者提供了先进的 Web 技术支持，使得开发的桌面应用具有与现代 Web 应用相似的功能和体验。
总体来说，Electron 的架构基于主进程和多个独立的渲染进程，利用 Chromium 的浏览器内核来渲染用户界面。开发者可以借助 Node.js API 访问底层系统资源，并通过 IPC 机制在主进程和渲染进程之间进行通信，从而构建功能强大、跨平台的桌面应用程序。



keep-alive的实现原理是什么
与keep-alive相关的生命周期函数是什么，什么场景下会进行使用
keep-alive的常用属性有哪些


参考答案：
keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。
keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。另外它还提供了 max 属性，通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。
受keep-alive的影响，其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是 activated 和 deactivated，它们分别在组件激活和失活时触发。第一次 activated 触发是在 mounted 之后
在具体的实现上，keep-alive 在内部维护了一个 key 数组和一个缓存对象
kotlin复制代码// keep-alive 内部的声明周期函数

created () {

    this.cache = Object.create(null)

    this.keys = []

}

key 数组记录目前缓存的组件 key 值，如果组件没有指定 key 值，则会为其自动生成一个唯一的 key 值
cache 对象以 key 值为键，vnode 为值，用于缓存组件对应的虚拟 DOM
在 keep-alive 的渲染函数中，其基本逻辑是判断当前渲染的 vnode 是否有对应的缓存，如果有，从缓存中读取到对应的组件实例；如果没有则将其缓存。
当缓存数量超过 max 数值时，keep-alive 会移除掉 key 数组的第一个元素。
链接：https://juejin.cn/post/7208005892313579576

29. 说一下你知道的 vue 修饰符都有哪些？
参考答案：
在 vue 中修饰符可以分为 3 类：

事件修饰符
按键修饰符
表单修饰符

事件修饰符
在事件处理程序中调用 event.preventDefault 或 event.stopPropagation 方法是非常常见的需求。尽管可以在 methods 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题，vue 为 v-on 提供了事件修饰符。通过由点 . 表示的指令后缀来调用修饰符。
常见的事件修饰符如下：

.stop：阻止冒泡。
.prevent：阻止默认事件。
.capture：使用事件捕获模式。
.self：只在当前元素本身触发。
.once：只触发一次。
.passive：默认行为将会立即触发。

按键修饰符
除了事件修饰符以外，在 vue 中还提供了有鼠标修饰符，键值修饰符，系统修饰符等功能。

.left：左键
.right：右键
.middle：滚轮
.enter：回车
.tab：制表键
.delete：捕获 “删除” 和 “退格” 键
.esc：返回
.space：空格
.up：上
.down：下
.left：左
.right：右
.ctrl：ctrl 键
.alt：alt 键
.shift：shift 键
.meta：meta 键

表单修饰符
vue 同样也为表单控件也提供了修饰符，常见的有 .lazy、.number 和 .trim。

.lazy：在文本框失去焦点时才会渲染
.number：将文本框中所输入的内容转换为number类型
.trim：可以自动过滤输入首尾的空格
链接：https://juejin.cn/post/7275943802934149160



14. 如何用 CSS 实现一个三角形
div{
  width: 0;
  height: 0;
  border: 10px solid red;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  }
  
  链接：https://juejin.cn/post/7098689890933538853

  柯里化
  柯里化，英语：Currying，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
  https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/cghxkr
  // 普通的add函数
function add(x, y) {
	return x + y
}

// currying后
function curryingAdd(x) {
  return function (y) {
  	return x + y
  }
}

curryingAdd(1)(2)   // 3


Vuex
https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/xos4ss#mdIpu
Vuex是个状态管理器。
它Vuex通过createStore创建了一个数据中心，然后通过发布-订阅模式来让订阅者监听到数据改变。
Vuex的store注入 vue的实例组件的方式，是通过vue的 mixin机制，借助vue组件的生命周期钩子beforeCreate 完成的。这样Vue组件就能通过this.$store获取到store了。
Vuex使用vue中的reactive方法将state设置为响应式，这样组件就可以通过computed来监听状态的改变了。


代码分割
https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/tgc3uo#wTfix
代码分割的原理

1.  分片打包的原理
import动态加载的功能是webpack实现的，通过一些插件，在编译时候把动态import的模块单独打包，再在webpack运行时代码中将之拉取并执行。
  动态import实际是返回一个Promise，该Promise成功时候会resolve该模块。因此使用异步加载的模块都需要在.then方法中获取该模块后再使用。
React.lazy是接受一个function，然后调用该function返回的一个Promise，在Promise的resolve中取到该组件进行渲染。



前端预渲染
https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/vm2zk8


redux-persist 