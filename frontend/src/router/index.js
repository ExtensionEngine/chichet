import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home/HomePage.vue';
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

router.beforeEach((to, from) => {
  const isLoggedIn = useAuthStore().isLoggedIn;
  const isAuthRoute = to.name === 'Auth';

  if (!isLoggedIn && !isAuthRoute) {
    return { name: 'Auth' };
  }

  if (isLoggedIn && isAuthRoute) {
    return { name: 'Home' };
  }
});

export default router;
