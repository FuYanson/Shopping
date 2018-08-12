import Vue from "vue"
import Vuex from "vuex"
import {receiveInfo} from '../assets/datas/addList';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    showCart: false,
    // 购物车列表
    cartList: [],
    // 商品限制弹框
    showPrompt: false,
    // 管理收货地址
    showAddpop: false,
    // 全选按钮
    showButton: false,
    // 订单列表
    orderList: [],
    // 运费 + 现金券
    DATAS: {
      // 运费
      "freight": 0,
      // 现金券
      "Voucher": 5,
    },
    addressList: receiveInfo
    // // 订单提交支付
    // OrderPayment: [],
  },
  getters: {
    // 计算总件数
    My_Total(state) {
      return state.cartList.reduce(
        (My_Total, now) =>
        My_Total + now.LEngth, 0
      )
    },
    // 计算总价钱
    My_price(state) {
      return state.cartList.reduce(
        (My_price, now) =>
        My_price + now.LEngth * now.price, 0
      )
    },
    // 获取订单列表
    getOrderList(state) {
      return state.orderList;
    }
  },
  mutations: {
    // 显示购物车
    MyCart_show(state) {
      state.showCart = true
    },
    // 隐藏购物车
    MyCart_hide(state) {
      state.showCart = false
    },
    // 商品限制弹层隐藏
    MyLimit_hide(state) {
      state.showPrompt = false
    },
    // 显示收货地址
    MyAdd_show(state) {
      state.showAddpop = true
    },
    // 隐藏收货地址
    MyAdd_hide(state) {
      state.showAddpop = false
    },
    // 添加列表
    MyCart_list(state, payload) {
      // console.log(payload)
      var res = state.cartList.find(item => item.sku_id === payload.sku_id);
      if (res) {
        // console.log(state.cartList)
        // 变量 循环 当前数据  如果相同  那么 进行++操作 否则 进行添加操作
        state.cartList = state.cartList.map(item => {
          if (item.sku_id === payload.sku_id) {
            console.log(payload)
            if (item.LEngth < item.limit_num) {
              item.LEngth += payload.LEngth;
            } else {
              state.showPrompt = true
            }
          }
          return item
        })
      } else {
        state.cartList.push(payload)
      };
      state.showCart = true
    },
    // 删除列表
    MyCart_delete(state, payload) {
      state.cartList = state.cartList.filter(item =>
        item.sku_id !== payload
      )
    },
    setOrderList(state, payload) {
      state.orderList = payload;
    }
  },

})

export default store;
