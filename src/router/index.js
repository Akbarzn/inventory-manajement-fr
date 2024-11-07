// import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import LoginViews from '@/views/LoginViews.vue'

const routes = [
  {
    path: '/admin/:component',
    name: 'admin',
    component: AdminView,
    props:true,
    meta:{
      requiresAuth:true,
      role:'admin'
    }
  },
  {
    path: '/user/:component',
    name: 'user',
    component:UserView,
    props:true,
    meta:{
      requiresAuth:true,
      role:'user'
    }
  },
  {
    path:'/login',
    name:'login',
    component:LoginViews
  },
  {
    path:'/',
    redirect:{'name':'admin',params:{component:'items'}},
  }
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
const isAuthenticated = Boolean(localStorage.getItem('auth'))
const userRole = localStorage.getItem('role')

if(to.meta.requiresAuth && !isAuthenticated){
  alert('Ypu need to login to access this page')
  next({name:'login'})
}else if(to.meta.requiresAuth && isAuthenticated && to.meta.role !== userRole){
  alert('You do not have permission to access this page.')
  next(false)
}else{
  next()
}
})

export default router
