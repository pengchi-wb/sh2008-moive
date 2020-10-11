<!-- 详情页 -->
<template>
  <div>
    <div>
    <div class="detail">
      <div class="img">
        <img :src="film.poster" />
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
    </div>
    </div>
  </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
//引入时间转换模块（moment）
import moment from "moment";

export default {
  data() {
    return {
      film: {},
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
};
</script>

<style lang="scss" scoped>
.detail {
  
  .img {
    width: 100%;
    height: 320px;
   display: block;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .film{
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
     div:nth-of-type(2){
font-size: 13px;
    color: #797d82;
    margin-top: 4px;
     }
     div:nth-of-type(3){
font-size: 13px;
    color: #797d82;
    margin-top: 8px;
     }
     div:nth-of-type(4){
font-size: 13px;
    color: #797d82;
    margin-top: 8px;
     }
     div:nth-of-type(5){
height: 38px!important;
    overflow: hidden;
  margin-top: 15px;
  font-size: 13px;
    color: #797d82;
     }
  }
}
</style>
