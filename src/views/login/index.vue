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
			background-color: #6db4fb;border: 0;
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
			<van-field type="text" name="手机号" placeholder="请输入手机号"
				><i slot="left-icon" class="toutiao toutiao-shouji"></i
			></van-field>
			<van-field type="password" name="验证码" placeholder="请输入验证码">
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
export default {
	name: 'LoginIndex',
}
</script>
