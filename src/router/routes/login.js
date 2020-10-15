//登录模块路由
export default {
    path: "/login",
    // 连接对应vue文件
    //@在这里表示为src文件夹，后缀vue可不加
    component: () => import("@/views/Auth/login.vue"),
  };