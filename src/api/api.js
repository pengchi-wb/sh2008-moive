//发送具体的请求

//导入需要使用的模块
//默认导入
import http from "@/api/http";
//按需导入
import {nowPlayingListUrl,comingSoonListUrl,moiveDetailUrl} from "@/config/url";


//请求正在热映的列表数据
export const nowPlayingListData = (pageNum) => {
   // http.default.headers.info="";
   http.defaults.headers.info="";
   return http.get(nowPlayingListUrl + pageNum);
};

//请求即将上映的列表数据
export const comingSoonListData = (pageNum) => {
   http.defaults.headers.info="";
   return http.get(comingSoonListUrl + pageNum);
};


//请求详情页数据
export const moiveDetailData = (filmId) => {
   //设置请求头
   http.defaults.headers.info="info";
   return http.get(moiveDetailUrl + filmId);
};

