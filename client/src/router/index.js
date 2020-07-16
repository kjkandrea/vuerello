import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/PageHome'
import Login from '../components/PageLogin'
import Board from '../components/PageBoard'
import Card from '../components/board/ComponentCard'
import NotFound from '../components/PageNotFound'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { 
      path: '/b/:bid', 
      beforeEnter: requireAuth,
      component: Board,
      children : [
        { 
          path: 'c/:cid', 
          component: Card,
          beforeEnter: requireAuth
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})

export default router