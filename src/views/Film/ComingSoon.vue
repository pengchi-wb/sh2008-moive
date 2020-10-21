<template>
  <div>
    <filmList :list="list" :type="type" :key="'film' + list.length"></filmList>
  </div>
</template>

<script>
//导入即将上映的请求方法
import { comingSoonListData } from "@/api/api";

import filmList from "@/components/filmList";

export default {
  data() {
    return {
      pageNum: 1,
      list: [],
      type: 2,
    };
  },
  async mounted() {
    let ret = await comingSoonListData(this.pageNum);
    this.list = ret.data.data.films;
  },
  components: {
    filmList,
  },
};
</script>

