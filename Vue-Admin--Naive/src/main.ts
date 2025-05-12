import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'virtual:uno.css';
import router from './router';
import './style/style.scss';
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
