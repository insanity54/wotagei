// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePlyr from 'vue-plyr'
import Vuetify from 'vuetify'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.use(Vuetify)
Vue.use(VuePlyr);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
