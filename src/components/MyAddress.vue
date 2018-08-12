<template>
	<div id="main">
		<div class="content clear">
			<div class="account-wrapper">
				<div class="account-sidebar">
					<div class="avatar gray-box clear">
						<div class="js-account-sidebar-info">
							<img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
						</div>
						<div class="box-inner">
							<ul class="account-nav">
								<li class="current">
									<a href="javascript:;">我的订单</a>
								</li>
								<li class="">
									<a href="javascript:;">收货地址</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="account-content">
					<div class="account-address">
						<div class="gray-box clear">
							<div class="title pre-title">
								<h2 class="fn-left">收货信息</h2>
								<span class="gray-blue-btn js-add-address">
									<a class="add"
                                        @click="$store.commit('MyAdd_show')"
                                    >添加新地址</a>
								</span>
							</div>
							<div class="box-inner clear" 
							v-for="item in receiveInfo_landLine" 
							:key="item.landLine">
								<div class="address-list-item default-item" data-id="765532">
									<div class="name fn-left">
										<div class="name-cell">{{receiveInfo_landLine[0].name}}</div>
									</div>
									<div class="detail fn-left">
										<div class="detail-cell">
											{{receiveInfo_landLine[0].province}}
											{{receiveInfo_landLine[0].county}}
											{{receiveInfo_landLine[0].add}}
										</div>
									</div>
									<div class="operation fn-right">
										<div class="operation-cell">
											<a class="gray-edit-btn js-edit-address">修改</a>
											<span class="red-del-btn js-del-address">
												<a>删除</a>
												<em>删除</em>
											</span>
										</div>
									</div>
									<div class="default fn-right"> （默认地址） </div>
									<div class="telephone fn-right">{{receiveInfo_landLine[0].phone}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import "@/assets/css/address.css";
import addList from "@/assets/datas/addList";
export default {
  name: "MyAddress",
  data() {
    return {
      addList
    };
  },
  computed: {
    receiveInfo_landLine() {
      return addList.receiveInfo.filter(item => item.default);
    }
  }
};
</script>
<style>
</style>
