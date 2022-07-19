import { createRouter, createWebHistory } from 'vue-router';
import TagSelect from '@/components/tags/TagSelect.vue';
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
    component: TagSelect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
