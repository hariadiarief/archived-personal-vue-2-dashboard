<template>
	<div class="login">
		<h1>ini login</h1>
		<button type="button" @click="handleLogin">Monggo Masok</button>
	</div>
</template>

<script>
export default {
	name: 'login',
	methods: {
		handleLogin() {
			localStorage.setItem('token', 'initoken')
			this.$router.push('/')
		},
	},
}
</script>

<style lang="scss" scoped>
</style>