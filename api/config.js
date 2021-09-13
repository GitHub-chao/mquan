// 环境配置设置
let webUrl = 'https://superapi.51softwarebox.com/api'
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	webUrl = 'https://localhost:44359/api'
} else {
	// 生产环境
	webUrl = 'https://superapi.51softwarebox.com/api'
}

const config = {
	webUrl: webUrl
}

export default config
