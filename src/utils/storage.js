/*
 * 封装本地存储操作模块
 * */

/*
 * 存储数据
 * */
export const setItem = (key, value) => {
	// 将数组、对象类型的数据转换为 JSON 格式字符串，进行存储
	if (typeof value === 'object') {
		value = JSON.stringify(value)
	}
	window.localStorage.setItem(key, value)
}

/*
 * 获取数据
 * */
export const getItem = (key) => {
	const data = window.localStorage.getItem(key)
	// 为什么这里像上面一样判断？而是使用try catch。
	// 因为很难判断JSON格式的数据，处理起来比较麻烦，除非写正则表达式之类的判断
	try {
		// 如果data是一个有效的JSON格式字符串就是成功的，会进入try代码块里，获取时，转成对象字符串
		return JSON.parse(data)
	} catch (err) {
		// 如果 data 数据不是有效的，那就原封不动的直接返回
		return data
	}
}

/*
 * 删除数据
 * */

export const removeItem = (key) => {
	window.localStorage.removeItem(key)
}
