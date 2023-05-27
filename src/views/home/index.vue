<style scoped lang="less">
.home {
	.search_wrap {
		background-color: @color;
		.flex;
		.j_center;
		.a_center;
		padding: 30px 0 40px;
		.van-cell__value {
			.flex;
			.j_center;
			.search_btn {
				width: 555px;
				height: 64px;
				background-color: rgba(255, 255, 255, 0.2);
				border: 0;
				font-size: 28px;
				color: #fff;
				.van-icon {
					font-size: 32px;
				}
			}
		}
	}
	.van-cell::after {
		border: 0;
	}

	/deep/ .van-tabs__wrap {
		height: 88px;
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
		<van-cell class="search_wrap">
			<van-button class="search_btn" type="info" round icon="search">搜索</van-button>
		</van-cell>
		<!-- 滑动标签页 -->
		<van-tabs v-model="active" swipeable animated>
			<van-tab v-for="index in 6" :title="'选项 ' + index"> 内容 {{ index }} </van-tab>
			<div class="menu_space" slot="nav-right"></div>
			<div class="menu_wrap" slot="nav-right"><i class="toutiao toutiao-gengduo"></i></div>
		</van-tabs>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'index',
	data() {
		return {
			active: 0,
		}
	},
})
</script>
