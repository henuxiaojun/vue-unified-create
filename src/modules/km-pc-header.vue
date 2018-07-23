<template>
  <header class="km-header km-layout-pl-30 km-layout-pr-30 km-layout-clear">
    <div class="logo km-layout-float-l"></div>
    <ul class="tab-list km-layout-float-l km-layout-ml-20">
      <li v-for="item in headList" class="km-layout-float-l km-layout-pl-10 km-layout-pr-10 km-layout-pointer">
        {{item.name}}
      </li>
    </ul>
    <div class="login">
      <div class="avatar"></div>
      <div class="icon"></div>
    </div>
  </header>
</template>
<script>
  export default {
    props: {
      headList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        message: '这是头部'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  header {
    height: 50px;
    font-size: $size-text-header;
    background-color: $color-bg-header;
    .logo {
      width: 120px;
      height: 50px;
      @include bg-image('~@assets/pc-logo.png')
    }
    ul {
      height: 50px;
      line-height: 50px;
      color: #fff;
      li {
        &:hover {
          background-color: rgba(255,255,255,0.05);
        }
      }
    }
    .login {

    }
  }
</style>
