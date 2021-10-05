import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import RosterDisplay from '../views/RosterDisplay.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {path: '/team/:id',
        name: 'roster-display',
        component: RosterDisplay,
    
    }
     
    ]
  })
  
  
  export default router;
  