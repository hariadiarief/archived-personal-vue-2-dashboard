<script>
import { Bar } from 'vue-chartjs'
import moment from 'moment'

export default {
	extends: Bar,
	props: ['startDate', 'endDate'],
	data() {
		return {
			datacollection: {
				labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				datasets: [
					{
						data: [
							15000 + this.suffix3 + this.suffix1 + this.suffix6 + this.suffix4,
							13000 + this.suffix4 + this.suffix5 + this.suffix3 + this.suffix1,
							10000 + this.suffix1 + this.suffix2 + this.suffix1 + this.suffix5,
							12000 + this.suffix5 + this.suffix6 + this.suffix5 + this.suffix6,
							15000 + this.suffix7 + this.suffix4 + this.suffix2 + this.suffix3,
							16000 + this.suffix2 + this.suffix7 + this.suffix4 + this.suffix7,
							17000 + this.suffix6 + this.suffix3 + this.suffix5 + this.suffix2,
						],
						fill: false,
						borderColor: '#FFE854',
						borderWidth: 3,
						type: 'line',
						legend: false,
					},
					{
						label: 'Nett',
						backgroundColor: '#37B04C',
						barThickness: 20,
						data: [14150 + this.suffix3, 12690 + this.suffix4, 9370 + this.suffix1, 10975 + this.suffix5, 14485 + this.suffix7, 15290 + this.suffix2, 16695 + this.suffix6],
					},
					{
						label: 'Gross',
						backgroundColor: '#289E45',
						barThickness: 20,
						data: [500 + this.suffix1, 100 + this.suffix5, 200 + this.suffix2, 400 + this.suffix6, 300 + this.suffix4, 500 + this.suffix7, 100 + this.suffix3],
					},
					{
						label: 'Average Purchase Value',
						backgroundColor: '#6BE681',
						barThickness: 20,
						data: [
							300 + this.suffix6,
							200 + this.suffix3,
							400 + this.suffix1,
							600 + this.suffix5,
							200 + this.suffix2,
							200 + this.suffix7,
							200 + this.suffix4,
							150 + this.suffix5,
						],
					},
					{
						label: 'Unit per Transaction',
						backgroundColor: '#707070',
						barThickness: 20,
						data: [50 + this.suffix4, 10 + this.suffix1, 30 + this.suffix5, 25 + this.suffix6, 15 + this.suffix3, 10 + this.suffix7, 55 + this.suffix2],
					},
				],
			},
			options: {
				responsive: true,
				legend: {
					position: 'bottom',
					labels: {
						filter: function (item) {
							return item.text
						},
					},
				},
				tooltips: {
					mode: 'index',
					intersect: true,
				},
				scales: {
					xAxes: [
						{
							stacked: true,
						},
					],
					yAxes: [
						{
							stacked: true,
						},
					],
				},
			},
		}
	},
	mounted() {
		this.renderChart(this.datacollection, this.options)
	},
	beforeCreate() {
		this.suffix1 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 15
		this.suffix2 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 20
		this.suffix3 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 30
		this.suffix4 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 10
		this.suffix5 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 25
		this.suffix6 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 11
		this.suffix7 = moment().format('DM') + moment().subtract(3, 'month').format('DM') - 25
	},
	watch: {
		startDate: function (newVal) {
			console.log('startDate', newVal)
			this.suffix1 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 15
			this.suffix2 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 20
			this.suffix3 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 30
			this.suffix4 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 10
			this.suffix5 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 25
			this.suffix6 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 11
			this.suffix7 = moment(newVal, 'YYYY-MM-DD').format('DM') + moment(this.endDate, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 25
		},
		endDate: function (newVal) {
			console.log('endate', newVal)
			this.suffix1 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 15
			this.suffix2 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 20
			this.suffix3 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 30
			this.suffix4 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 10
			this.suffix5 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 25
			this.suffix6 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 11
			this.suffix7 = moment(this.startDate, 'YYYY-MM-DD').format('DM') + moment(newVal, 'YYYY-MM-DD').subtract(3, 'month').format('DM') - 25
		},
	},
}
</script>