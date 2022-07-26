import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeTemp.vue';
import TagSelect from '@/components/tags/TagSelect.vue';
import { useAuthStore } from '@/store/authStore';
import UserAuth from '@/components/auth/UserAuth.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
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

router.beforeEach(async (to, from) => {
  if (!useAuthStore().getUser.id && to.name !== 'Auth') {
    return { name: 'Auth' };
  }
});

export default router;
