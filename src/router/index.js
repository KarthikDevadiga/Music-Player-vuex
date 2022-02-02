import { createRouter, createWebHistory } from 'vue-router';
import Manage from '@/views/Manage.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'manage',
    path: '/manage',
    component: Manage,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    path: '/manage-music',
    redirect: { name: 'manage' }, // redirects to manage if user trys any old link i.e music/manage-music
  },
];

const router = createRouter({
  // function returning an object
  history: createWebHistory(process.env.BASE_URL), // cofiguration setting
  // process => node object globally avilable
  // env => enviornment
  // baseurl can be changed through vue cli
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

export default router;
