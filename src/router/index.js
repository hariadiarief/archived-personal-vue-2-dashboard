import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutDashboard from '@/components/LayoutDashboard.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: LayoutDashboard,
		children: [
			{ path: '', component: () => import('@/views/home/index.vue') },
			{
				path: 'sales',
				component: () => import('@/views/sales/index.vue'),
				children: [
					{ path: '', component: () => import('@/views/sales/food/index.vue') },
					{
						path: 'beverage',
						component: () => import('@/views/sales/beverage/index.vue'),
					},
				],
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
