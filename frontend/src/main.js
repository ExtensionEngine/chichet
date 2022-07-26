import App from './App.vue';
import ChiButton from './components/common/ChiButton.vue';
import ChiField from './components/common/ChiField.vue';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import vAutofocus from './directives/vAutofocus';

createApp(App)
  .use(router)
  .use(createPinia())
  .component('ChiButton', ChiButton)
  .component('ChiField', ChiField)
  .directive('autofocus', vAutofocus)
  .mount('#app');
