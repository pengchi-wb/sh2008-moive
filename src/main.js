import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;


//使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading:
     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602483661466&di=02f66b54c5a2e4fad467f1ecbbfc8aa5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbf6f63a7ef21797e259ef1242d3bf59bf64b7a2847dba-LRxBDW_fw658",
});

//定义事件总线
Vue.prototype.eventBus = new Vue();


//导入vuex的store对象
import store from "@/store/vuex"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
