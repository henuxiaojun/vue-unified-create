import Vue from 'vue'
import ExamineProcess from './examine-process.vue'

import '@style/reset.scss'
import '@style/layout.scss'
import '@style/scrollbar.scss'

new Vue({
  el: '#app',
  components: { ExamineProcess },
  template: '<ExamineProcess/>'
})
