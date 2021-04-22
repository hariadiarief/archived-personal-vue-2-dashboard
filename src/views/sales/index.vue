<template>
	<div class="sales">
		<h1>Sales</h1>
		<div>
			<router-link to="/sales">Food</router-link>
			<router-link to="/sales/beverage">Beverage</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Sales',
}
</script>

<style lang="scss" scoped>
.sales {
	display: flex;
	flex-direction: column;
	padding: 30px 24px;
}
</style>
