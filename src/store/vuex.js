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
  },
  // 2.修改store中的数据
  mutations: {
    // add: function(state, step) {
    //   state.count += step;
    // },
    //城市名称
    setCity:function(state,cityName){
      state.city=cityName
    }
  },
  //3.异步代码
  actions: {
addAsync:function(context,step){
    setTimeout(()=>{
        context.commit('add',step)
    },4000)
},


  },
  //4.
  // getters: {
  //     getCount:function(state){
  //         return '当前总数是'+state.count
  //     }
  // },
});
