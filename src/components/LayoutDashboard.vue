<template >
	<div class="layout-dashboard">
		<header class="layout-dashboard__header">
			<!-- <img src="@/assets/logo.png" alt="" /> -->
		</header>
		<div class="layout-dashboard__main">
			<aside class="layout-dashboard__main__aside">
				<router-link class="layout-dashboard__main__aside__navigation" to="/" exact>
					<b-icon icon="house-fill"></b-icon>
				</router-link>
				<router-link class="layout-dashboard__main__aside__navigation" to="/sales"> <b-icon icon="cart-fill"> </b-icon> </router-link>
				<router-link class="layout-dashboard__main__aside__navigation" to="/add-product"> <b-icon icon="bag-plus-fill"> </b-icon> </router-link>
			</aside>
			<main>
				<router-view />
			</main>
		</div>
	</div>
</template>

<script >
export default {
	name: 'LayoutDashboard',
}
</script>
