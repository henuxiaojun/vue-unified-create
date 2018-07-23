<template>
  <div class="km-foldable-menu">
    <ul>
      <li v-for="(title,index) in list" class="menu-title km-layout-pointer km-layout-pb-10 km-layout-pt-10" :key="index">
        <div class="title" :class="{'rotate': !title.show}" @click="listSlide(title)">{{title.name}}</div>
          <ul v-show="title.show">
            <li v-for="(item,key) in title.children" :key="key" class="menu-item"
                :class="{'cur': (activeIndex === index && activeKey === key)}" @click="listClick(item, key, index)">
              {{item.name}}
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: -1,
        activeKey: -1
      }
    },
    mounted() {
      this.initActiveIndex()
    },
    methods: {
      initActiveIndex() {
        this.list.forEach((item, index) => {
          item.children.forEach((option, key) => {
            if (window.location.pathname === option.url) {
              this.activeIndex = index
              this.activeKey = key
            }
          })

        })
      },
      listClick(item, key, index) {
        this.activeKey = key
        this.activeIndex = index
        if (item.url) {
          window.location.href = item.url
          //this.$router ? this.$router.push({path: item.url}) : window.location.href = item.url
        }
      },
      listSlide(title) {
        title.show = !title.show
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@style/base.scss';
  @import '~@style/mixin.scss';

  .km-foldable-menu {

    .menu-title {
      border-bottom: 1px solid $color-border-important-line;
    }
    .title {
      position: relative;
      height: 40px;
      line-height: 40px;
      text-indent: 40px;
      font-weight: bold;
      overflow: auto;
      &.rotate {
        &:after {
          transform: rotateZ(180deg) translate3d(0, 50%, 0);
        }
      }
      &:before {
        content: '';
        left: 17px;
        width: 14px;
        height: 14px;
        @include bg-image('~@assets/icon-setting.png');
        @include vertical-center;
      }
      &:after {
        content: '';
        right: 27px;
        width: 10px;
        height: 6px;
        transition: transform .3s linear;
        @include bg-image('~@assets/icon-arrow-down.png');
        @include vertical-center;
      }
    }
    .menu-item {
      height: 40px;
      line-height: 40px;
      text-indent: 40px;
      &:hover {
        background: $color-bg-hover;
      }
      &.cur {
        color: #fff;
        background: $color-bg-tab;
      }
    }
  }
</style>
