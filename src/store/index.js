import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
	state: {
		// 应用初始化时，读取本地存储的token
		user: getItem(TOKEN_KEY),
	},
	getters: {},
	mutations: {
		// 永远通过 mutations 修改state
		setUser(state, data) {
			state.user = data
			// 为了防止刷新丢失，需要把数据保存在本地存储
			setItem(TOKEN_KEY, state.user)
		},
	},
	actions: {},
	modules: {},
})
