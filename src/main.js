// prettier-ignore
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import './assets/img/header.png';

createApp(App).use(store).use(router).mount('#app');
