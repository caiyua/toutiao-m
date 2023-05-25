import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Qa from '@/views/qa'
import Video from '@/views/video'
import My from '@/views/my'

const routes = [
	{ path: '/login', name: 'login', component: Login },
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{ path: 'home', name: 'home', component: Home },
			{ path: 'qa', name: 'qa', component: Qa },
			{ path: 'video', name: 'video', component: Video },
			{ path: 'my', name: 'my', component: My },
		],
	},
]

export default routes
