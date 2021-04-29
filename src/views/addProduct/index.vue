<template>
	<div class="add-product">
		<h2 class="title">Add Product</h2>
		<form class="form">
			<div class="form__card">
				<div class="title__sub">Product Information</div>

				<div class="form__card__field--col2">
					<div>
						<div class="title__field">ID</div>
						<input class="form__card__input" type="number" :disabled="true" :value="ID" />
					</div>
					<div>
						<div class="title__field">Name</div>
						<input class="form__card__input" type="text" v-model="name" />
					</div>
				</div>

				<div class="form__card__field">
					<div class="title__field">Type</div>
					<select name="" id="" class="form__card__select" v-model="type">
						<option :value="null" disabled>Select Product Type</option>
						<option :value="1">Food</option>
						<option :value="2">Beverage</option>
					</select>
				</div>

				<div class="form__card__field">
					<div class="title__field">production price</div>
					<div class="form__card__upload-image">
						<img v-if="imageURL" :src="imageURL" alt="" />
						<img v-else src="@/assets/state/empty-image.jpg" alt="" />

						<div class="form__card__upload-image__modifier">
							<button type="button" class="button--primary" v-if="!imageURL">
								<input type="file" name="imageURL" @change="setImage" />
								<label htmlFor="file">Choose Image</label>
							</button>
							<button type="button" class="button--denger" v-else @click="imageURL = null">remove Image</button>
						</div>
					</div>
				</div>
			</div>

			<div class="form__card">
				<div class="title__sub">pricing</div>
				<div class="form__card__field--col2">
					<div>
						<div class="title__field">production price</div>
						<input class="form__card__input" type="number" min="0" v-model="productionPrice" @keydown="console.log($event.target.value)" />
					</div>
					<div>
						<div class="title__field">selling price</div>
						<input class="form__card__input" type="number" min="0" v-model="sellingPrice" />
					</div>
				</div>
			</div>

			<div class="form__submit">
				<button class="button--primary">Add</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'addProduct',
	data() {
		return {
			ID: (Math.random() * 100).toFixed(0),
			name: null,
			imageURL: null,
			type: null,
			productionPrice: null,
			sellingPrice: null,
		}
	},
	methods: {
		setImage(event) {
			this.imageURL = URL.createObjectURL(event.target.files[0])
		},
	},
	created() {
		this.console = window.console
	},
}
</script>

<style lang="scss" scoped>
.add-product {
	display: flex;
	flex-direction: column;
	padding: 30px 24px;

	background-color: #f2f3f3;
	min-height: 100vh;
}
</style>