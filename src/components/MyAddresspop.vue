<template>
      <div id="pop">
        
	      <div class="module-dialog-layer" style="display: block;"></div>
          <div class="module-dialog clear module-dialog-address module-dialog-show">
            <div class="dialog-panel">
                <div class="topbar">
                    <div class="dialog-tit clear">
                        <h4 class="js-dialog-title">管理收货地址</h4>
                    </div>
                    <!--  @click="showFn" -->
                    <span class="dialog-close" @click="hideFn">x</span>
                </div>
                <div class="dialog-con js-dialog-container">
                    <div class="animate-layer">
                        <div class="dialog-inner js-address-add">
                            <div class="save-address-box">
                                <div class="address-form">
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input type="text" class="js-verify"  
                                            placeholder="收货人姓名"  v-model="datas.name">
                                        </div>
                                    </div>
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input type="text" class="js-verify" 
                                            placeholder="手机号" v-model="datas.phone">
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 area-code-w fn-left form-valid-item">
                                            <input type="text" class="js-verify js-address-area-code"
                                             placeholder="区号（可选）" v-model="datas.areaCode">
                                        </div>
                                        <div class="form-item-v3 telephone-w fn-right form-valid-item">
                                            <input type="text" class="js-verify js-address-telephone" 
                                            placeholder="固定电话（可选）">
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 select-item province-wrapper">
                                            <select name="province_code"
                                            v-model="datas.area" 
                                            @change="changevalue" 
                                            class="province select-province js-form-province js-verify">
                                                <option value="0" >请选择省份</option>
                                                <option 
                                                v-for="item in addList.provinceList" 
                                                :key="item.area_id"
                                               >
                                                {{item.area_name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                            <select class="city select-city js-form-city js-verify"
                                             @change="changevalue2"
                                              v-model="datas.city">
                                                <option value="0">请选择城市</option>
                                                <option 
                                                v-for="item in addList.provinceList[areaIndex].city_list" 
                                                :key="item.area_id"
                                                >
                                                    {{item.area_name}}
                                                </option>

                                            </select>
                                        </div>
                                        <div class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                            <select class="city select-city js-form-city js-verify" v-model="datas.lastArea">
                                                <option value="0">请选择区县</option>
                                                <option 
                                                v-for="item in addList.provinceList[areaIndex].city_list[cityIndex].county_list" 
                                                :key="item.area_id"
                                                >
                                                {{item.area_name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input type="text" class="js-verify" 
                                            placeholder="详细地址，如街道名称，楼层，门牌号码等" v-model="datas.add">
                                        </div>
                                    </div>
                                    <div class="module-form-row fn-clear">
                                        <input type="checkbox" class="hide">
                                        <span class="blue-checkbox"></span>设为默认
                                    </div>
                                    <div class="dialog-blue-btn big-main-btn  js-verify-address" 
                                         @click="clicks">
                                        <a>保存</a>
                                    </div>
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
import "@/assets/css/addresspop.css";
import addList from "@/assets/datas/addList.js";
export default {
  name: "MyAddresspop",
  data() {
    return {
      addList,
      areaIndex: 0,
      cityIndex: 0,
      datas: {
        name: "", //姓名
        phone: "", //手机号码
        areaCode: "", // 区号
        landLine: "", //订单号
        province: "", // 省份
        citys: "", // 城市名
        add: "", // 地址信息
        default: false, // 状态
        area: "0",
        city: "0",
        lastArea: "0"
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    changevalue(e) {
      //   console.log(this.datas);
      this.areaIndex ==
        this.findIndex(this.datas.area, this.addList.provinceList);
      this.datas.city = "0";
      this.datas.lastArea = "0";
    },
    changevalue2(e) {
      //   console.log(this.datas);
      this.cityIndex ==
        this.findIndex(
          this.datas.city,
          this.addList.provinceList[this.areaIndex].city_list
        );
      console.log(this.cityIndex);
      this.datas.lastArea = "0";
    },
    hideFn() {
      this.$store.commit("MyAdd_hide");
    },
    findIndex(val, arr) {
      return arr.findIndex(item => {
        return item.area_id == val;
      });
    },
    clicks() {
      console.log(this.datas);
      
      this.$store.commit("MyAdd_hide");
      
    }
  },
  props: ["id"]
};
</script>
<style>
</style>
