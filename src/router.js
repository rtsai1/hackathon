import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import States from './views/States.vue'
import State from './views/State.vue'
import Division from './views/Division.vue'
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
      path: '/states',
      name: 'states',
      component: States,
      meta: { 
        heading: "By State" 
      }
    },
    {
      path: '/state/:stateId',
      name: 'state',
      component: State,
      meta: { 
        heading: "State" 
      }
    },
    {
      path: '/division/:divisionId',
      name: 'division',
      component: Division,
      meta: { 
        heading: "Division" 
      }
    },
    {
      path: '/divisions',
      name: 'divisions',
      component: Divisions,
      meta: { 
        heading: "By Division" 
      }
    }
  ]
})
