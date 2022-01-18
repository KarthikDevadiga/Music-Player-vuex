// prettier-ignore
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import './assets/img/header.png';
import veeValidationPlugin from './include/validation';
import FireBase from './include/fireBase';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(veeValidationPlugin);
app.use(FireBase);
app.mount('#app');
