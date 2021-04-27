import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/components/LayoutDashboard.vue'),
		children: [
			{ path: '', component: () => import('@/views/home/index.vue') },
			{
				path: 'sales',
				component: () => import('@/views/sales/index.vue'),
				children: [
					{ path: '', component: () => import('@/views/sales/TabFood.vue') },
					{ path: 'beverage', component: () => import('@/views/sales/TabBeverage.vue') },
				],
			},
			{ path: 'add-product', component: () => import('@/views/addProduct/index.vue') },
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
