import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store'
import '@/styles/Main.scss'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
