<template >
	<div class="layout-dashboard">
		<header class="layout-dashboard__header">
			<!-- <img src="@/assets/logo.png" alt="" /> -->
		</header>
		<div class="layout-dashboard__main">
			<aside class="layout-dashboard__main__aside">
				<router-link class="layout-dashboard__main__aside__navigation" to="/" exact>Home</router-link>
				<router-link class="layout-dashboard__main__aside__navigation" to="/sales">Sales</router-link>
			</aside>
			<router-view />
		</div>
	</div>
</template>

<script >
export default {
	name: 'LayoutDashboard',
}
</script>
