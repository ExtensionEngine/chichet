import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(useStorage('user', {}));

  const getUser = computed(() => {
    return user.value;
  });

  const isLoggedIn = computed(() => {
    return !!user.value.id;
  });

  const setUser = userToSet => {
    user.value = userToSet;
  };

  return { user, getUser, isLoggedIn, setUser };
});
