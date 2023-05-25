<style scoped lang="less">
.layout {
	.tabbar_container {
		i.toutiao {
			font-size: 40px;
		}
		span.tabbar_text {
			font-size: 20px;
		}
	}
}
</style>

<template>
	<div class="layout">
		<router-view></router-view>
		<!-- 标签导航栏 -->
		<van-tabbar class="tabbar_container" route>
			<van-tabbar-item to="/home"
				><i slot="icon" class="toutiao toutiao-shouye"></i
				><span class="tabbar_text">首页</span>
			</van-tabbar-item>
			<van-tabbar-item to="/qa"
				><i slot="icon" class="toutiao toutiao-wenda"></i>
				<span class="tabbar_text">问答</span></van-tabbar-item
			>
			<van-tabbar-item to="/video"
				><i slot="icon" class="toutiao toutiao-shipin"></i
				><span class="tabbar_text">视频</span></van-tabbar-item
			><van-tabbar-item to="/my"
				><i slot="icon" class="toutiao toutiao-wode"></i
				><span class="tabbar_text">我的</span></van-tabbar-item
			>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'layoutIndex',
	data() {
		return {}
	},
}
</script>
