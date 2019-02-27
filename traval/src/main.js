import Vue from 'vue'
import App from './App'
import './common/css/reset.css';
import './common/js/flexble';
import './assets/iconfont/iconfont.css';
import router from './router';
import store from "./store";
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
