import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import vAutofocus from './directives/vAutofocus';

createApp(App).use(router).directive('autofocus', vAutofocus).mount('#app');
