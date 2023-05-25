<style scoped lang="less">
.login {
	.toutiao-shouji,
	.toutiao-yanzhengma {
		font-size: 37px;
	}
	.send-sms-btn {
		//width: 152px;
		width: auto;
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
			<!-- 手机号 -->
			<van-field
				type="tel"
				name="手机号"
				placeholder="请输入手机号"
				v-model="user.mobile"
				:rules="userFormRules.mobile"
				maxlength="11"
				><i slot="left-icon" class="toutiao toutiao-shouji"></i
			></van-field>
			<!-- 验证码 -->
			<van-field
				type="number"
				name="验证码"
				placeholder="请输入验证码"
				v-model="user.code"
				:rules="userFormRules.code"
				maxlength="6"
			>
				<i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
				<template #button>
					<van-button round size="small" type="default" class="send-sms-btn"
						>获取验证码</van-button
					>
				</template>
			</van-field>
			<!-- 登录按钮 -->
			<div class="login-btn-wrap">
				<van-button
					class="login-btn"
					block
					type="info"
					native-type="submit"
					:disabled="disabled"
					>登录</van-button
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
			// 表单数据
			user: {
				mobile: '',
				code: '',
			},
			userFormRules: {
				mobile: [
					{ required: true, message: '手机号不能为空' },
					{ pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' },
				],
				code: [
					{ required: true, message: '验证码不能为空' },
					{ pattern: /^\d{6}$/, message: '验证码长度必须为六位数' },
				],
			},
		}
	},
	methods: {
		// 表单提交
		async onSubmit() {
			const user = this.user
			this.$toast.loading({
				forbidClick: true,
				duration: 0, // 值为0则持续展示，不会自动消失
			})
			try {
				// 成功后的交互
				const res = await login(user)
				const data = res.data
				console.log(data)
				this.$toast.success({
					message: '登录成功...',
					forbidClick: true,
				})
			} catch (err) {
				// 失败后的交互
				const status = err.response.status
				if (status === 400) {
					this.$toast.fail('手机号或验证码错误')
				} else {
					this.$toast.fail('登录失败，请稍后重试！')
				}
			}
		},
	},
	computed: {
		disabled() {
			return this.user.mobile && this.user.code === ''
		},
	},
}
</script>
