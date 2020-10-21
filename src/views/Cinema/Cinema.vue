<template>
  <div>
    <header data-v-4070467a="" class="header">
      <div data-v-4070467a="" class="left">
        <div
          data-v-4070467a=""
          class="city"
          data-enter-time="1602598315"
          data-click-fun="track_f_400711"
        >
          <span @click="jump">{{ city }}</span>
          <img
            data-v-4070467a=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
          />
        </div>
      </div>
      <div data-v-4070467a="" class="title">
        <div data-v-4070467a="">影院</div>
      </div>
      <div data-v-4070467a="" class="right">
        <div data-v-4070467a="">
          <div
            data-v-4070467a=""
            class="toCinemaSearch"
            data-enter-time="1602598315"
            data-click-fun="track_f_843531"
          >
            <img
              data-v-4070467a=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
              width="18px"
              height="18px"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label class="">
          全城
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"/>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
        /></label>

        <label class="">
          APP订票
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"/>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
        /></label>

        <label class="">
          最近去过
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
            style="display: none;"/>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
        /></label>
      </div>
    </div>
    <div class="scroll" :style="{ height: height + 'px' }">
      <div class="mag">
        <loading v-if="loading"></loading>
        <div
          class="big"
          v-for="(item, index) in cinemas"
          :key="index"
          @click="godetail(item.cinemaId)"
        >
          <div class="space">
            <p>{{ item.name }}</p>
            <span><b>￥</b>{{ item.lowPrice / 100 }}<i>起</i></span>
          </div>
          <div class="site">
            <p>
              {{ item.address }}
            </p>
            <span>距离未知</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "@/components/loading";
import { cinemaListData } from "@/api/api";
import Bscroll from "better-scroll";
import { mapState } from "vuex";

export default {
  data() {
    return {
      cinemas: [],
      loading: true,
      height: 0,
      bs: null,
    };
  },
  components: {
    loading,
  },
  async mounted() {
    let ret = await cinemaListData(this.$store.state.cityId);

    this.cinemas = ret.data.data.cinemas;

    this.height = document.documentElement.clientHeight - 100;

    if (this.cinemas.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  methods: {
    jump: function() {
      this.$router.push("/City");
    },
    godetail: function(cinemaId) {
      //跳转至detail页面，传递filmId数据
      this.$router.push({ name: "cinemadetail", params: { cinemaId } });
    },
  },
  computed: {
    ...mapState(["city","cityId"]),

  },

  // mounted() {
  //   this.height = document.documentElement.clientHeight - 160;

  // },
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
header {
  margin-bottom: 50px;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  // margin: 0;
  padding: 0;
  z-index: 3000;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  .left {
    float: left;
    height: 44px;
    margin-left: 15px;
    font-size: 13px;
  }
  .right {
    float: left;
    height: 44px;
    margin-right: 15px;
    font-size: 13px;
  }
  .title {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.cinema-list-tag {
  position: fixed;
  height: 40px;
  width: 100%;
  top: 44px;
  right: 0;
  text-align: center;
  background-color: #fff;
  z-index: 2000;
  margin-bottom: 50px;
  .cinema-list-tag-name {
    position: relative;
    label {
      float: left;
      width: 33.3%;
      line-height: 49px;
      font-size: 14px;
      color: #191a1b;
      letter-spacing: -0.2px;
    }
  }
}
.scroll {
  // overflow: hidden;
  // padding-bottom: 100px;
  padding-top: 80px;
  .mag {
    margin-bottom: 50px;

    .big {
      padding: 15px 10px 10px 10px;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: "微软雅黑";
      }
      .space {
        display: flex;
        justify-content: space-between;
        p {
          width: 190px;
          height: 20px;
          color: #191a1b;
          font-size: 15px;
        }
        span {
          font-size: 15px;
          color: #ff5f16;
          display: block;
          width: 70px;
          text-align: center;
        }
        b {
          font-size: 11px;
          font-weight: 400;
          margin-right: 2px;
        }
        i {
          color: #ff5f16;
          font-size: 10px;
          font-style: normal;
          margin-left: 3px;
        }
      }
      .site {
        display: flex;
        justify-content: space-between;
        p {
          width: 213px;
          height: 20px;
          color: #797d82;
          font-size: 12px;
          margin-top: 5px;
        }
        span {
          font-size: 11px;
          color: #797d82;
          display: block;
          margin-top: 5px;
          width: 70px;
          text-align: center;
        }
      }
    }
  }
}
</style>
