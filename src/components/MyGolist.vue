<template>
    <div id="main">
			<!-- {{data}} -->
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li>
							<a href="javascript:;" class="active">综合排序</a>
						</li>
						<li>
							<a href="javascript:;" class="">销量排序</a>
						</li>
						<li>
							<a href="javascript:;" class="">价格低到高</a>
						</li>
						<li>
							<a href="javascript:;" class="">价格高到低</a>
						</li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<!-- 列表内容组件 -->
						<my-tolist  v-for="item in data" :data="item" :key="item.id"></my-tolist>
					</div>
				</div>
		</div>
	</div>
</template>
<script>
import "@/assets/css/goodsList.css";
import data from "@/assets/datas/newGoodsData.js";

// 获取列表内容组件
import MyTolist from "@/components/MyTolist";
export default {
  name: "MyGolist",
  data() {
    return {
			// 暴露 返回值
      data
    };
	},
	// 
  components: {
    MyTolist
  }
};
</script>
