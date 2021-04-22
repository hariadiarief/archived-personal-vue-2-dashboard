module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
        @import "@/styles/abstract/_Variables.scss";
        @import "@/styles/abstract/_Mixins.scss";
        `,
			},
		},
	},
}
