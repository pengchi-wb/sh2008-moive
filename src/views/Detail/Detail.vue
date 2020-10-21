<!-- 详情页 -->
<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <div>
      <div class="film-header">
        <div class="goBack" @click="goBack()">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <!-- <div class="title">我和我的家乡</div> -->
        <!---->
      </div>
      <div class="detail">
        <div class="img">
          <img v-lazy="film.poster" :key="film.poster" />
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
          <Swiper
            :key="'actors_' + film.actors.length"
            class="SwiperOne"
            className="SwiperOne"
            PerView="4"
          >
            <div
              v-for="(item, index) in film.actors"
              :key="index"
              class="swiper-slide"
            >
              <img :src="item.avatarAddress" />
              <span>{{ item.name }}</span>
              <span>{{ item.role }}</span>
            </div>
          </Swiper>
        </div>
        <div class="clicer"></div>
        <div class="stage">
          <p>剧照</p>
          <Swiper
            :key="'photos_' + film.photos.length"
            class="SwiperTwo"
            className="SwiperTwo"
            PerView="2"
          >
            <div
              v-for="(item, index) in film.photos"
              :key="index"
              class="swiper-slide"
            >
              <div class="gaibian"><img :src="film.photos[index]" /></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="goSchedule">
      选座购票
    </div>
  </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
//引入时间转换模块（moment）
import moment from "moment";

import Swiper from "@/components/swiper";

import Bscroll from "better-scroll";

export default {
  data() {
    return {
      film: { actors: [], photos: [] },
      height: 0,
      //用于保存better-scroll的实例结果
      bs: null,
    };
  },

  async mounted() {
    this.height = document.documentElement.clientHeight - 100;

    let ret = await moiveDetailData(this.$route.params.filmId);
    console.log(ret);
    this.film = ret.data.data.film;
    // console.log(this.film);
  },

  filters: {
    parseTime: function(value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },

  components: {
    Swiper,
  },
  methods: {
    goBack: function() {
      // this.$router.go(-1);
      this.$router.push("/film");
    },
  },
  created() {
    this.eventBus.$emit("footerNav", false);
  },
  beforeDestroy() {
    this.eventBus.$emit("footerNav", true);
  },

  updated() {
    this.bs = new Bscroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  .film-header {
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0);
    color: transparent;
    transition: all 0.3s ease;
    width: 100%;
    height: 44px;
    z-index: 9999;
    top: 0;
    left: 0;

    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
      }
    }
    .title {
      font-size: 17px;
      line-height: 44px;
      width: 100%;
      text-align: center;
    }
  }
  .detail {
    height: 700px;
    padding-bottom: 100px;

    .img {
      width: 100%;
      height: 240px;
      // position: relative;
      overflow: hidden;
      top: 0;

      img {
        width: 100%;
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
        height: 38px;
        overflow: hidden;
        margin-top: 10px;
        font-size: 13px;
        color: #797d82;
        //      overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
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
      span:nth-of-type(2) {
        font-size: 10px;
        padding-top: 4px;
      }
    }
    .stage {
      // width: 100%;
      height: 240px;
      margin-left: 10px;
      p {
        margin-bottom: 8px;
      }
      .SwiperTwo {
        width: 100%;
        .gaibian {
          width: 100%;
          height: 140px;
          padding-right: 10px;
          
          img {
            width: 95%;
            // height: 100%;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .goSchedule {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 200;
  }
}
</style>
