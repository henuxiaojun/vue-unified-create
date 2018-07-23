<template>
  <label class="km-label-input" :class="[
      {'full': size === 'full'},
      {'small': size === 'small'},
      {'medium': size === 'medium'},
      {'big': size === 'big'},
      {'center': align === 'center'}
    ]">
    <input :type="inputType" :value="value" @change="$emit('change', $event.target.value)">
  </label>
</template>
<script>
  export default {
    model: {
      prop: 'value',
      event: 'change'
    },
    name: 'label-input',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
      },
      size: {
        type: String,
        default: 'full'
      },
      align: {
        type: String,
        default: 'center'
      }
    },
    data() {
      return {}
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
  .km-label-input {
    display: block;
    input {
      border: 1px solid $color-border-input;
      border-radius: 4px;
      padding: 6px;
      width: calc(100% - 12px);
      height: 24px;
      &:active {
        border: 1px solid $color-border-focus;
      }
    }
    &.center {
      margin: 0 auto;
      input {
        text-align: center;
      }
    }
    &.full {
      width: 100%;
    }
    &.small {
      width: 60px;
    }
    &.medium {
      width: 120px;
    }
    &.big {
      width: 180px;
    }
  }
</style>
