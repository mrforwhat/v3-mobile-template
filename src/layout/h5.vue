<template>
  <div class="app" flex="dir:top">
    <div class="app-header">
      <var-app-bar
        round
        image="https://varlet.gitee.io/varlet-ui/tree.jpeg"
        image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
      >
        标题
        <template #left>
          <var-button round text color="transparent" text-color="#fff">
            <var-icon name="menu" :size="24" />
          </var-button>
        </template>

        <template #right>
          <var-button round text color="transparent" text-color="#fff">
            <var-icon name="map-marker-radius" :size="24" />
          </var-button>
          <var-button round text color="transparent" text-color="#fff">
            <var-icon name="star" :size="24" />
          </var-button>
          <var-button round text color="transparent" text-color="#fff">
            <var-icon name="heart" :size="24" />
          </var-button>
        </template>
      </var-app-bar>
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <var-bottom-navigation v-model:active="active">
        <var-bottom-navigation-item label="标签" icon="home" />
        <var-bottom-navigation-item label="标签" icon="magnify" />
        <var-bottom-navigation-item label="标签" icon="heart" />
        <var-bottom-navigation-item label="标签" icon="account-circle" />
      </var-bottom-navigation>
    </div>
  </div>
</template>
<script setup lang="ts">
    const active = ref(0)
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  &-header {
    flex: 0 0 auto;
  }
  &-body {
    flex: 1 0 auto;
    overflow-y: scroll;
    background: #f5f5f5;
  }
  &-footer {
    flex: 0 0 auto;
  }
}
</style>
