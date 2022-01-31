// prettier-ignore
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import './assets/img/header.png';
import veeValidationPlugin from './include/validation';
import { auth } from './include/fireBase';

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.use(veeValidationPlugin);
    app.mount('#app');
  }
});
