<style scoped lang="less">
.my {
	.header {
		width: 100%;
		height: 360px;
		background: url('@/assets/banner.png') center/cover;
		.flex;
		.j_center;
		.a_center;
		.login_btn {
			.flex;
			.f_column;
			.j_center;
			.a_center;
			.mobile_img {
				width: 132px;
			}
			.lr_text {
				font-size: 28px;
				color: #fff;
				margin-top: 15px;
			}
		}
	}
	.Logged_in {
		padding: 80px 30px 50px;
		.user_info {
			width: 100%;
			.flex;
			.f_column;
			.base_info {
				.flex;
				.j_between;
				.a_center;
				.left {
					.flex;
					.a_center;
					.avater {
						width: 150px;
						height: 150px;
						border: 3px solid #fff;
					}
					.nick_name {
						font-size: 38px;
						color: #fff;
						margin-left: 20px;
					}
				}
			}
			.data_stats {
				margin-top: 30px;
				.flex;
				.item {
					flex: auto;
					text-align: center;
					.count {
						font-size: 40px;
						color: #fff;
						font-weight: bold;
					}
					.thing {
						font-size: 24px;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>

<template>
	<div class="my">
		<div class="header not_login">
			<div class="login_btn" @click="$router.push('/login')">
				<img src="@/assets/mobile.png" alt="" class="mobile_img" />
				<span class="lr_text">登录 / 注册</span>
			</div>
		</div>
		<div class="header Logged_in">
			<div class="user_info">
				<div class="base_info">
					<div class="left">
						<van-image
							class="avater"
							src="https://img.yzcdn.cn/vant/cat.jpeg"
							round
							fit="cover"
						></van-image>
						<div class="nick_name">肖才渊</div>
					</div>
					<div class="edit_wrap">
						<van-button size="mini" round>编辑资料</van-button>
					</div>
				</div>
				<div class="data_stats">
					<div class="item">
						<div class="count">10</div>
						<div class="thing">头条</div>
					</div>
					<div class="item">
						<div class="count">10</div>
						<div class="thing">关注</div>
					</div>
					<div class="item">
						<div class="count">10</div>
						<div class="thing">粉丝</div>
					</div>
					<div class="item">
						<div class="count">10</div>
						<div class="thing">获赞</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
}
</script>
