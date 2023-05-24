<style scoped lang="less">
.login {
	.toutiao-shouji,
	.toutiao-yanzhengma {
		font-size: 37px;
	}
	.send-sms-btn {
		width: 152px;
		height: 46px;
		background-color: #ededed;
		font-size: 22px;
		color: #666;
	}
	.login-btn-wrap {
		padding: 53px 33px;
		.login-btn {
			background-color: #6db4fb;
			border: 0;
		}
	}
}
</style>

<template>
	<div class="login">
		<!--导航栏-->
		<van-nav-bar class="page-nav-bar" title="登录" />
		<!--登录表单-->
		<van-form @submit="onSubmit">
			<van-field type="number" name="手机号" placeholder="请输入手机号" v-model="user.mobile"
				><i slot="left-icon" class="toutiao toutiao-shouji"></i
			></van-field>
			<van-field type="number" name="验证码" placeholder="请输入验证码" v-model="user.code">
				<i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
				<template #button>
					<van-button round size="small" type="default" class="send-sms-btn"
						>获取验证码</van-button
					>
				</template>
			</van-field>
			<div class="login-btn-wrap">
				<van-button class="login-btn" block type="info" native-type="submit"
					>提交</van-button
				>
			</div>
		</van-form>
	</div>
</template>

<script>
import { login } from '@/api/user'
export default {
	name: 'LoginIndex',
	data() {
		return {
			user: {
				mobile: '',
				code: '',
			},
		}
	},
	methods: {
		// 表单提交
		async onSubmit() {
			const user = this.user // 表单数据
			try {
				const res = await login(user)
				const data = res.data
				console.log(data)
			} catch (err) {
				const status = err.response.status
				if (status === 400) {
					console.log('手机号或验证码错误')
				} else {
					console.log('登录失败，请稍后重试！')
				}
			}
		},
	},
}
</script>
