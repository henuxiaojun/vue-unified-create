<template>
  <ul v-if="checkData instanceof Array" class="km-check-box km-layout-mt-10 km-layout-mb-10">
    <li v-for="item in checkData" class="km-check-item km-layout-ml-20 km-layout-mr-20">
      <label class="km-check-label km-layout-pointer" :class="{'checked': choiceData.hasElement(item.value)}">
        <i class="check-icon-left" v-if="item.position === 'left' || position === 'left'"></i>
        {{item.label}}
        <i class="check-icon-right" v-if="item.position === 'right' || position === 'right'"></i>
        <input type="checkbox" :name="item.name" :value="item.value" v-model="choiceData" @change="checkboxChange"></label>
    </li>
  </ul>
  <label class="km-check-label km-layout-pointer" :class="{'checked': checkData.value === choiceData}" v-else>
    <i class="check-icon-left" v-if="checkData.position === 'left' || position === 'left'"></i>
    {{checkData.label}}
    <i class="check-icon-right" v-if="checkData.position === 'right' || position === 'right'"></i>
    <input type="checkbox" :name="checkData.name" :value="checkData.value" v-model="choiceData">
  </label>
</template>
<script>
  export default {
    name: 'km-check-box',
    props: {
      /*
      *{
      *  name: '',    check的名字
      *  label: '',   label显示文字
      *  position: '',  该check单独的相对于文字的位置
      *  value: '',  check选中时需要的值
      *  checked: false check的选中状态
      * }
      * */
      checkData: {
        type: [Array, Object],
        default: () => {}
      },
      position: {
        type: String,
        default: 'right'
      }
    },
    data() {
      return {
        choiceData: []
      }
    },
    mounted() {
    },
    watch: {
    },
    computed: {},
    components: {},
    methods: {
      checkboxChange() {
        this.$emit('checkUpdate', this.choiceData)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-check-box {
    @include flex-center(flex-start);
  }

  .km-check-label {
    @include flex-center;
    line-height: 24px;
    .check-icon-left,.check-icon-right {
      @include flex-center;
      margin-left: 8px;
      margin-right: 8px;
      border: 1px solid $color-border-input;
      border-radius: 4px;
      width: 16px;
      height: 16px;
    }
    &.checked {
      .check-icon-left,.check-icon-right {
        border: 1px solid $color-border-bottom;
        &:before {
          content: '';
          border-radius: 50%;
          width: 8px;
          height: 8px;
          @include bg-image('~@assets/icon-checked.png')
        }
      }
    }
    input {
      display: none;
    }
  }
</style>

