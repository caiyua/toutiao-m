import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
	state: {
		// 一个对象，用来存储当前登录的用户信息（token等数据）
		// 应用初始化时，读取本地存储的token
		// 但这样直接存储的是一个字符串的value，所以得转换成JSON格式
		user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)),
	},
	getters: {},
	mutations: {
		// 永远通过 mutations 修改state
		setUser(state, data) {
			state.user = data
			// 为了防止刷新丢失，需要把数据保存在本地存储
			window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
		},
	},
	actions: {},
	modules: {},
})
