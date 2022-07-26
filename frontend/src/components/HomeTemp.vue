<template>
  <div>
    <button @click="authStore.signOut(router)">Sign out</button>
  </div>
</template>

<script>
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'home-temp',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    return { authStore, router };
  },
};
</script>
