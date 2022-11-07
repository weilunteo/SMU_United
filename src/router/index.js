import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import FeedView from '../views/FeedView.vue'

// dummy views
import SignupView2 from '../views/SignupView2.vue'
import LoginView2 from '../views/LoginView2.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {path: '/signup2',
    name: 'signup2',
    component: SignupView2
    },
    {path: '/login2',
    name: 'login2',
    component: LoginView2
    }
  ]
})

export default router