<template>
  <label class="km-input"
    :class="[
    {'full': size === 'full'},
      {'small': size === 'small'},
      {'medium': size === 'medium'},
      {'big': size === 'big'},
      {'mini': size === 'mini'},
      {'icon-arrow': select.length},
      {'active': selectShow}
    ]"
         @click.stop="labelClick"
  >
    {{label}}
    <input :class="[
      {'km-input-text': type === 'text' || type === 'password'},
      {'km-input-date': type === 'date'},
      {'km-layout-text-center': center}
    ]"
           class="km-layout-ml-10 km-layout-mr-10"
           :type="type"
           :placeholder="placeholder"
           :value="value"
           @input="$emit('input', $event.target.value)"
           v-if="!select.length"
    >
    <input :class="[
      {'km-layout-text-center': center}
    ]"
           class="km-input-text km-layout-ml-10 km-layout-mr-10 km-layout-pointer"
           readonly="readonly"
           :type="type"
           :placeholder="placeholder"
           v-model="selectData"
           v-else
    >
    <transition name="select-side">
      <div v-if="select.length" v-show="selectShow" class="select-wrapper">
        <ul>
          <li v-for="item in select" class="km-layout-pointer" @click.stop="selectItem(item)">{{item.name}}</li>
        </ul>
        <div class="triangle"></div>
      </div>
    </transition>
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
        default: ''
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
      },
      select: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        selectShow: false,
        selectData: null
      }
    },
    mounted() {
      document.body.addEventListener('click', () => {
        this.selectShow = false
      })
    },
    computed: {},
    components: {},
    methods: {
      labelClick() {
        this.selectShow = !this.selectShow
      },
      selectItem(item) {
        this.selectData = item.name
        this.$emit('changeItem', item.id)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-input {
    position: relative;
    font-size: 14px;
    @include flex-center;
    &.full {
      width: 100%;
    }
    &.mini {
      width: 70px;
    }
    &.small {
      width: 100px;
    }
    &.medium {
      width: 170px;
    }
    &.big {
      width: 270px;
    }
    &.icon-arrow {
      &:before {
        content: '';
        right: 20px;
        width: 14px;
        height: 8px;
        transition: all 0.3s linear;
        @include vertical-center;
        @include bg-image('~@assets/icon-arrow-down-yellow.png');
      }
      &.active {
        &:before {
          transform: rotateZ(180deg) translate3d(0, 50%, 0);
        }
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
    input {
      width: 100%;
    }
    .select-wrapper {
      position: absolute;
      left: 0;
      top: calc(100% + 10px);
      z-index: 10;
      padding: 6px 0;
      border: 1px solid #e4e7ed;
      border-radius: 4px;
      width: 100%;
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      .triangle {
        position: absolute;
        top: -6px;
        left: 30px;
        border-width: 6px;
        filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
        margin-right: 3px;
        border-top-width: 0;
        border-bottom-color: #ebeef5;
        &:before {
          content: ' ';
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border-color: transparent;
          border-style: solid;
          border-width: 6px;
          border-top-width: 0;
          border-bottom-color: #fff;
        }
      }
    }
    ul {
      li {
        padding: 10px;
        &:hover {
          background-color: #fff8eb;
        }
      }
    }
  }

  .select-side-enter,
  .select-side-leave-to{
    opacity: 0;
    transform: translate3d(0, 10px, 0)
  }
  .select-side-leave-active,
  .select-side-enter-active{
    transition: all 0.3s linear;
  }
</style>
