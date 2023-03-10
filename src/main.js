import Vue from 'vue'
import App from './App.vue'
import moment from 'moment/moment'
import io from "socket.io-client";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.prototype.$moment = moment
Vue.prototype.$socket = io(`https://chat-app-sabry-1996.vercel.app:${process.env.VUE_APP_SOCKET_PROT}`, { transports: ['websocket', 'polling', 'flashsocket'] })

new Vue({
  render: h => h(App),
}).$mount('#app')
