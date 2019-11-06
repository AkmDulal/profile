import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import PerfectScrollbar from 'vue2-perfect-scrollbar'
Vue.use(PerfectScrollbar)

import vuescroll from 'vue-scroll' 
Vue.use(vuescroll)

import Header from './components/Header.vue';
Vue.component("headerarea", Header)

import Navbar from './components/Navbar.vue';
Vue.component("navbarrarea", Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
