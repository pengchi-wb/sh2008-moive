<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 插槽（坑） -->
      <slot></slot>
    </div>
    <div class="buy">选座购票</div>
  </div>
  
</template>

<script>

import Swiper from "swiper";

import swiper from "swiper";

import "swiper/swiper-bundle.css";

export default {
  mounted() {
    //this.$nextTick():当前异步操作全部做完之后再去做其里面的东西。
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        slidesPerView: 4,
      });
      // new swiper(".swiper-container", {
      //   slidesPerView: 2,
      // });
    });
  },
};
</script>

<style lang="scss" scoped>

.buy{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    z-index: 100;
    
}
</style>
