import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/scss/element-variables.scss'
import '@/scss/base.scss'

Vue.use(Element)

import { setCookie, getCookie, delCookie } from '@/util/common'
Vue.prototype.$cookieStore = { setCookie, getCookie, delCookie }

new Vue({
	el: '#app',
	router: router,
	render: (h) => h(App),
    
})