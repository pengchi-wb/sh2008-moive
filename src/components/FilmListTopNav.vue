<!-- 列表页头部 -->
<template>
  <div class="nav">
    <ul>
      <!--声明式导航
       router-link相当于a，
    to后为跳转的地址，
    默认生成为a  tag="li"转化为li -->
      <router-link to="/film/nowplaying" tag="li" active-class="active">
        <span>正在热映</span>
      </router-link>

      <router-link to="/film/comingsoon" tag="li" active-class="active">
        <span>即将上映</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import Bscroll from "better-scroll";
// export default {
//    updated(){
//      this.bs = new Bscroll(".scroll", {
//       pullUpLoad: true,
//       pullDownRefresh: true,
//       click: true,
//     });

//     //获取拖动高度
//     this.bs.on("scroll", (position) => {
//       // console.log( position.y)
//       if (position.y > 20) {
//         document.querySelector(".nav").style.backgroundColor='#fff';

//       }
//     });
//   }
// }
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  background: white;
  z-index: 1000;
  ul {
    display: flex;
    text-align: center;

    li {
      flex: 1;
      display: flex;
      justify-content: center;
      &.active {
        span {
          width: 40%;
          border-bottom: 2px solid red;
          display: block;
          color: #fe5100;
        }
      }
    }
  }
}
</style>
