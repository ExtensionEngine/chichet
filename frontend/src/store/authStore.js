import { computed, ref } from 'vue';
import { auth as authApi } from '@/api';
import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useStorage('user', {}));

  const getUser = computed(() => {
    return user.value;
  });

  const setUser = userToSet => {
    user.value = userToSet;
  };

  const signOut = async router => {
    await authApi.signOut();
    router.push({ name: 'Auth' });
    user.value = {};
  };

  return { user, getUser, setUser, signOut };
});
