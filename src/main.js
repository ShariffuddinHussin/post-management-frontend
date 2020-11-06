import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index';
import axios from 'axios';
import Vuetify from 'vuetify';

// window.axios = require('axios');
// window.axios 
Vue.use(axios)

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
