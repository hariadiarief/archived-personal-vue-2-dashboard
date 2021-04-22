import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/styles/Main.scss'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
