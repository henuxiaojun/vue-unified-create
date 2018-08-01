<template>
  <label class="km-input-search" :class="{'focus': inputFocus}">
    <input type="text"
           :placeholder="placeholder"
           :value="value"
           @input="$emit('input', $event.target.value)"
           @focus="inputFocus = true"
           @blur="inputFocus = false"
    >
  </label>
</template>
<script>
  export default {
    name: 'km-input-search',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: '快速搜寻小伙伴'
      }
    },
    data() {
      return {
        inputFocus: false
      }
    },
    mounted() {
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-input-search {
    border: 1px solid $color-border-input;
    border-radius: 18px;
    padding-left: 18px;
    padding-right: 18px;
    height: 36px;
    @include flex-center;
    input {
      flex: 1;
      border: none;
      line-height: 34px;
      font-size: 14px;
    }
    &:after {
      content: '';
      width: 16px;
      height: 16px;
      cursor: pointer;
      @include bg-image('~@assets/icon-search.png')
    }
    &.focus {
      border: 1px solid $color-border-focus;
      &:after {
        @include bg-image('~@assets/icon-search-active.png')
      }
    }
  }
</style>
