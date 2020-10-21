//详情页路由模块
export default {
  path: "/films/:filmId",
  name: "detail",
  component: () => import("@/views/Detail/Detail"),
};

// mall.film-ticket.schedule.list