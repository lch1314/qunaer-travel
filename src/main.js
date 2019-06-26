// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 解决移动端点击三秒延迟问题
import fastClick from 'fastclick'
// 引入通用样式文件
import 'styles/reset.css'
// 解决1像素边框问题
import 'styles/border.css'
// 引入字体图标
import 'styles/iconfont.css'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 绑定到body上
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
