<template>
  <aside class="km-aside" :class="{'aside-hide': !isShow}">
    <foldable-menu :list="asideList"></foldable-menu>
    <div class="hide-btn" :class="{'active': !isShow}" @click="hideAside"></div>
  </aside>
</template>
<script>
  import FoldableMenu from '@components/foldable-menu.vue'
  export default {
    props: {
      asideList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isShow: true
      }
    },
    components: {FoldableMenu},
    methods: {
      hideAside() {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-aside {
    position: relative;
    z-index: 1;
    width: 200px;
    height: 100%;
    background: #fff;
    float: left;
    transition: transform 0.3s linear;
    &.aside-hide {
      transform: translate3d(-100%, 0, 0)
    }
    .hide-btn {
      z-index: -1;
      right: -10px;
      width: 100px;
      height: 100px;
      border-radius: 20px;
      background: #fff;
      cursor: pointer;
      @include vertical-center;
      &.active {
        &:before {
          transform: rotateZ(180deg) translate3d(0, 50%, 0);
        }
      }
      &:before {
        content: '';
        right: 5px;
        border-top: 4px solid transparent;
        border-right: 4px solid #bbb;
        border-bottom: 4px solid transparent;
        width: 0;
        height: 0;
        transition: transform 0.3s linear;
        @include vertical-center;
      }
      &:hover {
        &:before {
          border-right: 4px solid #333;
        }
      }
    }
  }
</style>
