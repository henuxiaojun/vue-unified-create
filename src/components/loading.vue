<template>
  <div class="km-loading" v-show="usShow" :style="{'background-color': bgColor}"></div>
</template>
<script>
  export default {
    name: 'km-loading',
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      bgColor: {
        type: String,
        default: 'rgba(0,0,0,0.4)'
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

  .km-loading {
    position: absolute;
    z-index: 2000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    &:before {
      @include bg-image(url('~@assets/icon-loading.svg'))
    }
  }
</style>
