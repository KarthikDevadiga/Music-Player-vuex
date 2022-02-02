import { createRouter, createWebHistory } from 'vue-router';
import Manage from '@/views/Manage.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/manage',
    component: Manage,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  // function returning an object
  history: createWebHistory(process.env.BASE_URL), // cofiguration setting
  // process => node object globally avilable
  // env => enviornment
  // baseurl can be changed through vue cli
  routes,
});

export default router;
