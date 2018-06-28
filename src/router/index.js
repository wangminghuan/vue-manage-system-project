import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router=new Router({
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '*',
			redirect: '/404'
		},
		{
			path: '/home',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [
				{
					path: '/',
					component: resolve => require(['../components/page/welcome.vue'], resolve)
				},
				// 商户管理
				{
					path: '/merchant_check_list',
					component: resolve => require(['../components/page/merchant/checkList.vue'], resolve)
				},
				{
					path: '/merchant_servicer_list',
					component: resolve => require(['../components/page/merchant/servicerList.vue'], resolve)
				},
				{
					path: '/merchant_supplier_list',
					component: resolve => require(['../components/page/merchant/supplierList.vue'], resolve)
				}
			]
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
		{
			path: '/404',
			component: resolve => require(['../components/common/404.vue'], resolve)
		},
		{
			path: '/403',
			component: resolve => require(['../components/common/403.vue'], resolve)
		}

	]
})
// 登录校验
router.beforeEach((to,from,next) =>{
	next();
    if(to.path==="/login"){
         next()
     }else{
		 next();
    //      if(!sessionStorage.getItem('__uid__') || !sessionStorage.getItem('__token__')){
    //          next({path:"/login"})
    //      }else{ 
             
    //  }
     }
 })
 export default router