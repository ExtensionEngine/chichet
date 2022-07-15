import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/components/auth/SignIn.vue';

const routes = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
