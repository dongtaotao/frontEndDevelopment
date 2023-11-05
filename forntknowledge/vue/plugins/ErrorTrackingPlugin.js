const ErrorTrackingPlugin = {
  install(Vue) {
    // 捕获语法错误和同步错误
    window.onerror = (message, source, lineno, colno, error) => {
      console.error(`🍉语法错误或同步错误: ${error}\n位置: ${source}@${lineno}:${colno}`);
      // 发送错误信息到监测平台
      // sendErrorToMonitoringPlatform(error);
      return true;
    };

    // 捕获异步错误和 Promise 错误
    window.addEventListener('unhandledrejection', event => {
      const { reason, promise } = event;
      console.error('🍉异步错误或 Promise 错误:', reason);
      // 发送错误信息到监测平台
      // sendErrorToMonitoringPlatform(reason);
    });

    // 捕获资源加载错误
    window.addEventListener('error', event => {
      // 过滤掉资源加载错误
      if (!event.target.src && !event.target.href) {
        return;
      }
      const error = new Error(`资源加载错误: ${event.target.src || event.target.href}`);
      console.error('🍉资源加载错误:', error);
      // 发送错误信息到监测平台
      // sendErrorToMonitoringPlatform(error);
    });

    // 捕获 Vue 组件错误
    Vue.config.errorHandler = (err, vm, info) => {
      if (vm && vm.$options && vm.$options.name) {
        console.error(`🍉[Vue errorHandler]: ${err}--------------${vm.$options.name}--------------${info}`);
      } else {
        console.error(`🍉[Vue errorHandler]: ${err}--------------global error--------------${info}`);
      }
      // 发送错误信息到监测平台
      // sendErrorToMonitoringPlatform(err);
    };

    // 捕获 Vue 组件警告
    Vue.config.warnHandler = (msg, vm, trace) => {
      if (vm && vm.$options && vm.$options.name) {
        console.error(`🍉[Vue warnHandler]: ${msg}--------------${vm.$options.name}--------------${trace}`);
      } else {
        console.error(`🍉[Vue warnHandler]: ${msg}--------------global warning--------------${trace}`);
      }
      // 发送错误信息到监测平台
      // sendWarningToMonitoringPlatform(msg);
    };
  }
};

export default ErrorTrackingPlugin;