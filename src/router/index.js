import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
// 默认
import MyGolist from '@/components/MyGolist';
// 查看详情
import MyDetails from '@/components/MyDetails';
// 去购物车
import MyShoppingCart from '@/components/MyShoppingCart';
// 去购买
import MyPurchase from '@/components/MyPurchase';
// 订单提交
import MyPayment from '@/components/MyPayment';
// 我的订单 
import MyOrder from '@/components/MyOrder';
// 我的订单地址
import MyAddress from '@/components/MyAddress';

export default new Router({
  routes: [
    // App 默认路由
    {
      path: '/',
      name: 'MyGolist',
      component: MyGolist
    },
    // MyTolist 查看详情
    {
      path: '/MyDetails/:id',
      name: 'MyDetails',
      component: MyDetails,
      props: true
    },
    // MyShoppingCart 购物车
    {
      path: '/MyShoppingCart/:id',
      name: 'MyShoppingCart',
      component: MyShoppingCart,
      props: true
    },
    // MyPurchase  现在购买
    {
      path: '/MyPurchase/',
      name: 'MyPurchase',
      component: MyPurchase,
      props: true
    },
    // 提交订单成功
    {
      path: '/MyPayment/',
      name: 'MyPayment',
      component: MyPayment,
      props: true
    },
    // 我的订单
    {
      path: '/MyOrder/',
      name: 'MyOrder',
      component: MyOrder,
      props: true
    },
    // 我的订单地址
    {
      path: '/MyAddress/',
      name: 'MyAddress',
      component: MyAddress,
      props: true
    }

  ]
})
