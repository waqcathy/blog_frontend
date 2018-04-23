// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import hljs from "highlight.js";
import "highlight.js/styles/vs.css";
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'

Vue.use(Element)

Vue.config.productionTip = false
Vue.directive('highlight',{
  update:function(el){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  }
})
Vue.filter('time', function (value) {
  return value.slice(0,10)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
