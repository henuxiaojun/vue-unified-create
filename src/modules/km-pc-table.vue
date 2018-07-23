<template>
  <table class="km-pc-table" :class="{'full': full}">
    <slot name="table">
      <thead>
      <slot name="thead">
        <tr>
          <td :class="{'km-layout-text-center': center}" v-for="item in th">{{item.name || item}}</td>
        </tr>
      </slot>
      </thead>
      <tbody>
      <slot name="tbody">
        <tr v-for="(item, index) in td">
          <td :class="{'km-layout-text-center': center}" v-for="value in th" v-if="value.prop === 'handle' ">
            <span class="handler-btn km-layout-pointer" v-for="handle in value.handleItem" v-show="item.status === handle.status" @click="handleClick(handle, item, index)">{{handle.name}}</span>
          </td>
          <td :class="{'km-layout-text-center': center}" v-else-if="item.editStatus">
            <label-input v-model="item[`${value.prop}Edit`]" :size="value.prop === 'number' ? 'small' : 'full'"></label-input>
          </td>
          <td :class="{'km-layout-text-center': center}" v-else>
            {{item[value.prop]}}
          </td>
        </tr>
      </slot>
      </tbody>
    </slot>
  </table>
</template>
<script>
  import LabelInput from '@components/label-input.vue'
  export default {
    name: 'km-pc-table',
    props: {
      full: {
        type: Boolean,
        default: true
      },
      th: {
        type: Array,
        default: () => []
      },
      td: {
        type: Array,
        default: () => []
      },
      center: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {},
    components: {LabelInput},
    methods: {
      handleClick(handle, item, index) {
        this.$emit(handle.callback, item, index)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-pc-table {
    &.full {
      width: 100%;
    }
    border: 1px solid $color-border-important-line;
    word-break: break-all;
    font-size: $size-text-content;
    color: #333;
    td {
      padding: 10px;
      line-height: 24px;
      border: 1px solid $color-border-important-line;
      word-break: break-all;
      .handler-btn {
        padding: 10px;
        color: $color-text-important-link;
      }
    }
    thead {
      tr {
        td {
          color: $color-text-prompt;
          background: $color-bg-table-header;
        }
      }
    }
    tbody {
    }
  }

</style>
