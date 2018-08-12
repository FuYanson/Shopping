<template>
    <div class="nav-cart-wrapper">
        <!-- {{this.$store.state.cartList}} -->
        <div class="nav-cart-list">
            <!-- 如果购物车内没有商品则显示 -->
            <div class="empty" v-show="$store.state.cartList.length ===0">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
            <!-- 如果购物车内有商品则显示 -->
            <div class="full" v-show="$store.state.cartList.length !==0">
                <div class="nav-cart-items">
                    <ul>
                        <li class="clear" v-for="item in Exposure_data" :key="item.sku_id">
                            <div class="cart-item js-cart-item cart-item-sell">
                                <div class="cart-item-inner">
                                    <div class="item-thumb">
                                        <img :src='item.ali_image'>
                                    </div>
                                    <div class="item-desc">
                                        <div class="cart-cell">
                                            <h4>
                                                <a href="#/item/100027401">{{item.title}}</a>
                                            </h4>
                                            <p class="attrs">
                                                <span>{{item.spec_json.show_name}}</span>
                                            </p>
                                            <h6>
                                                <span class="price-icon">¥</span>
                                                <span class="price-num">{{item.price}}</span>
                                                <span class="item-num">x {{item.LEngth}}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="del-btn"    
                                        @click="$store.commit('MyCart_delete',item.sku_id)"
                                        >删除</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-cart-total">
                    <p>共
                        <strong class="ng-binding">{{$store.getters.My_Total}}</strong> 件商品</p>
                    <h5>合计：
                        <span class="price-icon">¥</span>
                        <span class="price-num ng-binding">{{$store.getters.My_price.toFixed(2)}}</span>
                    </h5>
                    <h6>
                        <!-- {{Exposure_data[0].sku_id}} -->
                        <a class="nav-cart-btn"
                            @click="$router.push('/MyShoppingCart/'+Exposure_data[0].sku_id)"
                        >去购物车</a>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "MyCart",
  data() {
    return {};
  },
  computed: {
    //   获取数据
    Exposure_data() {
      return this.$store.state.cartList;
    }
  }
};
</script>
<style>
</style>

