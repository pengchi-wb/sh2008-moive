<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="(item,index) in dataList">

        <van-index-anchor :index="item.index" :key="index" />
        <van-cell v-for="(v,k) in item.data" :title="v.name" :key="k" @click="chooseCity(v.name,v.cityId)"/>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { cityListData } from "@/api/api";

import Vue from "vue";

import { IndexBar, IndexAnchor, Cell } from "vant";

import "vant/lib/index.css";



Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      dataList: [],
      indexList: [],
    };
  },
  //进入时去掉底部导航
  created() {
    this.eventBus.$emit("footerNav", false);
  },
  //离开显示底部导航
  beforeDestroy() {
    this.eventBus.$emit("footerNav", true);
  },

  async mounted() {
    let ret = await cityListData();
    this.dataList = ret[0];
    this.indexList = ret[1];
  },

  methods: {
    chooseCity: function(cityName,cityId) {
        // 将数据写到vuex中
        this.$store.commit('setCity',cityName);
         this.$store.commit('setCityId',cityId);
        this.$router.go(-1);
    },
  
},

  }

</script>

<style lang="scss" scoped>

</style>