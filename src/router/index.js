import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodosRouter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoRouter',
    component: TodoList
  },
  {
    path: '/form',
    name: 'FormRouter',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormRouter.vue')
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

export default router
