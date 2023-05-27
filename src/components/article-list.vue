<style scoped lang="less"></style>

<template>
	<div class="article_list">
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
			// 文章列表
			list: [],
			// 控制加载中 loading 状态
			loading: false,
			// 控制数据加载结束的状态
			finished: false,
			// 请求获取下一页数据的时间戳
			timestamp: null,
			// 请求的状态：成功或错误
			error: false,
		}
	},
	methods: {
		async onLoad() {
			// 1.获取到数据
			// 2.把请求结果数据放到list数组中（能够渲染出页面）
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
	},
}
</script>
