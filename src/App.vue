<template>
  <div id="app" v-cloak>
    <my-head></my-head>
    <router-view/>
    <my-prompt v-show="$store.state.showPrompt"></my-prompt>
    <my-addresspop v-show="$store.state.showAddpop"></my-addresspop>
  </div>
</template>

<script>
// 头部导航复用
import MyHead from "@/components/MyHead";
// 商品限制弹框
import MyPrompt from "@/components/MyPrompt";
// 管理地址信息
import MyAddresspop from "@/components/MyAddresspop";

export default {
  name: "App",
  components: {
    MyHead,
    MyPrompt,
    MyAddresspop
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>

