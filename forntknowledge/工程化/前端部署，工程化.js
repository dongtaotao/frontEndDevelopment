GitHub Actions自动化部署前端项目指南  视频  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
https://zhuanlan.zhihu.com/p/433426848
https://www.bilibili.com/video/BV1BP4y1G7NR?spm_id_from=333.337.search-card.all.click

前端Vue项目打包部署实战教程 ========== 🔥🔥🔥🔥🔥🔥
https://zhuanlan.zhihu.com/p/431796992
https://www.bilibili.com/video/BV1eU4y1M7D7?spm_id_from=333.999.0.0
小猪课堂 https://space.bilibili.com/493520625/video?tid=0&page=1&keyword=&order=pubdate
解决刷新路由404问题
当我们切换路由后，然后在刷新页面，会出现404的情况。
这是因为我们vue项目采用了history的路由方式，至于原因主要是vue是单页面应用，细节部分大家可自行下来了解。
解决问题的办法：
（1）将路由模式改为hash
（2）修改nginx配置：
location / {
  try_files $uri $uri/ /index.html; ---解决页面刷新404问题
}

1.React从开始搭建到项目部署到服务器
https://blog.csdn.net/qq_21895821/article/details/90447437?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242.1

前端项目(react)部署到服务器
https://www.cnblogs.com/sk-3/p/14847196.html

GitLab CI 从入门到实践
https://mp.weixin.qq.com/s/q09cgDoFZWq2vInEE9VNSA

React项目部署在阿里云服务器ECS
https://zhuanlan.zhihu.com/p/107285294

react项目(windows本地)打包部署到服务器(阿里云ubuntu)
https://www.jianshu.com/p/1d5e49a8387e

vue/react/web前端项目部署到阿里云服务器_nginx_pm2流程及部署前的准备 ********** 
https://blog.csdn.net/Charissa2017/article/details/105886521

Vue项目打包部署到Nginx服务器步骤总结
https://blog.csdn.net/zhangwen809877665/article/details/120123123?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-5.no_search_link&spm=1001.2101.3001.4242.4

Vue项目打包部署总结
https://blog.csdn.net/sinat_17775997/article/details/121241280

前端工程化质量保障篇之什么是 CICD
https://juejin.cn/post/7031482488027349028

基于 Docker ( Gitlab、Gitlab Runner ) 搭建一整套自动化CI、CD流程，完成从代码提交到自动打包编译到自动部署运行
https://juejin.cn/post/7054453030506201118

macOS 平台有哪些好用的 SSH 客户端？
把项目代码传到服务器有好几个方法：
使用github，在本地把代码上传到github，在服务器端拉取github上的代码
mac用户使用系统终端自带的命令行
使用filezilla进行文件传送

Mac上最好用的SSH工具居然是它！
https://juejin.cn/post/6925590678638592008

npm run build
把build文件夹的内容丢到服务器上
配置nginx
打开浏览器
boom 空白页面

基于Docker+Nginx+Jenkins的前端自动化部署实践  ***************************
https://juejin.cn/post/6995588010934796302#heading-0


前端自动化：Node 命令行前端自动构建发布系统
https://juejin.cn/post/6844903609440665607

前端工程化之CICD那点破事
https://juejin.cn/post/6870325047324573710

//=======================================================

前端CI/CD,从零开始,彻底弄懂前端自动化构建和部署(CD篇)
https://segmentfault.com/a/1190000038472366

前端CI/CD,从零开始,彻底弄懂前端自动化构建和部署(1)
https://www.it610.com/article/1335456249340305408.htm


手把手教你用 Github Actions 部署前端项目
https://segmentfault.com/a/1190000039818913

手把手带你实践前端CI/CD（github action+docker）
https://juejin.cn/post/7022092455528890399


Gitlab-ci:从零开始的前端自动化部署 *************🔥
https://zhuanlan.zhihu.com/p/184936276?utm_source=com.tencent.wework
前端gitLab ci/cd搭建 https://www.cnblogs.com/ckAng/p/14890223.html

Gitlab CI/CD 自动化部署项目
https://www.bilibili.com/video/BV17S4y1F7Hi?p=4&spm_id_from=pageDriver

保姆级指南：jekins+docker构建部署react项目实战
https://juejin.cn/post/7049920990351982628?utm_source=gold_browser_extension

花椒前端基于 GitLab CI/CD 的自动化构建、发布实践
https://mp.weixin.qq.com/s/MbeW8UNZ1fPekWcaNqmsCQ


centos+jenkins+nginx+gitlab前端自动化部署全记录 https://fe.ecool.fun/articles/technology?pageNumber=1
https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247483730&idx=1&sn=5298f4841241767ca427bef4137b1680&chksm=c3194092f46ec9841051f2c5ea52688db07a50def205e997a6a6b0c1cf1b3c8517267857a156#rd


前端开发者应该知道的 Centos/Docker/Nginx/Node/Jenkins 操作(🍡 长文)
https://juejin.cn/post/6951684431597797389

Jenkins+github 前端自动化部署
https://segmentfault.com/a/1190000010200161 

下载：从Github下载代码，然后本地npm install
开发：npm run dev本地修改代码，测试
编译：npm run build使用 Webpack 进行编译，产出静态资源
上传：打开FTP软件，上传替换文件
测试：看看网站是否在线上工作正常
提交：将代码提交到 Github

总结一下有如下问题：

Docker
手动部署成本太高，改错别字都很麻烦
一台服务器由于时间累积导致环境变得“脏乱差”
重装系统成本太高，难以迁移

稍微有点麻烦，因此我打算这样改：

执行git push
自动检测到 github 有代码更新，自动打包出一个 Docker 镜像
CI 编译完成后，SSH 登录 VPS，删掉现有容器，用新镜像创建一个新容器

而这样做的好处是：
不必再手动 FTP 上传文件
不必手动维护服务器的 Nodejs 运行环境

链接：https://juejin.cn/post/6844903946234904583

SSH 登录命令
# -p 后面是指端口号
# root 表示服务器用户名
# 192.168.14.147 表示服务器IP
# 回车输入密码即可登录
ssh root@192.168.14.147 -p 22

React 中 setState 是一个宏任务还是微任务？https://juejin.cn/post/6992006476558499853?utm_source=gold_browser_extension
都不是

Egg.js是阿里旗下的一个基于nodejs和koa2的企业级应用框架，基于es6，es7 和nodejs。 


阿里云服务器ECS 购买域名搭建 ******** 
https://www.bilibili.com/video/BV12b4y18725?p=4
https://juejin.cn/post/7062263045342363679#heading-5

Travis-ci 是一个在线的CI/CD平台，是最简单的用来测试和部署你的软件的平台

CI-持续集成，它的作用是让产品快速迭代，同时保证比较高的质量

频繁的将代码集成主干（master）
快速发现错误
防止分支大幅度偏离主干

持续集成的前提是，merge之前，必须要通过自动化测试，只要有一个测试用例失败，就不能完成集成。
CD-持续交付、持续部署

频繁的将软件的新版本，交付给质量团队或用户
代码通过评审以后，自动部署到生产环境

持续部署的前提是能自动化完成测试，构建，部署等步骤

链接：https://juejin.cn/post/7083508488759934989

快来看看如何手动搭建自动化部署系统
https://www.bilibili.com/video/BV1Qy4y1L7Nj?spm_id_from=333.999.0.0


dockerfile  dockerfile是用来定制镜像的
docker-compose 构建容器 是一个管理多个容器的工具，比如可以解决容器之间的依赖关系，当在宿主机启动较多的容器时候，

【前端部署第零篇】你们公司有可能就是这样部署前端的，暨前端部署专栏大纲介绍
https://www.bilibili.com/video/BV1AY4y1671e?spm_id_from=333.999.0.0

我要当架构师 🔥🔥🔥
https://juejin.cn/column/7052907027638517773

利用Jenkins + nginx 实现前端项目自动构建与持续集成
https://segmentfault.com/a/1190000019212628

【Jenkins篇】向GitHub提交代码时触发Jenkins自动构建
https://blog.csdn.net/Number_oneEngineer/article/details/123919515

Jenkins自动化部署前端Vue项目
https://juejin.cn/post/7106121588499546148
Vue多项目部署如何实现？
https://juejin.cn/post/7105421780914798599

Jenkins + Github + Nginx 实现前端自动化
https://juejin.cn/post/7110208075214094350
使用 GitHub Actions 实现自动化部署
https://juejin.cn/post/7110472489007841311

《Docker》Docker完整部署Web应用（Vue+Node+MongoDB）
https://oliver.blog.csdn.net/article/details/121098382?spm=1001.2101.3001.6650.17&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-17-121098382-blog-123294948.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-17-121098382-blog-123294948.pc_relevant_aa&utm_relevant_index=25


前端项目发布 与 持续集成
前端项目发布
本质是把前端代码放到服务器的根目录
可以写shell脚本 scp命令
借助其他工具
持续集成
nginx 配合git hooks
docker 虚拟容器
jekens java项目采用


Web团队建设--自定义脚手架
https://juejin.cn/post/7156961879837900830