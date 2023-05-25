<style scoped lang="less">
.my {
	.header {
		width: 100%;
		height: 360px;
		background: url('@/assets/banner.png') center/cover;.flex;.j_center;.a_center;
		.login_btn { .flex;.f_column;.j_center;.a_center;
			.mobile_img{ width: 132px;}
			.lr_text { font-size: 28px;color: #fff;margin-top: 15px;}
		}
	}
}
</style>

<template>
	<div class="my">
		<div class="header not_login">
			<div class="login_btn" @click="$router.push('/login')">
				<img src="@/assets/mobile.png" alt="" class="mobile_img">
				<span class="lr_text">登录 / 注册</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
}
</script>
