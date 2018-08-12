<template>
	<div id="main">
		<!-- {{orderList}} -->
		<!-- {{addList}} -->
		<div class="content page-order-payment">
			<div class="gray-box clear">
				<div class="title">
					<h2>支付订单</h2>
				</div>
				<div class="box-inner order-info">
					<h3>提交订单成功</h3>
					<p class="payment-detail">请在 <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
					<p class="payment-detail">我们将在您完成支付后的 72 小时内发货</p>    
				</div>
				<div class="box-inner payment-checkout-panel clear">
					<span class="jianguo-blue-main-btn big-main-btn js-payment-order">
						<a>现在支付</a>
					</span>
					<span class="prices"> 应付金额：
						<em>
							<span>¥ </span>
							{{( My_price-DATAS.Voucher-DATAS.freight).toFixed(2)}}
						</em>
					</span>
				</div>
			</div>
			<div>
				<div class="confirm-detail">
					<div class="info-title">订单编号</div>
					<p class="info-detail">{{addList[0].landLine}}</p>
				</div>
				<div class="confirm-detail">
					<div class="info-title">收货信息</div>
					<p class="info-detail">姓名：{{addList[0].name}}</p>
					<p class="info-detail">联系电话：{{addList[0].phone}}</p>  
					<p class="info-detail">详细地址：{{addList[0].province}}{{addList[0].county}}{{addList[0].add}}</p>
				</div>
				<div class="confirm-detail">
					<div class="info-title">发票信息</div>
					<p class="info-detail">发票类型：电子发票</p>
					<p class="info-detail">发票抬头：个人</p>
					<p class="info-detail">发票内容：购买商品明细</p>
				</div>
			</div>
			<div class="confirm-table-title clear">
				<span class="name fn-left">商品信息</span>
				<span class="subtotal fn-right">小计</span>
				<span class="num fn-right">数量</span>
				<span class="price fn-right">单价</span>
			</div>
			<div class="confirm-goods-table">
				<div class="cart-items clear" 
				v-for="item in orderList" 
				v-if="item.isSelect" 
				:key="item.sku_id">
					<div class="name fn-left hide-row">
						<div class="name-cell"> 
							<a href="http://www.smartisan.com/shop/#/item/1000271/" 
							target="_blank">{{item.title}} （ {{item.spec_json.show_name}} ）
							</a>
							<br>
						</div>
					</div>
					<div class="subtotal fn-right">
						<div class="subtotal-cell">¥ {{item.price*item.LEngth}}</div>
					</div>
					<div class="goods-num fn-right">{{item.LEngth}}</div>
					<div class="price fn-right">¥ {{item.price}}</div> 
				</div>
			</div>
			<div class="order-discount-line">
				<p> 商品总计： <span>¥ {{( My_price-DATAS.Voucher-DATAS.freight).toFixed(2)}}</span> </p>
				<p> 现金劵：   <span>+ ¥{{DATAS.Voucher.toFixed(2)}}</span> </p>
				<p> 运费：     <span>+ ¥ {{DATAS.freight.toFixed(2)}}</span> </p>
			</div>
		</div>
	</div>
</template>
<script>
import "@/assets/css/payment.css";
import addLists from "@/assets/datas/addList.js";
export default {
  name: "MyPayment",
  data() {
    return {
      addLists
    };
  },
  created() {
    // console.log(addLists);
  },
  computed: {
    //   商品信息
    orderList() {
      return this.$store.state.orderList;
    },
    // 个人信息
    addList() {
      return addLists.receiveInfo.filter(item => item.default);
    },
    // 运费+现金券
    DATAS() {
      return this.$store.state.DATAS;
    },
    // 总价钱
    My_price() {
      return this.$store.state.orderList.reduce(
        (My_price, now) => My_price + now.LEngth * now.price,
        0
      );
    }
  }
};
</script>
<style>
</style>
