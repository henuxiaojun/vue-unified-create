import Vue from 'vue'
import Configuration from './configuration.vue'

import '@style/reset.scss'
import '@style/layout.scss'
import '@style/scrollbar.scss'

new Vue({
  el: '#app',
  components: { Configuration },
  template: '<Configuration/>'
})
