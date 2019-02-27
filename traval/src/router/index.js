import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import CityRaiders from '@/components/more/cityRaiders/cityRaiders'
import Distination from '@/components/more/distination/distination'
import My from '@/components/more/my/my'
import More from '@/components/more/more'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/distination',
       redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
			component:Home,
    },
		{
		  path: '/more',
		  name:'more',
			component:More,
		},
    {
      path: '/more/cityRaiders',
      name:'cityRaiders',
			component:CityRaiders,
    },
    {
      path: '/more/distination',
      name:'distination',
			component:Distination,
    },
    {
      path: '/more/my',
      name:'my',
			component:My,
    },
    {
			path:"**",
			component:Home
		}
    
  ]
})
