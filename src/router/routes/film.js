// 电影模块路由
export default {
  path: "/film",
  // 连接对应vue文件
  //@在这里表示为src文件夹，后缀vue可不加
  component: () => import("@/views/Film/Film"),

  redirect: "/film/nowplaying",

  children: [
    {
      path: "nowplaying",
      component: () => import("@/views/Film/NowPlaying"),
    },
    {
      path: "comingsoon",
      component: () => import("@/views/Film/ComingSoon"),
    },
  ],
};
