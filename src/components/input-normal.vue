<template>
  <label class="km-input">
    {{label}}
    <input :class="[
      {'km-input-text': type === 'text' || type === 'password'},
      {'km-input-date': type === 'date'},
      {'full': size === 'full'},
      {'small': size === 'small'},
      {'medium': size === 'medium'},
      {'big': size === 'big'},
      {'mini': size === 'mini'},
      {'km-layout-text-center': center}
    ]"
           class="km-layout-ml-10 km-layout-mr-10"
           :type="type"
           :placeholder="placeholder"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </label>
</template>
<script>
  export default {
    name: 'km-input',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: '选择日期'
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'full'
      },
      center: {
        type: Boolean,
        default: false
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

  .km-input {
    font-size: 14px;
    @include flex-center;
    input {
      &.full {
        width: 100%;
      }
      &.mini {
        width: 30px;
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
    &-text {
      flex: 1;
      border: 1px solid $color-border-input;
      border-radius: 4px;
      padding: 14px;
      &:focus {
        border: 1px solid $color-border-focus;
      }
    }
  }
</style>
