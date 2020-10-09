

<template>
  <div class="nav">
    <ul>
    <!-- router-link相当于a，
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
<!-- scoped只在本页面进行渲染-->
<style lang="scss" scoped>

.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
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
