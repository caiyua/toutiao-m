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
	.count_down { color: #dcdcdc;}
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
		<van-form ref="loginForm" @submit="onSubmit">
			<!-- 手机号 -->
			<van-field
				type="tel"
				name="mobile"
				placeholder="请输入手机号"
				v-model="user.mobile"
				:rules="userFormRules.mobile"
				maxlength="11"
				><i slot="left-icon" class="toutiao toutiao-shouji"></i
			></van-field>
			<!-- 验证码 -->
			<van-field
				type="number"
				name="code"
				placeholder="请输入验证码"
				v-model="user.code"
				:rules="userFormRules.code"
				maxlength="6"
			>
				<i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
				<template #button>
					<!-- 倒计时 -->
					<template v-if="isCountDownShow">
						<van-count-down :time="time" format="ss 秒" class="count_down" @finish="isCountDownShow = !isCountDownShow" />
					</template>
					<template v-else>
						<van-button
							round
							native-type="button"
							size="small"
							type="default"
							class="send-sms-btn"
							@click="onSendSms"
							>获取验证码</van-button
						>
					</template>
				</template>
			</van-field>
			<!-- 登录按钮 -->
			<div class="login-btn-wrap">
				<van-button class="login-btn" block type="info" :disabled="disabled"
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
			// 表单验证规则
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
			// 验证码倒计时
			time: 1000 * 6,
			// 是否展示倒计时
			isCountDownShow: false,
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
		async onSendSms() {
			// 1.校验手机号码
			try {
				// 单独校验手机号（不用自己写规则代码了，表单替你调用自己写的验证代码了）
				await this.$refs.loginForm.validate('mobile')
			} catch (err) {
				return console.log('验证失败', err)
			}
			// 2.验证通过，显示倒计时
			this.isCountDownShow = true
			// 3.请求发布验证码
		},
	},
	computed: {
		// 如果表单项为空，则禁用登录按钮
		disabled() {
			return this.user.mobile && this.user.code === ''
		},
	},
}
</script>
