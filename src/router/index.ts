import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Quiz from '@/views/Quiz.vue';
import Test from '@/views/Test.vue';
import Leaderboard from '@/views/Leaderboard.vue';
import NewItem from '@/views/NewItem.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/test',
    name: 'TestPage',
    component: Test
  },
  {
    path: '/leaderboard',
    name: 'LeaderBoard',
    component: Leaderboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
