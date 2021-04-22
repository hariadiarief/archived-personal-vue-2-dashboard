<template>
	<div class="home">
		<div class="home__header">
			<h2 class="home__title">Dashboard</h2>
			<div>Calendar</div>
		</div>

		<div class="home__content">
			<div class="home__content__title">
				<div>MARKET INSIGHTS</div>
				<div>
					<span>Click Here for Helps</span>
					{{ '  ' }}
					<span @click="isMarketIsghtShow = !isMarketIsghtShow" v-if="isMarketIsghtShow">Hide</span>
					<span @click="isMarketIsghtShow = !isMarketIsghtShow" v-else>Show</span>
				</div>
			</div>
			<div v-show="isMarketIsghtShow">
				<div class="home__content__thumbnail">
					<div class="home__content__thumbnail__title">
						<span>Sales Turnover</span>
					</div>
					<div class="home__content__thumbnail__content">
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			isMarketIsghtShow: false,
		}
	},
}
</script>
