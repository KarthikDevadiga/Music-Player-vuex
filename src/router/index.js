import { createRouter, createWebHistory } from 'vue-router';
import Manage from '@/views/Manage.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import store from '@/store';

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
    meta: {
      needUserAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (
    !to.matched.some((record) => {
      // checking if a recored contains a meta field and its key is set to true
      console.log(record);
      return record.meta.requiresAuth;
    })
  ) {
    next();
    return;
  }

  // if (to.name === 'home') {
  //   next();
  //   return;
  // }
  if (store.getters.getUserLogin) {
    next();
  } else {
    next({ name: 'home' }); // also next(false)
  }
});

export default router;
