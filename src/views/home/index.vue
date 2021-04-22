<template>
	<div class="home">
		<div class="home__header">
			<h2 class="home__title">Dashboard</h2>
			<date-range-picker v-model="dateRange" :date-format="dateFormat" opens="left" @update="updateValues" format="dd/mm/yyyy">
				<template v-slot:input="picker" style="min-width: 350px">
					<b-icon icon="calendar" scale="1"></b-icon> Periode {{ moment(picker.startDate).format('DD MMM YYYY') }} - {{ moment(picker.endDate).format('DD MMM YYYY') }}
				</template>
			</date-range-picker>
		</div>

		<div class="home__content">
			<div class="home__content__title">
				<div>MARKET INSIGHTS</div>
				<div>
					<span>Click Here for Helps</span>
					<span @click="isMarketIsghtShow = !isMarketIsghtShow" v-if="isMarketIsghtShow">Hide</span>
					<span @click="isMarketIsghtShow = !isMarketIsghtShow" v-else>Show</span>
				</div>
			</div>
			<div v-show="isMarketIsghtShow">
				<div class="home__content__thumbnail">
					<div class="home__content__thumbnail__title d-flex justify-content-between align-items-center">
						<div>Sales Turnover</div>
						<b-icon icon="three-dots-vertical"></b-icon>
					</div>
					<div class="home__content__thumbnail__content d-flex align-items-center">
						<div class="d-flex flex-column mr-5">
							<span>Rp 360.000</span>
							<span>13.8% last period in products sold</span>
						</div>
						<b-icon icon="cart-fill" scale="2"></b-icon>
					</div>
				</div>
				<div>
					<div>Filter :</div>
					<div>{{ moment(this.dateRange.startDate).format('DD MMM YYYY') }} S.D {{ moment(this.dateRange.endDate).format('DD MMM YYYY') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import moment from 'moment'

export default {
	name: 'Home',
	components: { DateRangePicker },
	data() {
		return {
			isMarketIsghtShow: true,
			show: false,
			name: 'masagus hariadi arief',
			dateRange: {
				startDate: moment().format('YYYY-MM-DD'),
				endDate: moment().format('YYYY-MM-DD'),
			},
		}
	},
	watch: {
		show(newVal) {
			console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
		},
	},
	methods: {
		updateValues(event) {
			this.dateRange = {
				startDate: moment(event.startDate).format('YYYY-MM-DD'),
				endDate: moment(event.endDate).format('YYYY-MM-DD'),
			}
			console.log('debug:event', event)
		},
	},
	created: function () {
		this.moment = moment
	},
}
</script>

<style lang="scss" scoped>
</style>
