<template>
  <div id="app">
    <km-header :headList="headerData"></km-header>
    <km-aside :asideList="asideData"></km-aside>
    <km-main>
      <template slot="main-body">
        <km-screen :screenData="screenData"></km-screen>
        <km-check-box :checkData="checkChoiceData"></km-check-box>
        <km-radio-box :radioData="radioChoiceData"></km-radio-box>
        <km-search-input v-model="inputData.search"></km-search-input>
        <km-input></km-input>
        <km-pagination :count="paginationData.count" :number="paginationData.number" :cur.sync="paginationData.cur"></km-pagination>
        <km-button @click="openDialog">打开dialog</km-button>
        <km-button :btnType="'white'" @click="btnClick">取消</km-button>
        <km-button :btnList="btnData" @click="btnClick"></km-button>
        <km-dialog :isShow.sync="dialogShow"></km-dialog>
        <km-table :th="tableData.th" :td="tableData.td" :height="200"></km-table>
      </template>
    </km-main>
  </div>
</template>

<script>
  import KmHeader from '@modules/km-pc-header.vue'
  import KmAside from '@modules/km-pc-aside.vue'
  import KmMain from '@modules/km-pc-main.vue'
  import KmCascade from '@modules/km-pc-cascade.vue'
  import KmTable from '@components/table.vue'
  import KmPagination from '@components/pagination.vue'
  import KmCheckBox from '@components/check-box.vue'
  import KmRadioBox from '@components/radio-box.vue'
  import KmSearchInput from '@components/input-search.vue'
  import KmInput from '@components/input-normal.vue'
  import KmButton from '@components/button.vue'
  import KmDialog from '@components/dialog.vue'
  import KmScreen from '@components/screen.vue'
  import axios from '@http'

  export default {
    name: 'App',
    data() {
      return {
        headerData: [
          {
            name: '通讯录',
            url: '/address'
          },
          {
            name: '考勤',
            url: '/address'
          },
          {
            name: '绩效',
            url: '/address'
          },
          {
            name: '会议室',
            url: '/address'
          },
          {
            name: 'QS',
            url: '/address'
          },
          {
            name: '行政审批',
            url: '/address'
          }
        ],
        asideData: [
          {
            id: 1,
            name: '我的申请',
            icon: '',
            show: true,

            children: [
              {
                id: 1,
                name: '付款申请',
                url: '/pay-apply'
              },
              {
                id: 2,
                name: '费用报销',
                url: '/pay-apply'
              },
              {
                id: 3,
                name: '借款',
                url: '/pay-apply'
              },
              {
                id: 4,
                name: '我发起的申请',
                url: '/pay-apply'
              }
            ]
          },
          {
            id: 2,
            name: '审批管理',
            show: true,
            icon: '',
            children: [
              {
                id: 1,
                name: '我审批的申请',
                url: '/pay-apply'
              },
              {
                id: 2,
                name: '所有申请',
                url: '/pay-apply'
              }
            ]
          },
          {
            id: 3,
            name: '后台管理',
            show: true,
            icon: '',
            children: [
              {
                id: 1,
                name: '配置信息',
                url: '/pay-apply'
              },
              {
                id: 2,
                name: '审批流程',
                url: '/pay-apply'
              },
              {
                id: 3,
                name: '付款账户信息',
                url: '/pay-apply'
              }
            ]
          }
        ],
        tableData: {
          th: [
            {
              name: '日期',
              id: 1,
              fixed: true,
              prop: 'date'
            },
            {
              name: '渠道',
              id: 2,
              prop: 'channel'
            },
            {
              name: '日活',
              id: 3,
              prop: 'dau'
            },
            {
              name: '月活',
              id: 4,
              prop: 'mau'
            },
            {
              name: '月活',
              id: 5,
              prop: 'mau5'
            },
            {
              name: '月活',
              id: 6,
              prop: 'mau6'
            },
            {
              name: '月活',
              id: 7,
              prop: 'mau7'
            },
            {
              name: '月活',
              id: 8,
              prop: 'mau8'
            },
            {
              name: '月活',
              id: 9,
              prop: 'mau9'
            },
            {
              name: '月活',
              id: 10,
              prop: 'mau10'
            },
            {
              name: '月活',
              id: 11,
              prop: 'mau11'
            },
            {
              name: '月活',
              id: 12,
              prop: 'mau12'
            },
            {
              name: '月活',
              id: 13,
              prop: 'mau13'
            },
            {
              name: '月活',
              id: 14,
              prop: 'mau14'
            },
            {
              name: '月活',
              id: 15,
              prop: 'mau15'
            }
          ],
          td: [
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            },
            {
              date: '2017-02-15',
              channel: 'sm_kds_xdf',
              dau: 2000,
              mau: 2000,
              mau5: 2000,
              mau6: 2000,
              mau7: 2000,
              mau8: 2000,
              mau9: 2000,
              mau10: 2000,
              mau11: 2000,
              mau12: 2000,
              mau13: 2000,
              mau14: 2000,
              mau15: 2000
            }
          ]
        },
        tabData: [
          {
            name: '付款公司配置',
            id: 1
          },
          {
            name: '核算项目配置',
            id: 2
          },
          {
            name: '一级业务类型',
            id: 3
          },
          {
            name: '二级业务类型',
            id: 4
          },
          {
            name: '税率',
            id: 5
          }
        ],
        cascadeData: {
          company: [],
          first: []
        },
        paginationData: {
          count: 101,
          number: 5,
          cur: 1
        },
        checkChoiceData: [
          {label: '选择一', name: 'choice1', value: 'value1'},
          {label: '选择二', name: 'choice1', value: 'value2'},
          {label: '选择三', name: 'choice1', value: 'value3'},
          {label: '选择四', name: 'choice1', value: 'value4'},
          {label: '选择五', name: 'choice1', value: 'value5'}
        ],
        radioChoiceData: [
          {label: '选择一', name: 'choice1', value: 'value1'},
          {label: '选择二', name: 'choice1', value: 'value2'},
          {label: '选择三', name: 'choice1', value: 'value3'},
          {label: '选择四', name: 'choice1', value: 'value4'},
          {label: '选择五', name: 'choice1', value: 'value5'}
        ],
        btnData: [
          {
            id: 1,
            name: '提交',
            btnType: 'normal'
          },
          {
            id: 2,
            name: '取消',
            btnType: 'white'
          }
        ],
        inputData: {
          search: 'abv'
        },
        dialogShow: false,
        screenData: {
          title: '筛选标题',
          list: [
            {
              name: '张小虎',
              id: 111
            },
            {
              name: '张小虎',
              id: 111
            },
            {
              name: '张小虎',
              id: 111
            },
            {
              name: '张小虎',
              id: 111
            },
            {
              name: '技术部',
              id: 111,
              children: [
                {
                  name: 'web开发组',
                  id: 1111
                },
                {
                  name: '安卓开发组',
                  id: 1111
                },{
                  name: '苹果开发组',
                  id: 1111
                },{
                  name: '测试质控组',
                  id: 1111
                }
              ]
            }
          ]
        }
      }
    },
    mounted() {
    },
    components: {
      KmHeader,
      KmAside,
      KmMain,
      KmTable,
      KmCascade,
      KmPagination,
      KmCheckBox,
      KmRadioBox,
      KmSearchInput,
      KmInput,
      KmButton,
      KmDialog,
      KmScreen
    },
    methods: {
      handlerTableList(sentence) {
        this.tableData.th.forEach(value => {
          if (!value.handleItem) {
            sentence(value)
          }
        })
      },
      tabItemClick(item) {
        this.getTabList(item.id)
      },
      tableEdit(item) {
        item.editStatus = true
        item.status = 2
      },
      tableDelete(item, index) {
        this.tableData.td.splice(index, 1)
      },
      tableSave(item, index) {
        let count = 0
        let editCount = 0
        this.handlerTableList((value) => {
          if (!item[`${value.prop}Edit`]) {
            editCount++
          }
          if (!item[value.prop]) {
            count++
          }
          item[value.prop] = item[`${value.prop}Edit`]
        })
        if (editCount === this.tableData.th.length - 1) {
          alert('请输入内容')
        } else {
          item.editStatus = false
          item.status = 1
          if (count === this.tableData.th.length - 1) {
            this.tableData.td.push(this.tableData.td.shift())
          }
        }
      },
      tableCancel(item, index) {
        let count = 0
        this.handlerTableList((value) => {
          item[`${value.prop}Edit`] = item[value.prop]
          if (!item[value.prop]) {
            count++
          }
        })
        if (count === this.tableData.th.length - 1) {
          this.tableData.td.splice(index, 1)
        } else {
          item.editStatus = false
          item.status = 1
        }
      },
      mainRightClick() {
        let children = {}
        this.handlerTableList((value) => {
          this.$set(children, value.prop, '')
          this.$set(children, `${value.prop}Edit`, '')
        })
        this.$set(children, 'editStatus', true)
        this.$set(children, `status`, 2)
        this.tableData.td.unshift(children)
      },
      btnClick(id) {
        console.log(id);
      },
      openDialog() {
        this.dialogShow = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@style/base.scss";
  @import "~@style/mixin.scss";

  #app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $color-bg-page;
  }
</style>
