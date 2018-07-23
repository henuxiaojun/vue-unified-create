<template>
  <div class="km-pc-cascade km-layout-mb-20">
    <km-table v-for="(item, key) in list"
              :key="key"
              :th="item.th"
              :full="false"
              class="cascade-list km-layout-mr-10">
      <template slot="tbody">
        <tr v-for="option in item.td">
          <td class="cascade-item km-layout-pointer km-layout-text-center" @click="cascadeItemClick(option, item)">
            <span>
              {{option.name}}
              </span>
            <i class="cascade-choice" :class="[
              {'check': item.choiceType === 'check'},
              {'radio': item.choiceType === 'radio'},
              {'checked': option.checked}
              ]"
            ></i>
          </td>
        </tr>
      </template>
    </km-table>
  </div>
</template>
<script>
  /*
  * [
  *   {
  *     id: 1,
  *     choiceType: 'radio',
  *     th: ['公司'],
  *     td: [
  *       {
  *         id: 1,
  *         name: '快猫公司',
  *         checked: false
  *       },
  *       {
  *         id: 1,
  *         name: '凯猫',
  *         checked: false
  *       },
  *       {
  *         id: 1,
  *         name: '非梧不栖',
  *         checked: false
  *       }
  *     ]
  *   },
  *   {
  *     id: 2,
  *     choiceType: 'check',
  *     th: ['项目'],
  *     td: [
  *       {
  *         id: 2,
  *         name: '阅读王',
  *         checked: false
  *       },
  *       {
  *         id: 2,
  *         name: '看点啥',
  *         checked: false
  *       },
  *       {
  *         id: 2,
  *         name: '梧桐阅读',
  *         checked: false
  *       }
  *     ]
  *   },
  *   {
  *     id: 3,
  *     choiceType: 'check',
  *     th: ['一级类型'],
  *     td: [
  *       {
  *         id: 3,
  *         name: '办公费',
  *         checked: false
  *       },
  *       {
  *         id: 3,
  *         name: '推广费',
  *         checked: false
  *       }
  *     ]
  *   }
  * ]
  * */

  import KmTable from '@modules/km-pc-table.vue'
  export default {
    name: 'km-pc-cascade',
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {},
    components: {
      KmTable
    },
    methods: {
      cascadeItemClick(item, parent) {
        if (parent.choiceType === 'radio') {
          if (item.checked) {
            return
          }
          parent.td.forEach(value => {
            if (value.checked) {
              value.checked = false
            }
          })
          item.checked = true
        } else {
          item.checked = !item.checked
        }
        this.$emit('cascadeClick', item, parent)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";
  .km-pc-cascade {
    overflow: hidden;
    .cascade-list {
      float: left;
      .cascade-item {
        position: relative;
        padding-right: 35px !important;
        .cascade-choice.check {
          right: 8px;
          border: 1px solid $color-border-input;
          border-radius: 4px;
          width: 18px;
          height: 18px;
          @include vertical-center;
          &.checked {
            border: 1px solid $color-border-bottom;
            &:before {
              content: '';
              width: 11px;
              height: 8px;
              @include bg-image('~@assets/icon-checked.png');
              @include all-center;
            }
          }
        }
        .cascade-choice.radio {
          right: 8px;
          border: 1px solid $color-border-input;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          @include vertical-center;
          &.checked {
            border: 1px solid $color-border-bottom;
            &:before {
              content: '';
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: $color-bg-primary-btn;
              @include all-center;
            }
          }
        }
      }
    }
  }



</style>
