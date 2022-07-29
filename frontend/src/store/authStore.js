import { computed, ref } from 'vue';
import { auth as authApi } from '@/api';
import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useStorage('user', {}));

  const getUser = computed(() => {
    return user.value;
  });

  const getUserProfile = computed(() => {
    return {
      username: user.value.username,
      fullName: user.value.fullName,
    };
  });

  const isLoggedIn = computed(() => {
    return !!user.value.id;
  });

  const setUser = userToSet => {
    user.value = userToSet;
  };

  const removeUser = () => {
    user.value = {};
  };

  const signOut = async router => {
    await authApi.signOut();
    removeUser();
    router.push({ name: 'Auth' });
  };

  return { user, getUser, getUserProfile, isLoggedIn, setUser, removeUser, signOut };
});
