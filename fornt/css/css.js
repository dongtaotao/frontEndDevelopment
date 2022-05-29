css清除浮动有几种方法？
一、父级添加overflow: hidden；
二、通过属性clear:both;达到清除浮动的目的；空标签
<div style="clear: both;"></div>
三、通过给父级元素添加伪类after，达到清除浮动的目的；
.cc:after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
四：父类添加高度

19 文字单超出显示省略号
div {
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

文字多行超出显示省略号
div {
	width: 200px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}

画一条 0.5px 的线
采用 meta viewport 的方式 <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
采用 border-image 的方式
采用 transform: scale() 的方式

如何画一个三角形
三角形原理:边框的均分原理

div {
  width:0px;
  height:0px;
  border-top:10px solid red;
  border-right:10px solid transparent;
  border-bottom:10px solid transparent;
  border-left:10px solid transparent;
}

css3 有哪些新特性
圆角 （border-radius:8px）
多列布局 （multi-column layout）
阴影 （Shadoweflect）
文字特效 （text-shadow）
文字渲染 （Text-decoration）
线性渐变 （gradient）
旋转 （transform）
增加了旋转,缩放,定位,倾斜,动画,

html5 有那些新特性
新增语义化标签，progress 进度条标签
媒体标签 audio（音频） video（视频）
新增了表单类型，color，email，data，time，number，url等
新增表单属性：placeholder autofocus（自动获取焦点）等
新增了两种客户端存储数据的方式 localStorage和sessionStorage
拖放，画布（canvas），Geolocation（地理定位），websocket（通信协议）

BFC是什么  BFC块格式化上下文 https://juejin.cn/post/7075958252143378440
BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，
BFC渲染规则
  BFC垂直方向边距重叠
  BFC的区域不会与浮动元素的box重叠
  BFC是一个独立的容器，外面的元素不会影响里面的元素
  计算高度的时候浮动元素也会参与计算

  触发条件
  一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可： 下列方式会创建块格式化上下文：

  根元素()
  浮动元素（元素的 float 不是 none）
  绝对定位元素（元素的 position 为 absolute 或 fixed）
  行内块元素（元素的 display 为 inline-block）
  表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
  表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
  匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML
  table、row、tbody、thead、tfoot的默认属性）或 inline-table）
  overflow 值不为 visible 的块元素 -弹性元素（display为 flex 或 inline-flex元素的直接子元素）
  网格元素（display为 grid 或 inline-grid 元素的直接子元素） 等等。
二、BFC的应用示例 https://juejin.cn/post/7080719361563951141
  1、防止 margin 重叠
  2、清除内部浮动
  3、自适应多栏布局

css 怎么开启硬件加速(GPU 加速)
浏览器在处理下面的 css 的时候，会使用 GPU 渲染
transform（当 3D 变换的样式出现时会使用 GPU 加速）
opacity
filter
will-change

请你解释一下什么是 BFC
https://juejin.cn/post/7071052780063948837

RAF 和 RIC 是什么
requestAnimationFrame： 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；由于是每
帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。
requestIdleCallback：会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，
而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，有可能会打乱这个顺序。
链接：https://juejin.cn/post/7031793667492806670

5、FlexBox
利用display属性为flex，设置弹性盒子的容器，然后定义它的属性和子元素的属性。
// container
flex-direction，主轴方向，也就是子元素排列的方向
flex-wrap，子元素能否换行展示及换行方式
flex-flow，flex-direction 和 flex-wrap 的简写形式
justify-content，子元素在主轴上的对齐方式
align-items，子元素在垂直于主轴的交叉轴上的排列方式
align-content，子元素在多条轴线上的对齐方式
​
// items
order，子元素在主轴上的排列顺序
flex-grow，子元素的放大比例，默认 0
flex-shrink，子元素的缩小比例，默认 1
flex-basis，分配剩余空间时，子元素的默认大小，默认 auto 
flex，flex-grow，flex-shrink，flex-basis 的简写
align-self，覆盖容器的 align-items 属性
链接：https://juejin.cn/post/7035540378811891749


3. 什么是回流(重排)，什么情况下会触发回流
当元素的尺寸或者位置发生了变化，就需要重新计算渲染树，这就是回流
DOM元素的几何属性(width/height/padding/margin/border)发生变化时会触发回流
DOM元素移动或增加会触发回流
读写offset/scroll/client等属性时会触发回流
调用window.getComputedStyle会触发回流

4. 什么是重绘，什么情况下会触发重绘
DOM样式发生了变化，但没有影响DOM的几何属性时，会触发重绘，而不会触发回流。重绘由于DOM位置信息不需要更新，省去了布局过程，因而性能上优于回流

5. 什么是GPU加速，如何使用GPU加速，GPU加速的缺点 ********* https://juejin.cn/post/6844904116552990727
优点：使用transform、opacity、filters等属性时，会直接在GPU中完成处理，这些属性的变化不会引起回流重绘
缺点：GPU渲染字体会导致字体模糊，过多的GPU处理会导致内存问题

6. 如何减少回流
使用class替代style，减少style的使用
使用resize、scroll时进行防抖和节流处理，这两者会直接导致回流
使用visibility替换display: none，因为前者只会引起重绘，后者会引发回流
批量修改元素时，可以先让元素脱离文档流，等修改完毕后，再放入文档流
避免触发同步布局事件，我们在获取offsetWidth这类属性的值时，可以使用变量将查询结果存起来，避免多次查询，每次对offset/scroll/client等属性进行查询时都会触发回流
对于复杂动画效果,使用绝对定位让其脱离文档流，复杂的动画效果会频繁地触发回流重绘，我们可以将动画元素设置绝对定位从而脱离文档流避免反复回流重绘。

链接：https://juejin.cn/post/6844904116552990727

CSS相关
https://juejin.cn/post/7071629552857907230#heading-25

flex布局
http://www.zhuguannan.cn/css/flex%E5%B8%83%E5%B1%80.html

css的匹配顺序了解吗？
css的匹配顺序是从右向左。因为从右到左会更加高效。

什么是BFC
https://juejin.cn/post/6844904116552990727

margin重叠问题 https://juejin.cn/post/6905539198107942919
如果两者都是正数，那么就去最大者
如果是一正一负，就会正值减去负值的绝对值
两个都是负值时，用0减去两个中绝对值大的那个

19.形成BFC的条件
a.float不是none
b.position 是absolute或fixed
c.overflow 不是visible
d.display 是flex inline-block等

20.BFC的作用
a.清除浮动
b.避免margin重叠

21.Margin重叠值的计算
a.水平边距永远不会重叠
b.两个正值，取较大；一正一负相加；两个负值，取绝对值较大，再加负号
链接：https://juejin.cn/post/7086346372001038350

即 calc( ) 函数，主要用于指定元素的长度，支持所有 CSS 长度单位，运算符前后都需要保留一个空格。
比如： width: calc(100% - 50px);


box-sizing： content-box， border-box https://blog.csdn.net/m0_37585915/article/details/78501760
标准盒模型content-box, border = 20, padding = 10, width = 100
总宽 = border + padding + width = 150
border-box. border = 20, padding = 10, width = 100


如何实现一个自适应的正方形 https://juejin.cn/post/7098689890933538853
.square {
  width: 10vw;
  height: 10vw;
  background: red;
 }

 .square {
  width: 10%;
  padding-bottom: 10%; 
  height: 0; // 防止内容撑开多余的高度 
  background: red;
 }

 CSS3 新增东西众多，这里列举出一些关键的新增内容：
选择器
盒子模型属性：border-radius、box-shadow、border-image
背景：background-size、background-origin、background-clip
文本效果：text-shadow、word-wrap
颜色：新增 RGBA，HSLA 模式
渐变：线性渐变、径向渐变
字体：@font-face
2D/3D转换：transform、transform-origin
过渡与动画：transition、@keyframes、animation
多列布局
媒体查询
链接：https://juejin.cn/post/7098689890933538853 