/*
 * 用户相关请求
 * */

/****************** 导入 **************************/
// 导入axios请求模块
import request from '@/utils/request'
// 导入vuex
import store from '@/store'
/****************** 导入-End **************************/

// 登录
export const login = (data) => {
	return request({
		method: 'POST',
		url: '/v1_0/authorizations',
		data,
	})
}

// 发送短信验证码（接口限制：每个手机号每分钟（60秒）只能请求1次）
export const sendSms = (mobile) => {
	return request({
		method: 'GET',
		url: `/v1_0/sms/codes/${mobile}`,
	})
}

// 获取用户自己的信息
export const getUserInfo = () => {
	return request({
		method: 'GET',
		url: '/v1_0/user',
		// 发送请求头数据
		// headers: {
		// 	// 一定要是token字符串，而不是一个对象什么的，别把刷新令牌也放进来！
		// 	Authorization: `Bearer ${store.state.user_token.token}`,
		// },
	})
	
}
