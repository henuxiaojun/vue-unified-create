<template>
  <div class="km-pc-screen">
    <span class="screen-title">{{screenData.title}}</span>
    <ul class="screen-list">
      <li v-for="(item, key) in screenData.list" class="screen-item km-layout-pl-10 km-layout-pr-10 km-layout-pointer"
          @mouseover="handlerHover(item, key)"
          @mouseout="handlerBlur"
      >
        <span class="screen-name km-layout-pl-10 km-layout-pr-10"
              :class="[{'icon': item.children},{'active': key === activeIndex}]" @click="screenChoice(item, key)">{{item.name}}</span>
        <ul v-if="item.children" v-show="listActiveIndex === key" class="second-list km-layout-pt-10 km-layout-pb-10">
          <li v-for="(value, index) in item.children" :class="{'active':secondActiveIndex === index}" @click="secondClick(key, index)">
            <span>{{value.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'km-screen',
    /*
    * {
    *   title: '',  // 标题
    *   list: [   // 待选择项
    *     {
    *       name: 'aaa',
    *       id: 111
    *     }
    *   ]
    * }
    * */
    props: {
      screenData: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {
        activeIndex: -1,
        listActiveIndex: -1,
        secondActiveIndex: -1
      }
    },
    mounted() {
    },
    computed: {},
    components: {},
    methods: {
      screenChoice(item, index) {
        this.activeIndex = index
        this.secondActiveIndex = -1
      },
      handlerHover(item, key) {
        this.listActiveIndex = key
      },
      handlerBlur() {
        this.listActiveIndex = -1
      },
      secondClick(key, index) {
        this.activeIndex = key
        this.secondActiveIndex = index
        this.listActiveIndex = -1
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  .km-pc-screen {
    @include flex-center;
    .screen-list {
      @include flex-center;
    }
    .screen-item {
      position: relative;
      @include flex-center;
      .screen-name {
        border-radius: 4px;
        height: 28px;
        @include flex-center;
        &.icon {
          &:after {
            content: '';
            margin-left: 5px;
            width: 10px;
            height: 6px;
            @include bg-image('~@assets/icon-arrow-down.png')
          }
        }
        &.active {
          background: $color-bg-tab;
          color: #fff;
          &:hover {
            color: #fff;
          }
        }
      }
      .second-list {
        @include horizontal-center;
        top: 100%;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        background: #fff;
        li {
          padding-left: 25px;
          padding-right: 25px;
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #000;
          &:hover {
            background: $color-bg-hover;
          }
          &.active {
            background: $color-bg-tab;
            color: #fff;
          }
        }
      }
      &:hover {
        color: #cc6d29;
      }
    }
  }
</style>
