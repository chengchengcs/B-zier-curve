
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './config-routers.js'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes, // （缩写）相当于 routes: routes
    scrollBehavior(to, from, savedPosition) {
        return false;
    },
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
