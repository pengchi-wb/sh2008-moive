<template>
  <div>
    <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmListTopNav from "@/components/FilmListTopNav";

export default {
  //注册组件
  components: {
    FilmListTopNav,
  },
  data() {
    return {
      fixed: false,
    };
  },
  mounted() {
    //事件监听,监听滚动条高度,
    window.addEventListener(
      "scroll",
      (e) => {
        //获取滚动条高度
        let top = document.documentElement.scrollTop;
        if(top>120){
            this.fixed=true
        }else{
           this.fixed=false 
        }
      },
      true
    );
  },
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  background: #ffffff;
}
</style>
