<!-- 详情页 -->
<template>
  <div>
    <div class="film-header">
      <div class="goBack" @click="goBack()">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <!-- <div class="title">我和我的家乡</div>  -->
    </div>
    <div class="detail">
      <div class="img">
        <img v-lazy="film.poster" />
      </div>
      <div class="film">
        <div>{{ film.name }}</div>
        <div>{{ film.category }}</div>
        <div>{{ film.premiereAt | parseTime }}上映</div>
        <div>{{ film.nation }} | {{ film.runtime }}分钟</div>
        <div>
          {{ film.synopsis }}
        </div>
      </div>
      <div class="clicer"></div>

      <!-- 演职表循环显示 -->
      <div class="cast">
        <p>演职人员</p>
        <Swiper :key="'actors_' + film.actors.length">
          <div
            v-for="(item, index) in film.actors"
            :key="index"
            class="swiper-slide"
          >
            <img :src="item.avatarAddress" />
            <span>{{item.name}}</span>
            <span>{{item.role}}</span>
          </div>
        </Swiper>
      </div>
      <div class="clicer"></div>
      <div class="stage">
        <p>剧照</p>
        <swiper :key="'photos_' + film.photos.length">
          <div
            v-for="(item, index) in film.photos"
            :key="index"
            class="swiper-slide"
          >
            <img :src="film.photos[index]" />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
//引入时间转换模块（moment）
import moment from "moment";

import Swiper from "@/components/swiper";

import swiper from "@/components/swiper"

export default {
  data() {
    return {
      film: { actors: [] ,
      photos:[]
      },
    };
  },

  async mounted() {
    let ret = await moiveDetailData(this.$route.params.filmId);
    console.log(ret.data);
    this.film = ret.data.data.film;
  },

  filters: {
    parseTime: function(value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },

  components: {
   Swiper,
    swiper,
  },

  created() {
    this.eventBus.$emit("footerNav", false);
  },
  beforeDestroy() {
    this.eventBus.$emit("footerNav", true);
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.film-header {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  transition: all 0.3s ease;
  width: 100%;
  height: 44px;
  z-index: 1;

  .goBack img {
    width: 30px;
    margin-top: 5px;
    margin-left: 5px;
  }
}

.detail {
  height: 100%;
  
  .img {
    width: 100%;
    height: 240px;
      // position: relative;
    overflow: hidden;
    top: 0;

    img {
    width: 100%;
    height: 100%;
    // position: absolute;
    // top: 50%;
    
 
    }
  }
  .film {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;

    div:nth-of-type(1) {
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      margin-right: 7px;
    }
    div:nth-of-type(2) {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    div:nth-of-type(3) {
      font-size: 13px;
      color: #797d82;
      margin-top: 5px;
    }
    div:nth-of-type(4) {
      font-size: 13px;
      color: #797d82;
      margin-top: 5px;
    }
    div:nth-of-type(5) {
      height: 38px !important;
      overflow: hidden;
      margin-top: 15px;
      font-size: 13px;
      color: #797d82;
    }
  }
  .clicer {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
    margin-bottom: 15px;
  }
  .cast {
    margin-left: 10px;

    p:nth-of-type(1) {
      margin-bottom: 8px;
      font-size: 16px;
      text-align: left;
      color: #191a1b;
    }

    .swiper-slide {
      img {
        width: 80px;
        height: 90px;
      }
    }
    span {
      display: block;
      text-align: center;
      padding-top: 8px;
    font-size: 12px;
    color: #191a1b;
    height: 18px;
    }
    span:nth-of-type(2){
      font-size: 10px;
      padding-top: 4px;
    }
  }
  .stage{
    margin-left: 10px;
    p{
      margin-bottom: 8px;
    }
    .swiper-slide{
      margin-right: 0;
      margin-bottom: 60px;
    }
    img{
      width: 80px;
      height: 160px;
      margin-right: 10px;
     
    }
  }
}
</style>
