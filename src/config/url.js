
//定义电影列表需要的地址
//1.按需导出
//正在热映

export const nowPlayingListUrl=
"gateway?cityId=110100&pageSize=10&type=1&k=8275250&pageNum="

//即将上映


export const comingSoonListUrl=
"gateway?cityId=110100&pageSize=10&type=2&k=9583451&pageNum="

//详情页
export const moiveDetailUrl=
"gateway?k=1575562&filmId="

//影院页面
export const cinemaListUrl=
"gateway?cityId=110100&ticketFlag=1&k=8263975"

//城市导航页面
export const cityListUrl=
"gateway?k=6886714"

//个人中心相关接口
// 登录页面验证（自写接口）
export const loginUrl="http://127.0.0.1:3000/api/v1/login"

export const centerUrl="http://127.0.0.1:3000/api/v1/user_info"