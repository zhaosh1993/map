import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import map from '@/pages/map.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      
      children:[
      {path:"map",
      name:'map',
      component:'map'}
      
      ]
    }
  ]
})
