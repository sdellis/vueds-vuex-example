// Vue Design System: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import router from "@/router"
import WebFontLoader from "@/utils/webFontLoader" // eslint-disable-line no-unused-vars
import Meta from "vue-meta"
import Vuex from "vuex"
import App from "@/App"

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

Vue.use(DesignSystem)
Vue.use(Meta)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.devtools = true

let store = new Vuex.Store({
  state: { count: 10 },

  mutations: {
    increment(state) {
      state.count++
    },
  },

  getters: {
    count: state => {
      return state.count
    },
  },
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App },
})
