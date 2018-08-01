<template>
  <div class="km-pc-dialog">
    <div class="mask" v-show="isShow"></div>
    <transition name="dialog">
      <div class="dialog-content" v-show="isShow">
        <div class="dialog-header">
          <slot name="header">
            {{headerName}}<i class="close km-layout-pointer" @click="hide"></i>
          </slot>
        </div>
        <div class="dialog-body">
          <slot name="body">
            {{bodyContent}}
          </slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer">
            <km-button @click="hide">确认</km-button>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import KmButton from '@components/button.vue'
  export default {
    name: 'km-dialog',
    props: {
      headerName: {
        type: String,
        default: '弹窗名称'
      },
      bodyContent: {
        type: String,
        default: '这是弹窗内容这是弹窗内容这是弹窗内容'
      },
      isShow: {
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
    components: {KmButton},
    methods: {
      hide() {
        this.$emit('update:isShow', false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-pc-dialog {
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 998;
      background: rgba(0,0,0,0.3);
    }
    .dialog-content {
      z-index: 999;
      @include all-center;
      @include flex-center(center, center, column);
      .dialog-header {
        position: relative;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 20px 30px;
        width: 100%;
        background: $color-bg-prompt;
        .close {
          right: 23px;
          width: 14px;
          height: 14px;
          @include vertical-center;
          @include bg-image('~@assets/icon-close.png');
          &:hover {
            @include bg-image('~@assets/icon-close-active.png');
          }
        }
      }
      .dialog-body {
        padding: 20px 30px;
        width: 100%;
        background: #fff;
      }
      .dialog-footer {
        @include flex-center;
        padding: 20px 30px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        width: 100%;
        background: #fff;
      }
    }
  }

  .dialog-enter-active,
  .dialog-leave-active {
    transition: all 0.3s linear;
  }

  .dialog-enter,
  .dialog-leave-to {
    opacity: 0;
    transform: translate3d(-50%, -70%, 0) !important;
  }
</style>
