import Vue from 'vue'
import App from './App.vue'
import hzqingTimeLine from './lib/index'
Vue.use(hzqingTimeLine)
new Vue({
  el: '#app',
  render: h => h(App)
})
