//入口文件

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由模块化文件
import centerRouter from "./routes/center";
import cinemaRouter from "./routes/cinema";
import filmRouter from "./routes/film";
import detailRouter from "./routes/detail";
import cityRouter from "./routes/city";
import vuexRouter from "./routes/vuex";
import loginRouter from "./routes/login";

const routes = [
  {
    path: "/",
    //路由重定向为首页
    redirect: "/film",
  },

  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  loginRouter,
];

const router = new VueRouter({
  mode: "history",
  // 前缀
  // base: process.env.BASE_URL,
  routes,
});

// 路由守卫（防翻墙，登陆后才可访问）
router.beforeEach((to, from, next) => {
  let arr = [
    //存需要登录的地址
    "/cinema",
  ];
  if (arr.includes(to.path)) {
    //进入cinema页面之前需要验证用户是否登录
    if (localStorage.getItem("_token")) {
      //已登录，继续浏览
      next();
    } else {
      //未登录，转入登录页面
   next({path:'/login',query:{'refer':to.fullPath}});
    }
  } else {
    next();
  }
});

export default router;
