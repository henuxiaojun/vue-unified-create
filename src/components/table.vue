<template>
  <div class="km-table-wrapper">
    <div class="km-table" :class="{'full': full}" :style="fixedHeight">
      <div class="table-head" :style="'width:' + (tableWidth + 1) + 'px'">
        <table>
          <colgroup>
            <col v-for="item in columnWidth" :width="item">
          </colgroup>
          <thead>
          <slot name="thead">
            <tr>
              <th :class="{'km-layout-text-center': center}" v-for="item in th">{{item.name || item}}</th>
            </tr>
          </slot>
          </thead>
        </table>
      </div>
      <div class="table-body" ref="tableBody" :style="'width:' + (tableWidth + 9) + 'px;' + bodyHeight">
        <table>
          <colgroup>
            <col v-for="item in columnWidth" :width="item">
          </colgroup>
          <tbody>
          <slot name="tbody">
            <tr v-for="(item, index) in td">
              <td :class="{'km-layout-text-center': center}" v-for="value in th">
                {{item[value.prop]}}
              </td>
            </tr>
          </slot>
          </tbody>
        </table>
      </div>
      <div class="table-fixed">
        <div class="table-head-fixed">
          <table>
            <colgroup>
              <col v-for="(item,index) in columnWidth" v-if="th[index].fixed" :width="item">
            </colgroup>
            <thead>
            <tr>
              <th v-for="item in th" v-if="item.fixed">{{item.name}}</th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="table-body-fixed" :style="bodyHeight">
          <table>
            <colgroup>
              <col v-for="(item,index) in columnWidth" v-if="th[index].fixed" :width="item">
            </colgroup>
            <tbody>
            <tr v-for="item in td">
              <td v-for="value in th" v-if="value.fixed">{{item[value.prop]}}</td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'km-table',
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
      },
      height: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        tableWidth: 0,
        columnWidth: []
      }
    },
    mounted() {
      this.handlerWidth()
    },
    computed: {
      fixedHeight() {
        return this.height ? `height:${this.height}px;` : ''
      },
      bodyHeight() {
        return this.height ? `height:${this.height - 66}px` : ''
      }
    },
    components: {},
    methods: {
      handlerWidth(){
        this.$refs.tableBody.querySelector('tr').querySelectorAll('td').forEach(item => {
          this.columnWidth.push(item.offsetWidth)
        })
        this.tableWidth = this.columnWidth.reduce((a, b) => {return a + b})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-table-wrapper {
    position: relative;
    overflow: hidden;
  }

  .km-table {
    overflow-x: scroll;
    .table-head {
      table {
        padding-right: 7px;
      }
    }
    .table-body {
      margin-top: -1px;
      overflow-y: scroll;
      tr:hover {
        background: $color-bg-hover;
      }
    }
    table {
      &.full {
        width: 100%;
      }
      word-break: break-all;
      font-size: $size-text-content;
      color: #333;
      td {
        padding: 10px;
        line-height: 24px;
        border: 1px solid $color-border-important-line;
        word-break: break-all;
        white-space: nowrap;
        background: #fff;
        .handler-btn {
          padding: 10px;
          color: $color-text-important-link;
        }
      }
      th {
        padding: 10px;
        line-height: 24px;
        border: 1px solid $color-border-important-line;
        word-break: break-all;
        white-space: nowrap;
        color: $color-text-prompt;
        background: $color-bg-table-header;
        &.gutter {
          padding: 0;
          width: 7px;
        }
      }
    }
    .table-fixed {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: 1;
      box-shadow: 2px 0 6px -2px rgba(0,0,0,.2);
      table {
        table-layout: fixed;
      }
      .table-body-fixed {
        margin-top: -1px;
      }
    }
  }
</style>
