import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from '@/layout/h5.vue'
let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: layout,
    children: [{
      path: 'home',
      component: ()=> import('@/pages/Home.vue'),
      meta: {
        title: '主页'
      }
    }]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
