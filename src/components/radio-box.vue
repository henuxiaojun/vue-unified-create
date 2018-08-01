<template>
  <ul v-if="radioData instanceof Array" class="km-radio-box km-layout-mt-10 km-layout-mb-10">
    <li v-for="item in radioData" class="km-radio-item km-layout-ml-20 km-layout-mr-20">
      <label class="km-radio-label km-layout-pointer" :class="{'checked': item.value === choiceData}">
        <i class="radio-icon-left" v-if="radioData.position === 'left' || position === 'left'"></i>
        {{item.label}}
        <i class="radio-icon-right" v-if="radioData.position === 'right' || position === 'right'"></i>
        <input type="radio" :name="item.name" :value="item.value" v-model="choiceData" @change="radioChange"></label>
    </li>
  </ul>
  <label class="km-radio-label km-layout-pointer" :class="{'checked': radioData.value === choiceData}" v-else>
    <i class="radio-icon-left" v-if="radioData.position === 'left' || position === 'left'"></i>
    {{radioData.label}}
    <i class="radio-icon-right" v-if="radioData.position === 'right' || position === 'right'"></i>
    <input type="radio" :name="radioData.name" :value="radioData.value" v-model="choiceData" @change="radioChange"></label>
</template>
<script>
  export default {
    name: 'km-radio-box',
    props: {
      /*
      *{
      *  name: '',    radio的名字
      *  label: '',   label显示文字
      *  position: '',  该radio单独的相对于文字的位置
      *  value: ''  radio选中时需要的值
      * }
      * */
      radioData: {
        type: [Array, Object],
        default: () => {}
      },
      position: {     // 选择框相对于label文字的位置
        type: String,
        default: 'right'
      }
    },
    data() {
      return {
        choiceData: ''
      }
    },
    mounted() {
    },
    computed: {},
    components: {},
    methods: {
      radioChange() {
        this.$emit('radioUpdate', this.choiceData)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-radio-box {
    @include flex-center(flex-start);
  }

  .km-radio-label {
    @include flex-center;
    line-height: 24px;
    .radio-icon-left,.radio-icon-right {
      @include flex-center;
      margin-left: 8px;
      margin-right: 8px;
      border: 1px solid $color-border-input;
      border-radius: 50%;
      width: 16px;
      height: 16px;
    }
    &.checked {
      .radio-icon-left,.radio-icon-right {
        border: 1px solid $color-border-bottom;
        &:before {
          content: '';
          border-radius: 50%;
          width: 8px;
          height: 8px;
          background: $color-bg-primary-btn;
        }
      }
    }
    input {
      display: none;
    }
  }
</style>
