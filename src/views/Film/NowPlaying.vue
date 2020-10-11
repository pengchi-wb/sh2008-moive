<template>
  <div>
    <filmList :list="list" :type="type" :key="'film' + list.length"></filmList>
  </div>
</template>

<script>
//导入正在热映的请求方法
import { nowPlayingListData } from "@/api/api";

import filmList from "@/components/filmList";

export default {
  data() {
    return {
      pageNum: 1,
      list: [],
      type: 1,
    };
  },
  async mounted() {
    let ret = await nowPlayingListData(this.pageNum);
    this.list = ret.data.data.films;
  },
  components: {
    filmList,
  },
};
</script>
