//发送具体的请求

//导入需要使用的模块
//默认导入
import http from "@/api/http";
//按需导入
import {
  nowPlayingListUrl,
  comingSoonListUrl,
  moiveDetailUrl,
  cinemaListUrl,
  cityListUrl,
} from "@/config/url";

//请求正在热映的列表数据
export const nowPlayingListData = (pageNum) => {
  // http.default.headers.info="";
  http.defaults.headers.info = "";
  return http.get(nowPlayingListUrl + pageNum);
};

//请求即将上映的列表数据
export const comingSoonListData = (pageNum) => {
  http.defaults.headers.info = "";
  return http.get(comingSoonListUrl + pageNum);
};

//请求详情页数据
export const moiveDetailData = (filmId) => {
  //设置请求头
  http.defaults.headers.info = "info";
  return http.get(moiveDetailUrl + filmId);
};

//请求影院列表数据
export const cinemaListData = (filmId) => {
  //设置请求头
  http.defaults.headers.info = "cinema";
  return http.get(cinemaListUrl);
};

//请求城市列表页数据
export const cityListData = async () => {
  //设置请求头
  http.defaults.headers.info = "city";
  let ret = await http.get(cityListUrl);

  //定义基本数据
  //城市信息
  let cities = ret.data.data.cities;

  //26个字母
  let codeList = [];
  //城市信息
  let dataList = [];
  //筛选后的首字母
  let indexList = [];

  //for循环生成26个字母
  for (let i = 65; i <= 90; i++) {
    codeList.push(String.fromCharCode(i));
  }

  codeList.forEach((e) => {
    //与城市信息的pinyin首字母作比较
    let tempArr = cities.filter((item) => e.toLowerCase() == item.pinyin.substr(0, 1));
    if (tempArr.length > 0) {
      indexList.push(e);
      dataList.push({
        index: e,
        data: tempArr,
      });
    }
  });

 //返回数据
 return Promise.resolve([dataList, indexList]);
};
