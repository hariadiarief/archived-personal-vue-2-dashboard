<template>
	<div class="food">
		<h1>Food</h1>
		<div class="food__items grid column-1 column-md-2 column-lg-6 gap-8 gap-md-18">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Food',
}
</script>

<style lang="scss" scoped>
.food {
	display: flex;
	flex-direction: column;
	width: 100%;
	&__items {
		> div {
			height: 25px;
			background: #ccc;
			border: 1px solid black;
		}
	}
}
</style>
