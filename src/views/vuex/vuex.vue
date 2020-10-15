<template>
  <div>
    <h1>vuex</h1>
    <h1>{{ city }}
        {{getCount}}
    </h1>
    <br />
    <button @click="headle1()">点我加13</button>
    <hr />
    <button @click="headle2()">点我加13</button>
    <hr />
    <button @click="headle3()">点我加31</button>
    <hr />
    <button @click="headle4()">点我加31</button>
     <hr />
    <button @click="headle5()">获取总数</button>
  </div>
</template>

<script>
//按需导入/state数据使用方法2
import { mapState } from "vuex";
// 按需导入/Mutations方法
import { mapMutations } from "vuex";
// 按需导入/mapActions方法
import { mapActions } from "vuex";
// 按需导入/Getters方法
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    // state直接获取数据
    console.log(this.$store.state.count);
    console.log(this.$store.state.city);
    let ret = this.$store.state.city;
    // console.log(ret);
  },
  computed: {
    //state方法
    ...mapState(["city"]),
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addAsync"]),
    //Mutations
    headle1: function() {
      this.$store.commit("add", 13);
    },
    headle2: function() {
      this.add(13);
    },

    //Actions
    headle3: function() {
      this.$store.dispatch("addAsync", 31);
    },
    headle4: function() {
      this.addAsync(33);
    },

//getters
    headle5: function() {
  //  console.log(this.$store.getters.getCount);
    },
  },
};
</script>
