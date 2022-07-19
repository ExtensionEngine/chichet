import { createRouter, createWebHistory } from 'vue-router';
import SelectTags from '@/components/tags/SelectTags.vue';
import UserAuth from '@/components/auth/UserAuth.vue';

const routes = [
  {
    path: '/auth',
    name: 'UserAuth',
    component: UserAuth,
  },
  {
    path: '/tags',
    name: 'Tags',
    component: SelectTags,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
