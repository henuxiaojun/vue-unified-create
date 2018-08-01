<template>
  <div class="km-pagination km-layout-mt-10 km-layout-mb-10">
    <i class="left km-layout-ml-10 km-layout-mr-10 km-layout-pointer" :class="{'disabled' : cur === 1}"
       @click="changePage('left')"></i>
    <ul class="km-pagination-list">
      <!-- 判断是否为省略号 -->
      <li class="ellipsis km-layout-ml-10 km-layout-mr-10"
          v-for="item in pageNumber"
          v-if="judgeEllipsis(item)"
      >
        <span>...</span>
      </li>
      <!-- 常规 -->
      <li class="item km-layout-ml-10 km-layout-mr-10 km-layout-pointer"
          :class="{'cur': cur === item}"
          @click="changePage(item)"
          v-show="pageNumber <= 10 || item === 1 || item === pageNumber || ((cur < 6 && item < 10) || (cur > pageNumber - 5 && item > pageNumber - 9)) ? true : (item >= (cur - 3) && item <= (cur + 4))"
          v-else>
        <span>{{item}}</span>
      </li>
    </ul>
    <i class="right km-layout-ml-10 km-layout-mr-10 km-layout-pointer" :class="{'disabled': cur === pageNumber}"
       @click="changePage('right')"></i>
    <div class="jump" v-if="jumpBtn"><km-input :label="'跳转到'" :size="'mini'" :center="true" :value="this.cur" @input="changePage"></km-input>页&nbsp;&nbsp;共{{count}}条数据</div>
  </div>
</template>
<script>
  import KmInput from '@components/input-normal.vue'
  export default {
    name: 'km-pagination',
    props: {
      count: {      // 总数量
        type: Number,
        default: 10
      },
      number: {   // 每页的数量
        type: Number,
        default: 1
      },
      cur: {
        type: Number,
        default: 1
      },
      jumpBtn: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {
      pageNumber() {
        return this.number === 0 ? 0 : Math.ceil(this.count / this.number)
      }
    },
    components: {
      KmInput
    },
    methods: {
      changePage(option) {
        if (option === 'left') {
          if (this.cur === 1) {
            return
          }
          this.$emit('update:cur', (this.cur - 1))
        } else if (option === 'right') {
          if (this.cur === this.pageNumber) {
            return
          }
          this.$emit('update:cur', (this.cur + 1))
        } else {
          if (Number(option) > this.count || Number(option) < 1 || !Number(option)) {
            return
          }
          console.log(1111);
          this.$emit('update:cur', Number(option))
        }
      },
      judgeEllipsis(item) {
        return this.pageNumber > 10 && (
          (this.cur < 6 && item === 9) ||
          (this.cur > this.pageNumber - 5 && item === this.pageNumber - 8) ||
          (this.cur >= 6 && this.cur <= this.pageNumber - 5 && (item === this.cur - 3 || item === this.cur + 4))
        )
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    .left, .right {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $color-border-input;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      background: #ffffff;
      &:hover {
        border: 1px solid $color-border-bottom;
      }
    }
    .left.disabled {
      cursor: not-allowed;
      background: #fafafa;
      &:before {
        transform: rotateZ(0deg);
        @include bg-image('~@assets/icon-arrow-left-disabled.png');
      }
      &:hover {
        border: 1px solid $color-border-input;
      }
    }
    .right.disabled {
      cursor: not-allowed;
      background: #fafafa;
      &:before {
        transform: rotateZ(180deg);
        @include bg-image('~@assets/icon-arrow-left-disabled.png');
      }
      &:hover {
        border: 1px solid $color-border-input;
      }
    }
    .left:before {
      content: '';
      width: 8px;
      height: 14px;
      transform: rotateZ(180deg);
      @include bg-image('~@assets/icon-arrow-right.png');
    }
    .right:before {
      content: '';
      width: 8px;
      height: 14px;
      transform: rotateZ(0deg);
      @include bg-image('~@assets/icon-arrow-right.png');
    }
    &-list {
      display: flex;
      justify-content: center;
      align-items: center;
      .ellipsis {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #ffffff;
      }
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $color-border-input;
        border-radius: 4px;
        width: 40px;
        height: 40px;
        background: #ffffff;
        &:hover {
          border: 1px solid $color-border-bottom;
          color: $color-text-link;
        }
        &.cur {
          background: $color-bg-tab;
          color: #fff;
        }
      }
    }
    .jump {
      font-size: 14px;
      @include flex-center;
    }
  }
</style>
