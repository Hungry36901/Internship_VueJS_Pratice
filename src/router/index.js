import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/IntroView.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/EventView.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('../views/DataView.vue')
  },
  {
    path: '/compute',
    name: 'compute',
    component: () => import('../views/ComputeView.vue')
  },
  {
    path: '/binding',
    name: 'binding',
    component: () => import('../views/BindingView.vue')
},{
  path: '/form',
  name: 'form',
  component: () => import('../views/FormView.vue')
},{
  path: '/slot',
  name: 'slot',
  component: () => import('../views/SlotView.vue')
},
{
  path: '/condition',
  name: 'condition',
  component: () => import('../views/ConditionView.vue')
},
{
  path: '/loop',
  name: 'loop',
  component: () => import('../views/LoopView.vue')
},
{
  path: '/lifeCycleHooks',
  name: 'lifeCycleHooks',
  component: () => import('../views/LifeCycleHooksView.vue')
},
{
  path: '/variableState',
  name: 'variableState',
  component: () => import('../views/VariableStateView.vue')
},
{
  path: '/reference',
  name: 'reference',
  component: () => import('../views/ReferenceView.vue')
},
{
  path: '/filter',
  name: 'filter',
  component: () => import('../views/FilterView.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
