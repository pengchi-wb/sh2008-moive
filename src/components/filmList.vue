<!--电影列表-->
<template>
  <div class="list">
    <!-- loading效果 拿到数据后消失-->
    <loading v-if="loading"></loading>

    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      @click="goDetail(item.filmId)"
    >
      <div class="left">
        <img :src="item.poster" />
      </div>
      <div class="middle">
        <div>{{ item.name }}</div>
        <div v-if="type == 1" class="grades">
          <span >观众评分 </span>
          <span class="grade">{{ item.grade }}</span>
        </div>
        <div class="a"><span>主演：{{ item.actors | parseActors }}</span>
          <p>{{ item.nation }} | {{ item.runtime }}分钟</p>
        </div>
        <!-- <div>{{ item.nation }} | {{ item.runtime }}分钟</div> -->
      </div>
      <div class="right">
        <span v-if="type == 1">购票</span>
        <span v-else>预购</span>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "@/components/loading";
export default {
  data() {
    return {
      loading: true,
    };
  },
  props: ["list", "type"],
  components: {
    loading,
  },
  // 生命周期
  created() {
    //判断数据是否已经获取
    if (this.list.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  //过滤器，用于过滤导演和主演的数据，从数组转换为字符串
  filters: {
    parseActors: function(value) {
      let actors = "";
      value.forEach((e) => {
        actors += e.name + " ";
      });
      return actors;
    },
  },
  methods: {
      //详情页跳转事件
    goDetail: function(filmId) {
        //跳转至detail页面，传递filmId数据
      this.$router.push({ name: "detail", params: { filmId } });
    },
  },
};
</script>



<style lang="scss" scoped>
.list {
  margin-bottom: 50px;
  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      width: 55%;

      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
     
      }

      div:nth-of-type(2) {
        margin-top: 10px;
      }
      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .grade {
        color: #ffb232;
        font-size: 14px;
        
      }
    }
    .a{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin-top: 10px;
    P{margin-top: 10px;}
    }

    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}
</style>
