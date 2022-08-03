import { createApp } from 'vue';
import { store } from '@/store';
import { i18n } from '@/locale';
import App from '@/App.vue';
// import router from '@/router';

import '@/assets/scss/style.scss';

const app = createApp(App);
app.use(store);
app.use(i18n);
// app.use(router);
app.mount('#app');
