<template>
  <div class="page" flex="main-cross:center">
    <var-button @click="test">测试</var-button>
  </div>
</template>
<script setup lang="ts">
import api from "@/utils/api";
import { Snackbar } from "@varlet/ui";
import "@varlet/ui/es/snackbar/style/index";
const value = ref("123");
onMounted(async () => {});
const test = async () => {
  const rs = await api.get("front/api/getActDetails/678858669", { id: 1 });
  if (rs.status == 200) {
    Snackbar("请求成功");
    console.log(rs);
  } else {
    console.log(rs);
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
p {
  font-size: 24px;
}
.test {
  display: flex;
  font-size: 30px;
}
</style>
