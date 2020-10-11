//详情页路由模块
export default {
  path: "/film/:filmId",
  name: "detail",
  component: () => import("@/views/Detail/Detail"),
};
