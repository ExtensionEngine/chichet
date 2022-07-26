import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  state: () => ({
    user: {},
  }),

  getters: {
    getUser() {
      return this.user;
    },
  },

  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
