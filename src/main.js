import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { ToggleButton } from 'vue-js-toggle-button'
import router from './routes'
// import $ from 'jquery'
 
Vue.component('ToggleButton', ToggleButton)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// $(function(){ 
//   var navMain = $(".navbar-collapse");

//   navMain.on("click", "a", null, function () {
//       navMain.collapse('hide');
//   });
// });