<template>
    <div id="main" class="hander-car">
			<!-- {{$store.state.cartList}} -->
			<hr/>
			<!-- {{this.id}} -->
			<div class="store-content">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<div class="empty-label hide">
							<h3>您的购物车中还没有商品</h3>
							<a class="link" href="javascript:;">现在选购</a>
						</div>
						<div>
							<div class="cart-table-title">
								<span class="name">商品信息</span>
								<span class="operation">操作</span>
								<span class="subtotal">小计</span>
								<span class="num">数量</span>
								<span class="price">单价</span>
							</div>
							<div class="cart-table">
								<div class="cart-group" >
									<!--购物列表-->
									<div class="cart-top-items" v-for="item in $store.state.cartList" :key="item.sku_id">
										<div class="cart-items">
											<div class="items-choose">
				<!-- 单选按钮 -->
												<!--  checkbox-on-->
												<span class="blue-checkbox-new" 
												@click="changeIsSelect(item)" 
												:class="{'checkbox-on': item.isSelect}" >
												<a></a></span>
											</div>
											<!-- 图片 -->
											<div class="items-thumb">
												<img :src='item.ali_image'>
												<a href="javascript:;" target="_blank"></a>
											</div>
											<div class="name hide-row" >
												<div class="name-table">
													<a href="javascript:;" target="_blank">{{item.title}}</a>
													<ul class="attribute">
														<li>{{item.spec_json.show_name}}</li>
													</ul>
												</div>
											</div>
											<div class="operation">
												<a class="items-delete-btn"  
												 @click="$store.commit('MyCart_delete',item.sku_id)"
												></a>
											</div>
											<div class="subtotal">¥ {{item.price*item.LEngth}}</div>
											<div class="item-cols-num">
												<div class="select js-select-quantity">
													<span class="down " 
													:class="{'down-disabled':item.LEngth<=1}"
													@click="s_reduce(item)">-</span>
													<span class="num">
														<input type="text" 
														style="display: inline-block;" 
														v-model="item.LEngth">
														<ul>
															<li>1</li>
															<li>2</li>
														</ul>
													</span>
													<span class="up" 
													@click="s_add(item)"
													>+</span>
														
												</div>
											</div>
											<div class="price">¥ {{item.price}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cart-bottom-bg fix-bottom">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
<!--全选按钮 -->
									<span 
									class="blue-checkbox-new " 
									@click="changeIsSelectAll"
									:class="{'checkbox-on':ischecked}"
									>
									<a></a></span>
									全选
								</div>
								<div class="delete-choose-goods">删除选中的商品</div>
							</div>
						</div>
						<div class="shipping">
							<div class="shipping-box">
								<div class="shipping-total shipping-num">
									<h4 class="">
										已选择<i>{{ischecked_piece}}</i> 件商品
									</h4>
									<h5>
										共计 <i>{{ischecked_Total}}</i> 件商品
									</h5>
								</div>
								<div class="shipping-total shipping-price">
									<h4 class="">
										应付总额：<span>￥</span>
										<i >{{ischecked_money}}</i> 
									</h4>
									<h5 class="shipping-tips">
										应付总额不含运费
									</h5>
									
								</div>
							</div>
							<span class="jianguo-blue-main-btn big-main-btn js-checkout "
								@click="goPayment"	
							>
								<a>现在结算</a>
							</span>
						</div>
					</div>
					
				</div>
				<!-- {{ischecked_money}} -->
			</div>
		
	</div>
</template>
<script>
import "@/assets/css/cart.css";
export default {
  name: "MyShoppingCart",
  data() {
    return {};
  },
  computed: {
    // 计算全选
    ischecked() {
      return (
        this.$store.state.cartList.every(item => item.isSelect) &&
        !!this.$store.state.cartList.length
      );
    },
    // 已选件数
    ischecked_piece() {
      return this.$store.state.cartList.filter(item => item.isSelect).length;
    },
    // 已选总件数
    ischecked_Total() {
      return this.$store.state.cartList
        .filter(item => item.isSelect)
        .reduce((ischecked_Total, now) => ischecked_Total + now.LEngth, 0);
    },
    // 共计价格
    ischecked_money() {
      return this.$store.state.cartList
        .filter(item => item.isSelect)
        .reduce(
          (ischecked_money, now) => ischecked_money + now.price * now.LEngth,
          0
        );
    },
    orderData() {
      return this.$store.state.cartList.filter(item => item.isSelect);
    }
  },
  methods: {
    goPayment() {
      this.$store.commit("setOrderList", this.orderData);
      this.$router.push("/MyPurchase/");
    },
    // 减
    s_reduce(item) {
      if (item.LEngth > 1) {
        item.LEngth--;
        // 截取数据 添加 到缓存区
        var res = item.LEngth;
        res.push(this.orderData);
      }
    },
    // 增
    s_add(item) {
      if (item.LEngth < item.limit_num) {
        item.LEngth++;
      } else {
        this.$store.state.showPrompt = true;
      }
    },
    // 单选
    changeIsSelect(item) {
      this.$set(item, "isSelect", !item.isSelect);
    },
    // 全选
    changeIsSelectAll() {
      if (this.ischecked) {
        this.$store.state.cartList.forEach(item => {
          this.$set(item, "isSelect", false);
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          this.$set(item, "isSelect", true);
        });
      }
    }
  },
  props: ["id"]
};
</script>
<style>
</style>
