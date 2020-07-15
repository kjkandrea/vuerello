import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/PageHome'
import Login from '../components/PageLogin'
import Board from '../components/PageBoard'
import Card from '../components/board/ComponentCard'
import NotFound from '../components/PageNotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { 
      path: '/b/:bid',
      component: Board,
      children : [
        { path: 'c/:cid', component: Card }
      ]
    },
    { path: '*', component: NotFound }
  ]
})

export default router