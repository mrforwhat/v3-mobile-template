import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "主页",
    },
    component: ()=> import('@/pages/Home.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
