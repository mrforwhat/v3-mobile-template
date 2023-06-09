<template>
 <div class="page" flex="main-cross:center">
    <var-input placeholder="请输入文本" v-model="value" />
 </div>
</template>
<script setup lang="ts">
const value = ref('')
</script>
<style lang="scss" scoped>
    .page{
        width: 100%;
        height: 100vh;
    }
    p{
        font-size: 24px;
    }
</style>