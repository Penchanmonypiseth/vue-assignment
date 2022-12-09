import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/Global.css';
import i18n from './i18n'
createApp(App).use(i18n).use(router).mount('#app');

console.log(process.env.VUE_APP_TEST);
