import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import about from '../views/About.vue';
import NotAvailable from '@/components/Loading/Loading.vue';
import TodoList from '../components/Todo/MyTodoList.vue';

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
    path: '/notAvailable',
    name: 'NotAvailable',
    component: NotAvailable,
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
