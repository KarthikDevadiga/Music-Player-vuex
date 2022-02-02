import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

const router = createRouter({
  // function returning an object
  history: createWebHistory(process.env.BASE_URL), // cofiguration setting
  // process => node object globally avilable
  // env => enviornment
  // baseurl can be changed through vue cli
  routes,
});

export default router;
