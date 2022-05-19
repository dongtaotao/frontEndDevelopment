
面试官：vue项目本地开发完成后部署到服务器后报404是什么原因呢？
https://vue3js.cn/interview/vue/404.html#%E4%B8%80%E3%80%81%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2
为什么hash模式下没有问题
router hash 模式我们都知道是用符号#表示的，如 website.com/#/login, hash 的值为 #/login
它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 hash 不会重新加载页面
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 website.com/#/login 只有 website.com 会被包含在请求中 ，因此对于服务端来说，
即使没有配置location，也不会返回404错误


H5如何实现唤起APP
URL Scheme（通用）
Universal Link （iOS）
App Link、Chrome Intents（android）
https://juejin.cn/post/7097784616961966094

手把手教前端从0到1通过 Node + Express 开发简易接口，项目开发+部署服务器
https://juejin.cn/post/7097831496550973454

聊一聊桥接（JSBridge）的原理
https://juejin.cn/post/6940242236701409287

Vue与React的区别和优势对比
https://www.jb51.net/article/202405.htm

扫码登录的原理你真的了解吗？
https://juejin.cn/post/7089575174537740296

如何做Antd Upload单个图片的校验和上传？
https://juejin.cn/post/6977266040803852301#heading-7