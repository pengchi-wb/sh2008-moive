import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//创建Store对象用于存储数据

export default new Vuex.Store({
  //1.state提供一个数据源
  state: {
    //存储全局共享数据
    // count: 0,
    city: "北京",
    cityId:'110100',
    _token: "",
  },
  // 2.修改store中的数据
  mutations: {
    // add: function(state, step) {
    //   state.count += step;
    // },
    //城市名称
    setCity: function(state, cityName) {
      state.city = cityName;

      console.log(state.city);
  
    },
    setCityId:function(state,cityId){
      state.cityId=cityId;
      console.log(state.cityId);
    },
    updataToken: function(state, _token) {
      state._token = _token;
      //键值对关系
      localStorage.setItem("_token", _token);
    },
  },
  //3.异步代码
  actions: {
    addAsync: function(context, step) {
      setTimeout(() => {
        context.commit("add", step);
      }, 4000);
    },
  },
  //4.
  // getters: {
  //     getCount:function(state){
  //         return '当前总数是'+state.count
  //     }
  // },
});
