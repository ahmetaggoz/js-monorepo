import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BTable, BTbody, BThead, BTfoot, BTr, BTd, BTh, TablePlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('b-table', BTable)
Vue.component('b-tbody', BTbody)
Vue.component('b-thead', BThead)
Vue.component('b-tfoot', BTfoot)
Vue.component('b-tr', BTr)
Vue.component('b-td', BTd)
Vue.component('b-th', BTh)


// Import Bootstrap and BootstrapVue CSS files (order is important)


Vue.use(TablePlugin)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.createApp(App).mount('#app')