

//封装axios,添加请求拦截器（两个请求头）

import axios from "axios";

// 设置基础域名（请求地址）

axios.defaults.baseURL = "https://m.maizuo.com/";

//请求拦截器处理（添加两个请求头）
axios.interceptors.request.use(
  function(config) {
    //默认为电影列表页
    let host = "mall.film-ticket.film.list";
    //info为后面传输的数据，可自定义名称
    let info = config.headers.info;

    //影院页
    if (info == "cinema") {
      host = "mall.film-ticket.cinema.list";
    }
    // 影片详情页
    if (info == "info") {
      host = "mall.film-ticket.film.info";
    }
    //城市列表页面
    if (info == "city") {
      host = "mall.film-ticket.city.list";
    }


    //设置herder头
    
    config.headers = {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022376242886965347221505","bc":"110100"}',

      "X-Host": host,
    };
    return config;
  },
  function(err) {
    //错误处理
  }
);
//导出，供之后使用
export default axios;
