<template>
  <ul v-if="btnList.length" class="km-pc-button-list">
    <li class="km-pc-button-item km-layout-ml-10 km-layout-mr-10" v-for="item in btnList">
      <button class="km-pc-button" :class="[
      {'normal': item.btnType === 'normal' || btnType === 'normal'},
      {'white': item.btnType === 'white' || btnType === 'white'}]" @click="btnClick(item)">
        {{item.name}}
      </button>
    </li>
  </ul>
  <button class="km-pc-button" :class="[{'normal': btnType === 'normal'}, {'white': btnType === 'white'}]" v-else @click="btnClick">
    <slot name="default">提交</slot>
  </button>
</template>
<script>
  export default {
    name: 'km-pc-button',
    props: {
      btnType: {
        type: String,
        default: 'normal'
      },
      btnList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {},
    components: {},
    methods: {
      btnClick(item) {
        this.$emit('click', item && item.id)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-pc-button-list {
    @include flex-center;
    .km-pc-button-item {

    }
  }

  .km-pc-button {
    @include flex-center;
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 4px;
    line-height: 36px;
    font-size: $size-text-content;
    &.normal {
      color: #fff;
      background: $color-bg-primary-btn;
      &:active {
        border-radius: 2px;
        background: $color-bg-hover-btn;
      }
    }
    &.white {
      border: 1px solid #bbb;
      color: #666;
      background: rgba(38, 191, 140, 0.02);
      &:active {
        border: 1px solid #999;
        color: #333;
        border-radius: 2px;
        background: #fff;
      }
    }
  }
</style>
