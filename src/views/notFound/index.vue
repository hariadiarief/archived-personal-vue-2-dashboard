<template>
	<div class="not-found container">
		<div class="not-found__container">
			<div class="not-found__desc">
				<span>404</span>
				<span>UH OH! You're lost.</span>
				<span>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</span>
			</div>
			<button class="not-found__button" @click="() => this.$router.push('/')">Go to Home</button>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.not-found {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	&__container {
		display: flex;
		flex-direction: column;
		text-align: left;
		max-width: 500px;
	}

	&__desc {
		color: #0e0620;
		display: flex;
		flex-direction: column;

		> span:nth-child(1) {
			font-size: 3.5em;
			margin: 15px 0px;
			font-weight: bold;

			@include for-size(md) {
				font-size: 7.5em;
			}
		}

		> span:nth-child(2) {
			font-weight: bold;
			font-size: 1rem;

			@include for-size(md) {
				font-size: 2rem;
			}
		}

		> span:nth-child(3) {
			font-size: 0.5;

			@include for-size(md) {
				font-size: 1rem;
			}
		}
	}

	&__button {
		width: fit-content;
		margin-top: 50px;

		z-index: 1;
		overflow: hidden;
		background: transparent;
		position: relative;
		padding: 8px 50px;
		border-radius: 30px;
		cursor: pointer;
		font-size: 1em;
		letter-spacing: 2px;
		transition: 0.2s ease;
		font-weight: bold;
		border: 4px solid #2ccf6d;
		color: #0e0620;

		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 0%;
			height: 100%;
			background: #2ccf6d;
			z-index: -1;
			transition: 0.2s ease;
		}

		&:hover {
			color: #fff;
			background: #2ccf6d;
			transition: 0.2s ease;

			&:before {
				width: 100%;
			}
		}
	}
}
</style>