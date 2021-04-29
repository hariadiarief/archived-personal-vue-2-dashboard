import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		name: 'Not Found',
		component: () => import('@/views/notFound/index.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/authentication/login/index.vue'),
	},
	{
		path: '/',
		name: 'LayoutDashboard',
		meta: {
			requiresAuth: true,
		},
		component: () => import('@/components/LayoutDashboard.vue'),
		children: [
			{
				path: '',
				name: 'home',
				meta: {
					requiresAuth: true,
				},
				component: () => import('@/views/home/index.vue'),
			},
			{
				path: 'sales',
				meta: {
					requiresAuth: true,
				},
				component: () => import('@/views/sales/index.vue'),
				children: [
					{
						path: '',
						meta: {
							requiresAuth: true,
						},
						component: () => import('@/views/sales/TabFood.vue'),
					},
					{
						path: 'beverage',
						meta: {
							requiresAuth: true,
						},
						component: () => import('@/views/sales/TabBeverage.vue'),
					},
				],
			},
			{
				path: 'add-product',
				meta: {
					requiresAuth: true,
				},
				component: () => import('@/views/addProduct/index.vue'),
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.matched.some((route) => route.meta.requiresAuth)) {
		if (localStorage.getItem('token')) {
			next()
		} else {
			next('/login')
		}
	}
	next()
})

export default router
