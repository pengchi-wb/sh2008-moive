<!--电影列表-->
<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <div>
      <!-- loading效果 拿到数据后消失-->
      <loading v-if="loading"></loading>

      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <img v-lazy="item.poster" />
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <div v-if="type == 1" class="grades">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div class="a">
            <span>主演：{{ item.actors | parseActors }}</span>
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
  </div>
</template>

<script>
import loading from "@/components/loading";
import Bscroll from "better-scroll";
//导入请求的方法
import { nowPlayingListData, comingSoonListData } from "@/api/api";

export default {
  data() {
    return {
      loading: true,
      height: 0,
      //用于保存better-scroll的实例结果
      bs: null,
      pageNum: 1,
      //控制是否可以继续加载更多（下滑）
      flag: true,

      // 拼接数据
      data:[]
    };
  },
  props: ["list", "type"],
  components: {
    loading,
  },
 
  // 生命周期
  created() {
    //进入页面后，将父传子的list数据转交给data进行存储
    this.data=this.list
    //判断数据是否已经获取
    if (this.data.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  //过滤器，用于过滤导演和主演的数据，从数组转换为字符串
  filters: {
    parseActors: function(value) {
      let actors = "";
      if (value){
        value.forEach((e) => {
        actors += e.name + " ";
      });
      }else{
        actors='暂无主演'
      }
      return actors;
    },
  },
  methods: {
    //详情页跳转事件
    goDetail: function(filmId) {
      //跳转至detail页面，传递filmId数据
      this.$router.push({ name: "detail", params: { filmId } });
    },

    //定义获取数据的方法
    getData: async function() {
      if (this.flag) {

        this.pageNum++;

        if (this.type == 1) {
          //正在热映
          var ret = await nowPlayingListData(this.pageNum);
        } else {
          //即将上映
          var ret = await comingSoonListData(this.pageNum);
        }
        //如果当前请求到数据的数量小于10，说明之后无数据可以请求，将flag设置为false，防止后滑
        if (ret.data.data.films.length < 10) {
          this.flag = false;
        }
       //将数据处理好后进行新增进列表
       this.data=this.data.concat(ret.data.data.films)
      }
      
    },
  },

  mounted() {
    this.height = document.documentElement.clientHeight - 100;
   
  },
  updated(){
     this.bs = new Bscroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
    this.bs.on("pullingUp", () => {
      this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      this.getData();
      this.bs.finishPullDown();
    });

  }
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
    .a {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin-top: 10px;
      p {
        margin-top: 10px;
      }
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
.scroll {
  overflow: hidden;
}
</style>
