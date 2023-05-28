<style scoped lang="less">
.home {
	padding-top: (128px + 82);
	/deep/ .search_wrap {
		width: 100%;
		height: auto !important;
		background-color: @color;
		.van-nav-bar {
			background-color: @color;
		}
		.van-nav-bar__content {
			height: 100%;
			.van-nav-bar__title {
				max-width: unset;
				width: 100%;
				padding: 20px 0;
				.search_btn {
					width: 80%;
					background-color: rgba(255, 255, 255, 0.2);
					.van-button__content {
						i {
							color: #fff;
						}
					}
				}
			}
		}
	}

	.van-cell::after {
		border: 0;
	}

	/deep/ .van-tabs__wrap {
		height: auto;
		position: fixed;
		top: 128px;
		z-index: 2;
		padding-bottom: 0 !important;
		.van-tabs__nav {
			padding: 0;
			overflow-x: scroll; /* 允许水平滚动 */
			scrollbar-width: none; /* 隐藏滚动条（仅适用于火狐浏览器） */
			&::-webkit-scrollbar {
				display: none; /* 隐藏滚动条（仅适用于 WebKit 内核浏览器） */
			}
		}
		.van-tabs__nav--line {
			padding-bottom: 0;
		}
		.van-tab {
			min-width: 250px;
		}
		.van-tabs__line {
			bottom: 8px;
			width: 31px;
			height: 6px;
			background-color: @color;
		}
		.menu_wrap {
			width: 66px;
			height: 82px;
			position: fixed;
			right: 0;
			background-color: #fff;
			.flex;
			.j_center;
			.a_center;
			opacity: 0.8;
			i.toutiao {
				font-size: 28px;
				color: #000;
				z-index: 2;
			}
			&::before {
				content: '';
				width: 2px;
				height: 100%;
				background: url('@/assets/gradient-gray-line.png');
				background-size: contain;
				.center_v;
				left: 0;
				top: 54%;
			}
		}
		.menu_space {
			// flex布局，直接min-width也可以生效
			width: 66px;
			flex-shrink: 0;
			height: 82px;
		}
	}
}
</style>

<template>
	<div class="home">
		<!-- 搜索栏-->
		<van-nav-bar class="search_wrap" fixed placeholder>
			<van-button class="search_btn" type="info" round icon="search" slot="title">搜索</van-button>
		</van-nav-bar>

		<!-- 频道列表 -->
		<van-tabs v-model="active" swipeable animated duration=".5">
			<van-tab v-for="item in channelNames" :key="item.id" :title="item.name">
				<!-- 文章列表 -->
				<articleList :channel="item" />
			</van-tab>
			<div class="menu_space" slot="nav-right"></div>
			<div class="menu_wrap" slot="nav-right"><i class="toutiao toutiao-gengduo"></i></div>
		</van-tabs>
		<!-- -->
	</div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from '@/components/article-list.vue'
export default {
	name: 'index',
	components: { ArticleList },
	data() {
		return {
			// 初始化选中的频道
			active: 0,
			// 频道列表名
			channelNames: [],
		}
	},
	methods: {
		async loadingChannel() {
			try {
				const { data } = await getUserChannels()
				this.channelNames = data.data.channels
			} catch (err) {
				this.$toast('获取频道数据失败')
			}
		},
	},
	created() {
		if (this.$store.state.user_token) {
			this.loadingChannel()
		}
	},
}
</script>
