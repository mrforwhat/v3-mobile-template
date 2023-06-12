<template>
 <div class="page" flex="main-cross:center">
    <div>{{ value }}</div>        
 </div>
</template>
<script setup lang="ts">
const value = ref('123')
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