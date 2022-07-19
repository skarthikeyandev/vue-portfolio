import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/Home.vue'
import About from '../components/About.vue'
import Resume from '../components/Resume.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: About
    // component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
