<template>
    <div id="main">
        <!-- {{this.$store.state.orderList}} -->
        <a href="javascript:;"></a>
        <div class="content page-order-checkout checkout">
            <div class="js-checkout-address-box">
                <div class="gray-box clear">
                    <div class="title columns-title pre-title">
                        <h2>收货信息</h2>
                    </div>
                    <div class="box-inner js-checkout-address-panel ">
                        <div class="address-common-table js-multiple-address-panel">
                            <ul class="address-item-list clear js-address-item-list">
                                <li class="js-choose-address "
                                :class="{'selected-address-item':item.default}"
                                @click="ischeked(item)"
                                v-for="(item)  in $store.state.addressList" 
                                :key="item.provinceId">
                                    <div class="address-item">
                                        <div class="name-section"> {{item.name}}  </div>
                                        <div class="mobile-section">{{item.pgone}}</div>
                                        <div class="detail-section"> 
                                            {{item.province}} {{item.city}} {{item.county}}
                                            <br> 
                                            {{item.add}}
                                        </div>
                                    </div>
                                    <div class="operation-section">
                                        <span class="update-btn js-edit-address">修改</span>
                                        <span class="delete-btn js-delete-address">删除</span>
                                    </div>
                                </li>
                                <li class="add-address-item js-add-address"
                                @click="showFn">
                                    <p>使用新地址</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gray-box">
                <div class="title">
                    <h2>发票信息</h2>
                </div>
                <div class="box-inner invoice-box js-invoice-box"> 
                    <p class="invoice-detail"> 发票类型：电子发票 </p> 
                    <div class="invoice-detail"> 发票抬头： 
                        <div class="radio-box"> 
                            <label> 
                                <input type="radio" class="hide"> 
                                <span class="blue-radio blue-radio-on"><a></a></span>  个人
                            </label> 
                            <label> 
                                <input type="radio" class="hide"> 
                                <span class="blue-radio"><a></a></span>  单位
                            </label> 
                        </div> 
                        <div class="module-form-row form-item fn-hide js-invoice-title"> 
                            <div class="module-form-item-wrapper no-icon small-item"> 
                                <i>请填写公司发票抬头</i> 
                                <input type="text" class="js-verify"> 
                            </div> 
                        </div> 
                    </div> 
                    <p class="invoice-detail">发票内容：购买商品明细</p> <p class="invoice-label"> 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 </p>
                </div>
            </div>
            <div class="gray-box">
                <div class="title pre-title">
                    <h2>购物清单</h2> 
                </div>
                <div class="box-inner ui-goods-cart">
                    <div class="gray-sub-title cart-table-title"> 
                        <span class="name">商品名称</span> 
                        <span class="subtotal">小计</span> 
                        <span class="num">数量</span> 
                        <span class="price">单价</span> 
                    </div>
                    <div class="cart-table" v-for="item  in  this.$store.state.orderList" :key="item.sku_id">
                        <div class="cart-group js-cart-group">
                            <div class="cart-items">
                                <div class="items-thumb">  
                                    <a href="javascript:;" target="_blank">
                                        <img :src="item.ali_image">
                                    </a>  
                                </div>
                                <div class="name hide-row">
                                    <div class="name-cell"> 
                                        <a href="javascript:;" 
                                        target="_blank">
                                        {{item.title}} ({{ item.spec_json.show_name }})</a>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    <div class="subtotal-cell"> ¥ {{item.price*item.LEngth}} </div> 
                                </div>
                                <div class="goods-num">{{item.LEngth}}</div>
                                <div class="price">¥ {{item.price.toFixed(2)}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-inner"> 
                    <div class="order-discount-line"> 
                        <p> 商品总计： <span>¥ {{Total.toFixed(2)}}</span> </p> 
                        <p> 运费： <span>+ ¥ {{DATAS.freight.toFixed(2)}}</span> </p>  
                        <p class="discount-line js-discount-cash"> 
                            <em>现金券</em>： 
                            <span> - ¥ {{DATAS.Voucher.toFixed(2)}} </span> 
                        </p>  
                    </div> 
                </div>
                <div class="box-inner"> 
                    <div class="last-payment clear"> 
                        <span class="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"
                        @click="$router.push('/MyPayment/')"> 
                            <a>提交订单</a> 
                        </span> 
                        <span class="prices fn-right">应付金额： 
                            <em>¥ {{(Total-DATAS.freight-DATAS.Voucher).toFixed(2)}}</em>
                        </span> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "@/assets/css/checkout.css";
export default {
  name: "MyPurchase",
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state.addressList);
    // console.log(this.$store.state);
  },
  computed: {
    Total() {
      return this.$store.state.orderList.reduce(
        (Total, now) => Total + now.LEngth * now.price,
        0
      );
    },
    DATAS() {
      return this.$store.state.DATAS;
    }
  },
  methods: {
    showFn() {
      this.$store.commit("MyAdd_show");
    },
    ischeked(isitem) {
      // 先清除  在添加
      this.$store.state.addressList.map(item => (item.default = false));
      isitem.default = true;
      //   console.log(this.addList);
    }
  }
};
</script>
<style>
</style>
