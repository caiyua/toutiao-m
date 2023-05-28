<style scoped lang="less">
.article_list {height: 76vh;overflow-y: auto;}
</style>

<template>
	<div class="article_list">
		<van-pull-refresh
			v-model="isRefreshLoading"
			@refresh="onRefresh"
			:success-text="successText"
			animation-duration="1000"
		>
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
				:error.sync="error"
				error-text="请求失败，点击重新加载"
			>
				<van-cell v-for="(article, index) in list" :key="index" :title="article.title" />
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
	name: 'articleList',
	props: {
		// 当前频道的id、name
		channel: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			list: [], // 文章列表
			loading: false, // 控制加载中 loading 状态
			finished: false, // 控制数据加载结束的状态
			timestamp: null, // 请求获取下一页数据的时间戳
			error: false, // 请求的状态：成功或错误
			isRefreshLoading: false, // 控制下拉刷新的状态
			successText: '刷新成功', // 下拉刷新成功提示文本
		}
	},
	methods: {
		async onLoad() {
			// 1.获取到数据
			// 2.把请求结果数据放到list数组中（渲染出页面就行）
			// 3.本次数据加载结束之后要把加载状态设置为结束
			// 4.判断数据是否全部加载完成
			try {
				const { data } = await getArticles({
					// 频道id
					channel_id: this.channel.id,
					// 当前时间戳，第一次肯定执行第二个，后面都是执行第一个
					timestamp: this.timestamp || Date.now(),
				})
				const results = data.data.results
				// ...展开数组，把里面的内容放到另一个数组里，否则就是数组里嵌套数组
				// 相对于(result[0], result[1], result[2], 等等等等)，有多少拿多少
				// 永远在请求第一页数据，后面都是重复的内容
				this.list.push(...results)
				this.loading = false
				if (results.length) {
					this.timestamp = data.data.pre_timestamp
				} else {
					// 没有数据了，将 finished 设置为true
					this.finished = true
				}
			} catch (err) {
				this.error = true
				// loading状态
				this.loading = false
				console.log('加载文章列表失败', err)
			}
		},
		async onRefresh() {
			/* 所谓下拉刷新，实际就是将新的数据添加到最顶部，和上滑加载相反*/
			// 1.请求获取数据
			// 2.将数据追加到列表的顶部
			// 3.关闭下拉刷新的loading状态
			try {
				const { data } = await getArticles({
					channel_id: this.channel.id,
					timestamp: Date.now(),
					with_top: 1,
				})
				const { results } = data.data
				this.list.unshift(...data.data.results)
				this.isRefreshLoading = false
				this.successText = `刷新成功，更新了${results.length}条数据`
			} catch (err) {
				this.successText = '刷新失败'
				this.isRefreshLoading = false
			}
		},
	},
}
</script>
