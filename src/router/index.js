import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import FeedView from '../views/FeedView.vue'
import IndividualPageView from '../views/IndividualPageView.vue'
import CommunityView from '../views/CommunityView.vue'
import CommunityTest from '../views/CommunityTest.vue'
import Test from '../views/Test.vue'
import Recommendation from '../views/Recommendation.vue' 
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
    {
      path: '/individual',
      name: 'individual',
      component: IndividualPageView
    },
    {
      path: '/community-test',
      name: 'community-test',
      component: CommunityTest
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
  ]
})

export default router