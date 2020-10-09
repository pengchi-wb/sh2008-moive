//入口文件

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由模块化文件
import centerRouter from "./routes/center";
import cinemaRouter from "./routes/cinema";
import filmRouter from "./routes/film";

const routes = [
  {
    path: "/",
    //路由重定向为首页
    redirect: "/film",
  },

  centerRouter,
  cinemaRouter,
  filmRouter,
];

const router = new VueRouter({
  mode: "history",
  // 前缀
  // base: process.env.BASE_URL,
  routes,
});

export default router;
