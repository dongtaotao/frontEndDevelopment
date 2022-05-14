给前端的docker 10分钟真 · 快速入门指南 ----------------------------------------------------- *******🔥🔥🔥重要
https://juejin.cn/post/7050304120082661407
实战：部署vue2和vue3项目
安装好docker后，我们现在来实战了，搓搓手
我们要让电脑同时运行nodejs10和nodejs12多个版本

一条龙！CI / CD 、打造小团队前端工程化服务 🔥🔥🔥
https://juejin.cn/post/6867861517603438605

https://juejin.cn/post/6844903830979608584
Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器

https://juejin.cn/post/6954604160327090212
Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。
Docker是什么
==》Docker是一个开源的应用容器引擎
==》Docker,其实就是可以打包程序和运行环境，把环境和程序一起发布给容器，当你需要发布程序时，你可以使用Docker
==》将运行环境一起发布，其他人拿到你的程序后可以直接运行，避免出现一次编译到处调试的尴尬局面。
==》Docker的出现主要就是为了解决：“在我的机器上是正常的，为什么到你的机器上就不正常了的问题”

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，
然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

Docker的应用场景
Web 应用的自动化打包和发布。
自动化测试和持续集成、发布。
在服务型环境中部署和调整数据库或其他的后台应用。
从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。

https://juejin.cn/post/6951684431597797389
Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，
然后发布到任何流行的 Linux 或 Windows 机器上

Dockerfile构建镜像
Dockerfile 是一个文本格式的配 文件，用户可以使用 Dockerfile 来快速创建自定义的镜像。
Dockerfile 由一行行行命令语句组成，并且支持以＃开头的注释行.

前端工程师不可不知的Nginx知识
https://juejin.cn/post/6864085814571335694
前端开发者必备的Nginx知识
https://juejin.cn/post/6844903793918738440

01 Nginx作用
功能
- 静态资源服务器
- 负载均衡
- 反向代理
- 配置Https设置
- 跨域
- 动静分离 为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。
- 配置gzip
- 请求限制   对于大流量恶意的访问，会造成带宽的浪费，给服务器增加压力。往往对于同一 IP 的连接数以及并发数进行限制。
- 访问控制
- 适配 PC 或移动设备 根据用户设备不同返回不同样式的站点，以前经常使用的是纯前端的自适应布局，但无论是复杂性和易用性上面还是不如分开编写的好，
      比如我们常见的淘宝、京东......这些大型网站就都没有采用自适应，
      而是用分开制作的方式，根据用户请求的 user-agent 来判断是返回 PC 还是 H5 站点。
- 防盗链 防盗链的原理就是根据请求头中 referer 得到网页来源，从而实现访问控制。这样可以防止网站资源被非法盗用，从而保证信息安全，
      减少带宽损耗，减轻服务器压力。
常见配置
- IP白名单
- 移动端PC端识别
- 配置跨域请求
- 配置gzip
- 图片防盗链
- 静态服务
- 请求过滤
- 配置图片、字体等静态文件缓存
- HTTP 请求转发到 HTTPS

如何使用
- 配置nginx.config
- 检测语法

Nginx 从入门到实践，万字详解！ ***********************
https://juejin.cn/post/6844904144235413512#heading-27

常见3种方法来实现在一台服务器上使用nginx部署多个前端项目的方法。
https://juejin.cn/post/6844904183879958541  使用nginx部署多个前端项目  https://blog.csdn.net/qq_25460159/article/details/112947177

https://blog.csdn.net/sinat_17775997/article/details/123240143
基于域名配置
基于端口配置
基于location配置

https://www.runoob.com/linux/linux-file-content-manage.html 
ls（英文全拼：list files）: 列出目录及文件名
cd（英文全拼：change directory）：切换目录
pwd（英文全拼：print work directory）：显示目前的目录
mkdir（英文全拼：make directory）：创建一个新的目录
rmdir（英文全拼：remove directory）：删除一个空的目录
cp（英文全拼：copy file）: 复制文件或目录
rm（英文全拼：remove）: 删除文件或目录
mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称

cd [相对路径或绝对路径]
#使用 mkdir 命令创建 runoob 目录
[root@www ~]# mkdir runoob

#使用绝对路径切换到 runoob 目录
[root@www ~]# cd /root/runoob/

#使用相对路径切换到 runoob 目录
[root@www ~]# cd ./runoob/

# 表示回到自己的家目录，亦即是 /root 这个目录
[root@www runoob]# cd ~

# 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；
[root@www ~]# cd ..

https://www.runoob.com/linux/linux-vim.html

vi/vim 使用实例
使用 vi/vim 进入一般模式
如果你想要使用 vi 来建立一个名为 runoob.txt 的文件时，你可以这样做：

$ vim runoob.txt
直接输入 vi 文件名 就能够进入 vi 的一般模式了。请注意，记得 vi 后面一定要加文件名，不管该文件存在与否！
按下 i 进入输入模式(也称为编辑模式)，开始编辑文字
在一般模式之中，只要按下 i, o, a 等字符就可以进入输入模式了！

在编辑模式当中，你可以发现在左下角状态栏中会出现 –INSERT- 的字样，那就是可以输入任意字符的提示。

这个时候，键盘上除了 Esc 这个按键之外，其他的按键都可以视作为一般的输入按钮了，所以你可以进行任何的编辑。

在一般模式中按下 :wq 储存后离开 vi
OK，我们要存档了，存盘并离开的指令很简单，输入 :wq 即可保存离开！


如何使用 docker 部署前端
https://q.shanyue.tech/engineering/749.html#%E4%BD%BF%E7%94%A8-docker-%E9%83%A8%E7%BD%B2%E5%89%8D%E7%AB%AF


前端为什么要用 Docker
这里只讨论使用 Docker 给前端带来的优势，偏运维相关的比如启动速度快，资源利用率高等略过，有兴趣的同学可以上官网看看文档。

提供一致的运行环境。在任何环境下使用 Docker 构建的镜像的运行环境都是确定的，Docker 给应用提供了一个从开发到上线均一致的环境。
比如 Node.js 项目在不同版本下性能表现不一致，开发环境用的是 Node.js 6，UAT 环境用了 Node.js 10，那么很可能接口的压测结果不一致。
更轻松的迁移。由于 Docker 确保了运行环境的一致性，使得应用的迁移更加容易。可以很轻易将在一个平台上运行的应用，迁移到另一个平台上，
而不用担心运行环境的变化导致应用无法正常运行。比如接到任务说下周要加一个分区，或者客户要求部署私有云，可以很放心的说镜像拿走，而不用担心环境问题。
持续交付和部署。代码从开发到最终在生产环境上的部署，需要经过很多中间环境，通过定制应用镜像来实现持续集成、持续交付，非常有助于降低构
建持续交付流程的复杂程度。在中小型公司可以考虑直接使用 GitLab CI 搭建持续集成环境。
快速部署、回滚。得益于 Docker 使用的分层存储和镜像技术，使得扩展镜像变得非常简单。可以预先把程序需要的依赖，静态资源等在构建过程中添加到镜像，
在需要的时候启动该容器实现快速部署、回滚、止血。比如当出现线上事故需要回滚时，传统做法是触发某些自动化工具去拉代码装依赖打包最后部署，
一旦某个环节出了问题，
譬如网络被墙了导致依赖拉不下来，构建失败等等，小事故可能会演变为 P0 事故。
使用 Docker 构建 Web 前端项目
Web 前端项目的部署上线一般会经历 babel 编译，webpack 构建等过程，最终将打包后的静态资源放在静态资源服务器上。

docker 是一个容器化的平台。它是最近几年流行的一项技术，用于构建和发布应用程序。
前端为什么要用 docker？
https://juejin.cn/post/6917975471363719182
1. 部署高效，且利于项目迁移
2. 标准化了运行环境，部署更加稳定可靠
3. 更易于持续交付和部署(CI/CD)
4. 运维更加高效，秒级回滚

docker常用命令 https://cloud.tencent.com/developer/article/1772136

https://zhuanlan.zhihu.com/p/80473092


https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP
Docker 是什么
Docker 是一个应用打包、分发、部署的工具


小白都能看懂的前端部署（docker+nginx+jenkins）
https://juejin.cn/post/6844904111826010125#heading-7

从0到1，打造小团队前端工程化服务（1/3）
https://juejin.cn/post/6870371104335069192


Docker+Nginx+Jenkins实现前端自动化部署
https://juejin.cn/post/6869736425953165319


=============== 前端Docker 之 --- 一气呵成 https://juejin.cn/post/6868201557436055565 ************************ &&&&&&&&
我们总结下都发生了什么：

写一个 Dockerfile
使用docker image build来将Dockerfile打包成镜像
使用docker container create来根据镜像创建一个容器
使用docker container start来启动一个创建好的容器

链接：https://juejin.cn/post/6868201557436055565
在没迁移 Docker 之前，若我想更新线上网站中内容时，需要：

本地npm run build打包产出静态文件
手动通过 FTP 上传到服务器
git push更新 Github 源码

稍微有点麻烦，因此我打算这样改：

执行git push
自动检测到 github 有代码更新，自动打包出一个 Docker 镜像
CI 编译完成后，SSH 登录 VPS，删掉现有容器，用新镜像创建一个新容器

而这样做的好处是：

不必再手动 FTP 上传文件
当我进行修改错别字这样的简单操作时，可以免测。改完直接git push，而不必本地npm run build

docker-compose.yml
文件配置及创建容器 

通过docker管理jenkins资源
通过jenkins创建docker镜像


五分钟看懂 Nginx 负载均衡
https://mp.weixin.qq.com/s/u-XbBwGxHrhJGiMiiqz26w
谁说前端不需要懂-Nginx反向代理与负载均衡
https://mp.weixin.qq.com/s/o2Us4Zj6DO2NHGQVaHIa1A