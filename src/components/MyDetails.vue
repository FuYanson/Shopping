<template>
<div id="main">
    <div class="store-content item">
        <div class="item-box">
            <div class="gallery-wrapper">
                <div class="gallery">
                    <!-- 大图 -->
                    <div class="thumbnail">
                        <ul>
                            <li v-for="(item,index) in datas.ali_images" 
                                :key="item.sku_id"
                                @click="now = index"
                                :class="{on:index===now}"
                            >
                                <img :src='datas.ali_images[index]+"?x-oss-process=image/resize,w_54/quality,Q_90/format,webp"' />
                            </li>
                        </ul>
                    </div>
                    <!-- 侧图 -->
                    <div class="thumb">
                        <ul>
                            <li v-for="(item,index) in datas.ali_images" 
                                :key="item.sku_id" 
                                :class="{on:index===now}"
                            >
                                <img :src='datas.ali_images[index]+"?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="sku-custom-title">
                    <div class="params-price">
                        <span>
                            <em>¥</em>
                            <i>{{datas.price}}</i>
                        </span>
                    </div>
                    <div class="params-info">
                        <h4>{{datas.title}}</h4>
                        <h6>{{datas.sub_title}}</h6>
                    </div>
                </div>
                <div class="sku-dynamic-params-panel">
                    <div class="sku-dynamic-params clear">
                        <span class="params-name">{{datas.spec_json.show_name}}</span>
                        <ul class="params-colors">
                            <li v-for="(item) in datas.sku_list" 
                                :key="item.id"
                                :class="{cur:item.id == dow}"
                                @click="dow = item.id ,fn(dow,item.id)"
                            >
                                <a><i><img :src='"http://img01.smartisanos.cn/"+item.image+"/20X20.jpg"'/></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="sku-dynamic-params clear">
                        <div class="params-name">数量</div>
                        <div class="params-detail clear">
                            <div class="item-num js-select-quantity">
                                <span class="down down-disabled" 
                                    @click="num>1 ? num-- : num = 1">-</span>
                                <span class="num">{{num}}</span>
                                <span class="up up-disabled" 
                                    @click="num<datas.sku_list[0].limit_num ? num++ : num=datas.sku_list.limit_num ">+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sku-status">
                    <div class="cart-operation-wrapper clearfix">
                       
                        <span class="blue-title-btn js-add-cart"
                            @click="$store.commit('MyCart_list',datas)"
                            ><a>加入购物车</a>
                        </span>
                        <span class="gray-title-btn" 
                            @click="$router.push('/MyPurchase/'+datas.sku_id)"
                            ><a>现在购买</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import "@/assets/css/item.css";

// 获取对比数据
import datas from "@/assets/datas/newItemsData.js";

export default {
  name: "MyDetails",
  data() {
    return {
      now: 0,
      dow: 0,
      num: 1
    };
  },
  computed: {
    datas() {
      var res = datas.filter(item => {
        if (item.sku_id == this.dow) {
          item.LEngth = this.num;
          return item;
        }
      });
      return res[0];
    }
  },
  methods: {
    addTodo() {
      console.log(1);
    },
    // 切换路由参数
    fn(item, index) {
      item = this.$router.push("/MyDetails/" + index);
    }
  },
  created() {
    this.dow = this.id;
  },
  // 接收 $route.params
  props: ["id"]
};
</script>
<style>
</style>
