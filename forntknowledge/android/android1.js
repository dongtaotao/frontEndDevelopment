从零开始用android studio
https://blog.csdn.net/shaoyezhangliwei/article/details/78181118

第一次使用Android Studio时你应该知道的一切配置
https://blog.csdn.net/shaoyezhangliwei/article/details/72654498

最完整的Andriod studio插件整理
https://blog.csdn.net/shaoyezhangliwei/article/details/86090003

🔥 2021 最新Android知识体系
https://juejin.cn/post/6919037176038555662
https://mubu.com/doc/7PzS8n0bRf




android 跳转第三方地图（百度，高德，谷歌）
https://wukong.blog.csdn.net/article/details/77968566
2.高德地图跳转
if (isAvilible(context, "com.autonavi.minimap")) {
  try {
    Intent intent = Intent.getIntent("androidamap://navi?sourceApplication=新疆和田&poiname="+mAreaName+"&lat="
            + mLatitude
            + "&lon="
            + mLongitude + "&dev=0");
    context.startActivity(intent);
  } catch (URISyntaxException e) {
    e.printStackTrace();
  }
} else {
  Toast.makeText(context, "您尚未安装高德地图", Toast.LENGTH_LONG)
      .show();
  Uri uri = Uri
      .parse("market://details?id=com.autonavi.minimap");
  Intent intent = new Intent(Intent.ACTION_VIEW, uri);
  context.startActivity(intent);
}‘



Android-移动支付 支付宝 微信 银联
https://wukong.blog.csdn.net/article/details/84756143


android 防止多次点击
https://wukong.blog.csdn.net/article/details/89398719


Android跳转到应用商店的APP详情页面，以及 Google GMS 各个apk的包
https://wukong.blog.csdn.net/article/details/72765832



Android 操作系统架构开篇
http://gityuan.com/android/
一、引言
二、Android架构
2.1 Linux内核层
2.2 硬件抽象层 (HAL)
2.3 Android Runtime & 系统库
2.4 Framework层
2.5 App层
2.6 Syscall && JNI
三、通信方式
3.1 Binder
3.2 Socket
3.3 Handler
四、核心提纲
4.1 系统启动系列
4.2 系统稳定性系列
4.3 Android进程系列
4.4 四大组件系列
4.5 图形系统系列
4.6 系统服务篇
4.7 内存&&存储篇
4.8 工具篇
4.9 实战篇
五、结束语