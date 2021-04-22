<template>
	<div class="home">
		<div class="home__header">
			<h2 class="home__title">Dashboard</h2>
			<date-range-picker v-model="dateRange" :date-format="dateFormat" opens="left" @update="updateValues" format="dd/mm/yyyy">
				<template v-slot:input="picker" style="min-width: 350px"
					>tanggalnya adalah{{ moment(picker.startDate).format('DD-MM-YYYY') }} - {{ moment(picker.endDate).format('DD-MM-YYYY') }}
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
					<div class="home__content__thumbnail__title">
						<span>Sales Turnover</span>
					</div>
					<div class="home__content__thumbnail__content">
						<div></div>
					</div>
				</div>
			</div>
			<div>
				<div>Filter :</div>
				<div>{{ moment(this.dateRange.startDate).format('DD-MM-YYYY') }} S.D {{ moment(this.dateRange.endDate).format('DD-MM-YYYY') }}</div>
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
			dateRange: {
				startDate: moment().format('YYYY-MM-DD'),
				endDate: moment().format('YYYY-MM-DD'),
			},
		}
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
