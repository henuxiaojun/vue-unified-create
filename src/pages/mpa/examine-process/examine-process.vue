<template>
  <div id="app">
    <km-header :headList="headerData"></km-header>
    <km-aside :asideList="asideData"></km-aside>
    <km-main :headerName="'审批流程'"
             :rightName="'新增'"
             @rightClick="mainRightClick"
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
    <km-main :headerName="'特定审批人配置'"
             :rightName="'新增'"
    >
      <template slot="main-body">
        <km-table
          :th="tableBottomData.th"
          :td="tableBottomData.td"
          @tableEdit="tableEdit"
          @tableDelete="tableDelete"
          @tableSave="tableSave"
          @tableCancel="tableCancel"
        >
        </km-table>
      </template>
    </km-main>
  </div>
</template>

<script>
  import KmHeader from '@modules/km-pc-header.vue'
  import KmAside from '@modules/km-pc-aside.vue'
  import KmMain from '@modules/km-pc-main.vue'
  import KmTable from '@modules/km-pc-table.vue'
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
              name: '金额',
              id: 1,
              prop: 'money'
            },
            {
              name: '审批流',
              id: 2,
              prop: 'process'
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
        tableBottomData: {
          th: [
            {
              name: '序号',
              id: 1,
              prop: 'number'
            },
            {
              name: '角色',
              id: 2,
              prop: 'role'
            },
            {
              name: '人员',
              id: 3,
              prop: 'name'
            },
            {
              name: '操作',
              id: 4,
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
        }
      }
    },
    mounted() {
      this.pageInit()
    },
    components: {
      KmHeader,
      KmAside,
      KmMain,
      KmTable
    },
    methods: {
      pageInit() {
        this.getTabList(1)
        this.getBottomTable()
      },
      getTabList(id) {
        axios.get(`/oa/process`)
          .then(res => {
            res.forEach(item => {
              if (!item.status) {
                this.$set(item, 'status', 1)
                this.handlerTableList('first', (value) => {
                  this.$set(item, `${value.prop}Edit`, item[value.prop])
                })
              }
            })
            this.tableData.td = res
          })
      },
      getBottomTable() {
        axios.get(`/oa/processrole`)
          .then(res => {
            res.forEach(item => {
              if (!item.status) {
                this.$set(item, 'status', 1)
                this.handlerTableList('second', value => {
                  this.$set(item, `${value.prop}Edit`, item[value.prop])
                })
              }
            })
            this.tableBottomData.td = res
          })
      },
      handlerTableList(type, sentence) {
        if (type === 'first') {
          this.tableData.th.forEach(value => {
            if (!value.handleItem) {
              sentence(value)
            }
          })
        } else if (type === 'second') {
          this.tableBottomData.th.forEach(value => {
            if (!value.handleItem) {
              sentence(value)
            }
          })
        }

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
