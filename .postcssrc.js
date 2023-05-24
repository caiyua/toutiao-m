module.exports = {
	plugins: {
		// 作用：生成浏览器CSS样式规则前缀
		// VueCLI 已经配置了一次，再配置就产生冲突了
		// 'autoprefixer': {
		// 	browsers: ['Android >= 4.0', 'iOS >= 8']
		// },
		// 作用：把 px 转为 rem
		'postcss-pxtorem': {
			// lib-flexible 的 REM 适配方案，把一行分成 10份，
			// 所以 rooValue 应该设置为你的 设计稿宽度的10/1
			// 我们设计稿为 750，所以就是750/10=75
			// 但是Vant建议设置为 37.5，为什么？因为Vant是基于375写的，所以必须设置37.5
			// 唯一的缺点是使用设计稿的尺寸单位必须/2
			// 那可以不可以，如果是vant的样式就按375来转换
			// 如果是自己写的样式就按75来转换
			// rootValue: 75,
			// 这样，设计图750，css写750px就能站全宽，375px就是一半宽
			rootValue({ file }) {
				return file.indexOf('vant') !== -1 ? 37.5 : 75
			},
			// 配置要转换的 css 属性， *表示所有属性
			propList: ['*'],
		},
	},
}
