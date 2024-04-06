Fiber架构 https://juejin.cn/post/7132641618267471879
原因：React v16 之前，每触发一次组件的更新，都会构建一棵新的虚拟 DOM 树，通过与上一次的虚拟 DOM 树进行 Diff 比较，
实现对真实 DOM 的定向更新。
这一整个过程是递归进行的（想想 React 应用的组织形式），而同步渲染的递归调用栈层次非常深（代码写得不好的情况下非常容易导致栈溢出），
只有最底层的调用返回
，整个渲染过程才会逐层返回。这个漫长的更新过程是不可中断的，同步渲染一旦开始，主线程（JavaScript 解析与执行）会一直被占用，
直到递归彻底完成，在此期间
浏览器没有办法处理任何渲染之外的事情（比如说响应用户事件）。这个问题对于大型的 React 应用来说是没办法接受的。

原理：Fiber 会将一个大的更新任务拆解为许多个小任务。每一个小任务执行完成后，渲染进程会把主线程交回去（释放），
看看有没有其它优先级更高的任务（用
户事件响应等）需要处理，如果有就执行高优先级任务，如果没有就继续执行其余的小任务。通过这样的方式，避免主线程被长时间的独占，
从而避免应用卡顿的问
题。这种可以被打断的渲染过程就是所谓的异步渲染。

特点：Fiber 带来了两个重要的特性：任务拆解 与 渲染过程可打断。关于可打断并不是说任意环节都能打断重新执行，可打断的时机也是有所区分的。
根据能
否被打断这一标准，React v16 的生命周期被划分为了 render 和 commit 两个阶段（commit 又被细分为 pre-commit 和 commit）。

链接：https://juejin.cn/post/7132641618267471879


「前端工程化」从0-1搭建react，ts脚手架（1.2w字超详细教程） 
https://juejin.cn/post/6919308174151385096


懒渲染的实现中判断组件是否出现在可视区域内是通过 react-visibility-observer 进行监听。

别再让时间切片成为你的知识盲区!
https://juejin.cn/post/7071914394799570975
问：什么是时间切片？
答：简单来讲就是将同步任务切成一个一个小片；在保证浏览器不掉帧的情况下去执行这一片一片的任务；最终达到既能够将这个大任务执行完毕，
又能够让浏览器有时间进行绘制；在用户的感知下，就是比较流畅的；   



缓存页面 React-keepalive-router 