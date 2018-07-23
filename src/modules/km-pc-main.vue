<template>
  <main class="km-pc-main">
    <article class="container">
      <slot name="container">
        <slot name="main-head">

          <header class="km-layout-header main-head">
            <tab-list v-if="tabData.length" :list="tabData" @tabClick="tabItemClick"></tab-list>
            <h1 class="km-layout-h1" v-else>{{headerName}}</h1>
            <aside class="km-layout-aside km-layout-pointer" v-if="rightName" @click="rightNameClick">{{rightName}}</aside>
          </header>
        </slot>
        <div class="main-body">
          <slot name="main-body">

          </slot>
        </div>
        <slot name="main-foot">
          <footer></footer>
        </slot>
      </slot>
    </article>
  </main>
</template>
<script>
  import TabList from '@components/tab-list.vue'
  export default {
    name: 'km-pc-main',
    props: {
      tabData: {
        type: Array,
        default: () => []
      },
      headerName: {
        type: String,
        default: '标题文字'
      },
      rightName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {},
    components: {TabList},
    methods: {
      rightNameClick() {
        this.$emit('rightClick')
      },
      tabItemClick(item) {
        this.$emit('tabClick', item)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-pc-main {
    overflow: hidden;
    .container {
      margin: 20px;
      border-radius: 4px;
      background: #fff;
      .main-head {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
      }
      .main-body {
        padding: 20px;
      }
    }
  }
</style>
