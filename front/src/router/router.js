import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import huanzheList from '../pages/huanzhe/list'
import huanzheDetail from '../pages/huanzhe/detail'
import huanzheAdd from '../pages/huanzhe/add'
import yishengList from '../pages/yisheng/list'
import yishengDetail from '../pages/yisheng/detail'
import yishengAdd from '../pages/yisheng/add'
import keshiList from '../pages/keshi/list'
import keshiDetail from '../pages/keshi/detail'
import keshiAdd from '../pages/keshi/add'
import zuozhenyishengList from '../pages/zuozhenyisheng/list'
import zuozhenyishengDetail from '../pages/zuozhenyisheng/detail'
import zuozhenyishengAdd from '../pages/zuozhenyisheng/add'
import yuyueguahaoList from '../pages/yuyueguahao/list'
import yuyueguahaoDetail from '../pages/yuyueguahao/detail'
import yuyueguahaoAdd from '../pages/yuyueguahao/add'
import yuyuequxiaoList from '../pages/yuyuequxiao/list'
import yuyuequxiaoDetail from '../pages/yuyuequxiao/detail'
import yuyuequxiaoAdd from '../pages/yuyuequxiao/add'
import dianzibingliList from '../pages/dianzibingli/list'
import dianzibingliDetail from '../pages/dianzibingli/detail'
import dianzibingliAdd from '../pages/dianzibingli/add'
import chufangjiluList from '../pages/chufangjilu/list'
import chufangjiluDetail from '../pages/chufangjilu/detail'
import chufangjiluAdd from '../pages/chufangjilu/add'
import quyaojiluList from '../pages/quyaojilu/list'
import quyaojiluDetail from '../pages/quyaojilu/detail'
import quyaojiluAdd from '../pages/quyaojilu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'huanzhe',
					component: huanzheList
				},
				{
					path: 'huanzheDetail',
					component: huanzheDetail
				},
				{
					path: 'huanzheAdd',
					component: huanzheAdd
				},
				{
					path: 'yisheng',
					component: yishengList
				},
				{
					path: 'yishengDetail',
					component: yishengDetail
				},
				{
					path: 'yishengAdd',
					component: yishengAdd
				},
				{
					path: 'keshi',
					component: keshiList
				},
				{
					path: 'keshiDetail',
					component: keshiDetail
				},
				{
					path: 'keshiAdd',
					component: keshiAdd
				},
				{
					path: 'zuozhenyisheng',
					component: zuozhenyishengList
				},
				{
					path: 'zuozhenyishengDetail',
					component: zuozhenyishengDetail
				},
				{
					path: 'zuozhenyishengAdd',
					component: zuozhenyishengAdd
				},
				{
					path: 'yuyueguahao',
					component: yuyueguahaoList
				},
				{
					path: 'yuyueguahaoDetail',
					component: yuyueguahaoDetail
				},
				{
					path: 'yuyueguahaoAdd',
					component: yuyueguahaoAdd
				},
				{
					path: 'yuyuequxiao',
					component: yuyuequxiaoList
				},
				{
					path: 'yuyuequxiaoDetail',
					component: yuyuequxiaoDetail
				},
				{
					path: 'yuyuequxiaoAdd',
					component: yuyuequxiaoAdd
				},
				{
					path: 'dianzibingli',
					component: dianzibingliList
				},
				{
					path: 'dianzibingliDetail',
					component: dianzibingliDetail
				},
				{
					path: 'dianzibingliAdd',
					component: dianzibingliAdd
				},
				{
					path: 'chufangjilu',
					component: chufangjiluList
				},
				{
					path: 'chufangjiluDetail',
					component: chufangjiluDetail
				},
				{
					path: 'chufangjiluAdd',
					component: chufangjiluAdd
				},
				{
					path: 'quyaojilu',
					component: quyaojiluList
				},
				{
					path: 'quyaojiluDetail',
					component: quyaojiluDetail
				},
				{
					path: 'quyaojiluAdd',
					component: quyaojiluAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
