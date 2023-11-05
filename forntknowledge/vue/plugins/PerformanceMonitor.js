// performanceMonitor.js

export default {
  install(Vue) {
    // 记录页面加载性能
    window.addEventListener('load', () => {
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;

      console.log(`Page loaded in ${loadTime}ms`);
      // 发送到服务器或其他处理方式
    });

    // 监听每个组件的渲染性能
    Vue.mixin({
      beforeMount() {
        this._renderStartTime = performance.now();
      },
      mounted() {
        const renderTime = performance.now() - this._renderStartTime;

        console.log(`Component ${this.$options.name} rendered in ${renderTime}ms`);
        // 发送到服务器或其他处理方式
      }
    });

    // 监听网络请求的性能
    Vue.prototype.$http = function (config) {
      const startTime = performance.now();

      return axios(config).then(response => {
        const requestTime = performance.now() - startTime;

        console.log(`HTTP request to ${config.url} completed in ${requestTime}ms`);
        // 发送到服务器或其他处理方式

        return response;
      });
    };
  }
};
