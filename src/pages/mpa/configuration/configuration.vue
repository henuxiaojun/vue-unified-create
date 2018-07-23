<template>
  <div id="app">
    <km-header :headList="headerData"></km-header>
    <km-aside :asideList="asideData"></km-aside>
    <km-main :tabData="tabData"
             :rightName="'新增'"
             @rightClick="mainRightClick"
             @tabClick="tabItemClick"
    >
      <template slot="main-body">
        <km-table
          :th="tableData.th"
          :td="tableData.td"
          @tableEdit="tableEdit"
          @tableDelete="tableDelete"
          @tableSave="tableSave"
          @tableCancel="tableCancel"
        >
        </km-table>
      </template>
    </km-main>
    <km-main :headerName="'配置对应分配'">
      <template slot="main-body">
        <km-cascade @cascadeClick="cascadeItemClick" :list="cascadeData.company"></km-cascade>
        <km-cascade @cascadeClick="cascadeItemClick" :list="cascadeData.first"></km-cascade>
      </template>
    </km-main>
  </div>
</template>

<script>
  import KmHeader from '@modules/km-pc-header.vue'
  import KmAside from '@modules/km-pc-aside.vue'
  import KmMain from '@modules/km-pc-main.vue'
  import KmTable from '@modules/km-pc-table.vue'
  import KmCascade from '@modules/km-pc-cascade.vue'
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
            id: 3,
            name: '后台管理',
            show: true,
            icon: '',
            children: [
              {
                id: 1,
                name: '配置信息',
                url: '/configuration/configuration.html'
              },
              {
                id: 2,
                name: '审批流程',
                url: '/examine-process/examine-process.html'
              }
            ]
          }
        ],
        tableData: {
          th: [
            {
              name: '序号',
              id: 1,
              prop: 'number'
            },
            {
              name: '付款公司',
              id: 2,
              prop: 'company'
            },
            {
              name: '操作',
              id: 3,
              prop: 'handle',
              handleItem: [
                {
                  name: '编辑',
                  status: 1,
                  callback: 'tableEdit'
                },
                {
                  name: '删除',
                  status: 1,
                  callback: 'tableDelete'
                },
                {
                  name: '保存',
                  status: 2,
                  callback: 'tableSave'
                },
                {
                  name: '取消',
                  status: 2,
                  callback: 'tableCancel'
                }
              ]
            }
          ],
          td: []
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
        }
      }
    },
    mounted() {
      this.pageInit()
      this.getCascadeList()
    },
    components: {
      KmHeader,
      KmAside,
      KmMain,
      KmTable,
      KmCascade
    },
    methods: {
      pageInit() {
        this.getTabList(1)
      },
      getTabList(id) {
        axios.get(`/oa/list/?id=${id}`)
          .then(res => {
            res.forEach(item => {
              if (!item.status) {
                this.$set(item, 'status', 1)
                this.handlerTableList((value) => {
                  this.$set(item, `${value.prop}Edit`, item[value.prop])
                })
              }
            })
            this.tableData.td = res
          })
      },
      getCascadeList() {
        axios.get(`/oa/list/?id=1`)
          .then(res => {
            let data = {
              id: 1,
              index: 1,
              choiceType: 'radio',
              th: ['公司'],
              td: []
            }
            res.forEach(item => {
              if (!item.status) {
                data.td.push({
                  id: item.number,
                  name: item.company,
                  checked: false
                })
              }
            })
            this.cascadeData.company.push(data)
          })
        axios.get(`/oa/list/?id=3`)
          .then(res => {
            let data = {
              id: 2,
              index: 2,
              choiceType: 'radio',
              th: ['一级类型'],
              td: []
            }
            res.forEach(item => {
              if (!item.status) {
                data.td.push({
                  id: item.number,
                  name: item.company,
                  checked: false
                })
              }
            })
            this.cascadeData.first.push(data)
          })
      },
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
      cascadeItemClick(item, parent) {
        if (parent.index === 1) {
          if (this.cascadeData.company.length > 1) {
            return
          }
          this.cascadeData.company.push(
            {
              id: 2,
              choiceType: 'check',
              th: ['项目'],
              td: [
                {
                  id: 2,
                  name: '阅读王',
                  checked: false
                },
                {
                  id: 2,
                  name: '看点啥',
                  checked: false
                },
                {
                  id: 2,
                  name: '梧桐阅读',
                  checked: false
                }
              ]
            },
            {
              id: 2,
              choiceType: 'check',
              th: ['一级类型'],
              td: [
                {
                  id: 3,
                  name: '办公费',
                  checked: false
                },
                {
                  id: 3,
                  name: '推广费',
                  checked: false
                }
              ]
            }
          )
        } else {
          if (this.cascadeData.first.length > 1) {
            return
          }
          this.cascadeData.first.push(
            {
              id: 2,
              choiceType: 'check',
              th: ['二级类型'],
              td: [
                {
                  id: 2,
                  name: '其他1',
                  checked: false
                },
                {
                  id: 2,
                  name: '其他2',
                  checked: false
                },
                {
                  id: 2,
                  name: '其他3',
                  checked: false
                }
              ]
            }
          )
        }

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
