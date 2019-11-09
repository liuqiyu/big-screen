import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './assets/js/rem'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import './assets/iconfont/iconfont.css'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI, {
  size: 'mini'
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
