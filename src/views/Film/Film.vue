<template>
  <div>
    <div class="ct">
      <p @click="jump">{{city}}</p>
      <p>电影</p>
    </div>
    <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmListTopNav from "@/components/FilmListTopNav";

import { mapState } from "vuex";

export default {
  //注册组件

  data() {
    return {
      fixed: false,
    };
  },
  
  components: {
    FilmListTopNav,
  },
  mounted() {
    window.addEventListener(
      "scroll",
      (e) => {
       let top = document.documentElement.scrollTop;
        // console.log(top);

        if (top > 10) {
          // 吸顶
          this.fixed = true;
        } else {
          // 还原
          this.fixed = false;
        }
      },
      true
    );
  },
  
 methods: {
   jump: function() {
        this.$router.push("/City");
    }

  },
  computed:{
   ...mapState(["city"]),
}
}

</script>

<style lang="scss" scoped>
.ct{
  height: 40px;
  margin-top: 10px;
 padding-bottom: 10px;
  display: flex;
  line-height: 40px;
  border-bottom: 2px solid #eeeeee;
  p:nth-of-type(1){
    width: 15%;
    text-align: center;
  }
  p:nth-of-type(2){
   width: 80%;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
  }
}
// .fixeds {
//   position: fixed;
//   top: 0;
//   background: #ffffff;
// }
.fixed {
  position: fixed;
  top: 0;
  background: #ffffff;
}
</style>
