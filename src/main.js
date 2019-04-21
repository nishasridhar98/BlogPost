import Vue from 'vue'
import App from './App.vue' //root component
import store from './store' //for vuex

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
//render the app & mount it to the dom whose id is app
