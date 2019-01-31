import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import States from './views/States.vue'
import Divisions from './views/Divisions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        heading: "Welcome" 
      }
    },
    {
      path: '/',
      name: 'states',
      component: States,
      meta: { 
        heading: "By States" 
      }
    },
    {
      path: '/',
      name: 'divisions',
      component: Divisions,
      meta: { 
        heading: "By Divisions" 
      }
    }
  ]
})
