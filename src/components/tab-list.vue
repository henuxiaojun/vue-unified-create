<template>
  <ul class="km-tab-list">
    <li class="km-layout-mr-20 km-layout-pointer"
        v-for="(item,key) in list"
        :class="{'active': activeIndex === key}"
        @click="tabClick(item, key)"
    >
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      tabClick(item, key) {
        this.activeIndex = key
        this.$emit('tabClick', item)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-tab-list {
    clear: both;
    li {
      position: relative;
      float: left;
      span {
        line-height: 20px;
        font-size: 18px;
        color: $color-text-content;
      }
      &:hover{
        span {
          color: #222;
        }
      }
      &.active {
        &:before {
          content: '';
          bottom: -20px;
          width: 20px;
          height: 3px;
          background: $color-bg-primary-btn;
          @include horizontal-center;
        }
        span {
          font-weight: bold;
          color: #222;
        }
      }
    }
  }
</style>
