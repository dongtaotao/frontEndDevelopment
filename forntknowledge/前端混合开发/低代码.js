低代码开发
https://www.bilibili.com/video/BV1YM4y1L7xJ?spm_id_from=333.337.search-card.all.click


vue实现一个低代码平台(上篇) 🔥 
https://www.bilibili.com/video/BV1w64y1676v?p=7        
vue实现一个低代码平台(下篇)
https://www.bilibili.com/video/BV1bg41177de?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


从零实现一个React可视化搭建组件库
https://juejin.cn/post/7208745710764867640?
项目管理工具： lerna
构建工具：
编辑器： vite
自定义组件库: rollup
前端框架/库: ts + react + redux-toolkit + redux-persist + react-router + react-dnd + antd
代码规范以及提交规范: eslint + prettier + husky + lint-stage + commitlint
单元测试: jest + react-testing-library
链接：https://juejin.cn/post/7208745710764867640


一个低代码（可视化拖拽）教学项目
可视化拖拽组件库一些技术要点原理分析
https://github.com/woai3c/Front-end-articles/issues/19
https://woai3c.github.io/visual-drag-demo/
本文主要对以下技术要点进行分析：
开源教你如何做一个低代码平台  重要
https://mp.weixin.qq.com/s?__biz=MjM5NDkxMTgyNw==&mid=2653073378&idx=2&sn=ab38f083eb6e3b2aa7a6ac87bd6b1da4&chksm=bd568cde8a2105c809db8044453d3bb8841d5d16025aad2226b9e2867645adf352595af65595&scene=27
https://github.com/woai3c/visual-drag-demo
编辑器
自定义组件
拖拽
删除组件、调整图层层级
放大缩小
撤消、重做
组件属性设置
吸附
预览、保存代码
绑定事件
绑定动画
导入 PSD
手机模式

https://toscode.gitee.com/gist006/vue-visual-drag
vue-visual-drag 是一个基于vue+element开发的大屏可视化拖拽项目，目前已经实现柱状图、折线图、饼图、水球图、词云图、地图、Table
表和日期等的拖拽和配置具体属性，有兴趣可以看看，如果对你有帮助，可以给个star。

vue-visual-drag
https://toscode.gitee.com/gist006/vue-visual-drag

Low-Code 低代码平台思路 | 青训营笔记
https://juejin.cn/post/7130274439710638093#heading-10
页面预览与发布
页面保存

两种方式：保存 json树

保存到本地，通过 localStroage
保存到数据库，建立后台
预览

拿到页面 json 树，进行遍历渲染

手撸低代码平台搭建
撸低代码平台搭建（一）走进前端低代码
手撸低代码平台搭建（二）揭秘页面设计器
手撸低代码平台搭建（三）组件间交互的实现
手撸低代码平台搭建（四）组件拖动自由布局的实现
保存
保存时实际就是将这段json进行保存操作，我们可以将json存储到数据库中。
预览
在上面讲解画布区域时，我们已讲到组件如何通过json进行渲染。预览以及真实的页面渲染实际和画布中组件的展示实现原理完全一致。其中的区别有两点：（1）画布中的组件不支持交互操作，这里，我们需要屏蔽画布中组件的交互操作。我们可以通过css中的after伪类，设置content为""来实现。（2）画布中的组件需要包裹一个div，这个div包含了复制、删除等功能。

链接：https://juejin.cn/post/7015878414083031048

可视化拖拽组件库一些技术要点原理分析
https://juejin.cn/post/6908502083075325959#heading-21

前端低代码调研与总结
https://juejin.cn/post/7034052451573432351

