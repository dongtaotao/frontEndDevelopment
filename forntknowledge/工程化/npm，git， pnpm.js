npm和yarn的区别    
Yarn和npm命令对比
npm	yarn
npm install	yarn
npm install react --save	    yarn add react
npm uninstall react --save	  yarn remove react
npm install react --save-dev	yarn add react --dev
npm update --save	            yarn upgrade 

yarn --version
npm -version(或者 node -v)
2、安装淘宝镜像
  yarn config set registry 'https://registry.npm.taobao.org'
  npm install -g cnpm --registry=http://registry.npm.taobao.org
3、初始化某个项目
  yarn init
  npm init
4、默认安装项目依赖
  yarn install
  cnpm install
5、安装某个依赖，并且默认保存到package
  yarn add xxx
  cnpm install xxx --save
6、卸载某个项目依赖
  yarn remove xxx
  cnpm uninstall xxx --save
7、更新某个项目依赖
  yarn upgrade xxx
  cnpm update xxx --save
8、安装某个全局的项目依赖
  yarn global add xxx
  cnpm install xxx -g
9、安装某个特定版本号的项目依赖
  yarn add xxx@
  cnpm install xxx@1.2.33 --save
10、发布/登录/登出，一系列NPM Registry操作
  yarn publish/login/logout
  npm publish/login/logout
11、运行某个命令
  yarn run/test 
  npm run/test 

git revert 和 git reset 的区别
git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。
在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，
因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，
这些被回滚的commit应该还会被引入。
git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。


Git提交规范保护
https://juejin.cn/post/7034461103983689764

前端代码规范
https://juejin.cn/column/7044785295664873502
husky-hook，安装即可校验message是否符合规范
https://juejin.cn/post/7044484667893874719

Git commit message 规范
https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247484342&idx=2&sn=12f331dbd4b03baef771f75c9a426f07&chksm=c3194276f46ecb603b1c5b863ef2b683adf618d1ae1b231743e003fd0386387004e913a3ab8d#rd


git操作与分支管理规范  
https://juejin.cn/post/6892671601175691272


上传自己的npm包
https://www.bilibili.com/video/BV1Zg41117tS?p=10&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


pnpm包管理工具
pnpm add xxx
pnpm remove xxx
pnpm config get registry

monorepo 一种多个项目之间共享代码的方式

实际怎么用
1.创建一个空项目
2.在这个空项目中创建pnpm-workspace.yaml
```
package：
   - "projects/**"
```
3.在projects目录下创建子项目
4.pnpm add XXX

1.PNPM：更快速，节省磁盘空间的包管理工具
https://www.bilibili.com/video/BV1i34y1W7P5/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
----集中存储
----monorepo
----依赖隔离

2.monorepo
------解决重复代码的维护
------解决了需要私服腹部和管理npm
-------越来越收到钱盾啊的欢迎

为Monorepo 项目配置 gitlab ci
https://www.bilibili.com/video/BV1rP411u7Zn/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

三十分钟实战 pnpm monorepo ====== 🔥
https://www.bilibili.com/video/BV1vf4y1Z753/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


秒懂pnpm monorepo的使用
https://www.bilibili.com/video/BV1rA41197dt/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

超详细pnpm monorepo教程 🔥🔥
https://www.bilibili.com/video/BV1e84y1B7s3/?spm_id_from=autoNext&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

尤大都在用的monorepo，你都还没有听过？
https://www.bilibili.com/video/BV1i34y1W7P5/?spm_id_from=333.788.recommend_more_video.2&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

来聊一聊前端工程师会涉及的monorepo管理工具lerna
https://www.bilibili.com/video/BV1DP41177nj/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

在一台电脑上使用多个Git账号
https://juejin.cn/post/7214374960192962597?


lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目