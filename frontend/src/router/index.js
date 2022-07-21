import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '@/components/auth/UserAuth.vue';

const routes = [
  {
    path: '/auth',
    name: 'UserAuth',
    component: UserAuth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
