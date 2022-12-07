import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import about from '../views/About.vue';
import Loading from '@/Shared/component/Loading/Loading.vue';
import TodoList from '@/Shared/component/Todo/MyTodoList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
