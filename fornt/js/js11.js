// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Lazy-Load</title>
//   <style>
//     .img {
//       width: 200px;
//       height:200px;
//       background-color: gray;
//     }
//     .pic {
//       // 必要的img样式
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="img">
//       // 注意我们并没有为它引入真实的src
//       <img class="pic" alt="加载中" data-src="./images/1.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/2.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/3.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/4.png">
//     </div>
//     <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/5.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/6.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/7.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/8.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/9.png">
//     </div>
//      <div class="img">
//       <img class="pic" alt="加载中" data-src="./images/10.png">
//     </div>
//   </div>
// </body>
// </html>

在懒加载的实现中，有两个关键的数值：一个是当前可视区域的高度，另一个是元素距离可视区域顶部的高度。

{/* <script> */}
    // 获取所有的图片标签
    const imgs = document.getElementsByTagName('img')
    // 获取可视区域的高度
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
    let num = 0
    function lazyload(){
        for(let i=num; i<imgs.length; i++) {
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0 ){
                // 给元素写入真实的src，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
                num = i + 1
            }
        }
    }
    // 监听Scroll事件
    window.addEventListener('scroll', lazyload, false);
// </script>

https://juejin.cn/book/6844733750048210957/section/6844733750119514126  图片懒加载


为什么npm run dev就能启动一个项目？
https://www.bilibili.com/video/BV1L34y1i7Ei?spm_id_from=333.999.0.0

webpack源码分析
https://juejin.cn/column/7004269262806188069