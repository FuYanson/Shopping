<template>
    <!-- {{data}} -->
    <div class="item" >
        <div>
            <div class="item-img">
                <img :alt="data.name" 
                    :src='data.sku_info[now].ali_image+"?x-oss-process=image/resize,w_206/quality,Q_80/format,webp"'
                    style="opacity: 1;">
            </div>
            <h6>{{data.name}}</h6>
            <h3>{{data.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list" v-for="(item,index) in data.sku_info" :key="item.sku_id">
                    <li>
                        <a href="javascript:;" 
                        	@click="now=index"
                            :class="{active:index===now}">
                            <img :src='"http://img01.smartisanos.cn/"+item.spec_json.image+"/20X20.jpg"'>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <!-- 跳转 查看详情组件 -->
                    <a href="javascript:;" 
                        target="_blank" 
                        @click="goDetail()"
                    >查看详情</a>
                </span>
                <!-- 将数据 填入 仓库 Store文件 中  -->
                <span class="item-blue-btn" 
                        @click="addCart"
                    >加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i>
                <span>{{data.sku_info[now].price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <a href="javascript:;" target="_blank"></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "MyTolist",
  data() {
    return {
      now: 0
    };
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/MyDetails/" + this.data.sku_info[this.now].sku_id
        // query:{
        //     colorId: this.now
        // }
      });
    },
    addCart() {
      const data = {...this.data.sku_info[this.now], LEngth: 1 };
      this.$store.commit("MyCart_list",data);
    }
  },
  // 接收父组件 暴露值
  props: ["data"]
};
</script>
