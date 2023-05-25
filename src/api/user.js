/*
* 用户相关请求
* */

import request from '@/utils/request'

// 登录
export const login = (data) => {
    return request({
	    method: 'POST',
	    url: '/v1_0/authorizations',
	    data
    })
}

// 发送短信验证码（接口限制：每个手机号每分钟（60秒）只能请求1次）
export const sendSms = (mobile) => {
	return request({
		method: 'GET',
		url: `/v1_0/sms/codes/${mobile}`,
	})
}
