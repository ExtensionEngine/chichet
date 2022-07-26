import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('user', () => {
  const user = ref({});

  const getUser = computed(() => {
    return user.value;
  });

  const setUser = userToSet => {
    user.value = userToSet;
  };

  return { user, getUser, setUser };
});
