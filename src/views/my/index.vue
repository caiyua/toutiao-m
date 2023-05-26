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
	.grid_nav {
		i.toutiao {
			font-size: 45px;
		}
		.toutiao-shoucang {
			color: #eb5253;
		}
		.toutiao-lishi {
			color: #ff9d1d;
		}
		span {
			font-size: 28px;
		}
	}
	.custom_cell {
		margin: 20px 0;
	}
	.log_out {
		text-align: center;
		color: #f66;
	}
}
</style>

<template>
	<div class="my">
		<!-- 已登录头部 -->
		<div class="header Logged_in" v-if="user_token">
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
		<!-- 未登录头部 -->
		<div class="header not_login" v-else>
			<div class="login_btn" @click="$router.push('/login')">
				<img src="@/assets/mobile.png" alt="" class="mobile_img" />
				<span class="lr_text">登录 / 注册</span>
			</div>
		</div>
		<!-- 宫格导航 -->
		<van-grid class="grid_nav" :column-num="2" clickable>
			<van-grid-item class="grid_item"
				><i Slot="icon" class="toutiao toutiao-shoucang"></i><span Slot="text">收藏</span></van-grid-item
			>
			<van-grid-item class="grid_item"
				><i Slot="icon" class="toutiao toutiao-lishi"></i><span Slot="text">历史</span></van-grid-item
			>
		</van-grid>
		<!-- 单元格 -->
		<div class="custom_cell">
			<van-cell title="消息通知" is-link />
			<van-cell title="小智同学" is-link />
		</div>
		<van-cell class="log_out" title="退出登录" v-if="user_token" clickable @click="logOut" />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'index',
	methods: {
		logOut() {
			this.$dialog.confirm({
				title: '退出登录',
			})
				.then(() => {
					// on confirm
					this.$store.commit('setUser', null)
				})
				.catch(() => {
					// on cancel
				})
		},
	},
	computed: {
		...mapState(['user_token']),
	},
}
</script>
