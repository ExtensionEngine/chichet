<template>
  <main class="home-main">
    <button @click="authStore.signOut(router)">Sign out</button>
  </main>
</template>

<script>
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'home-page',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    return { authStore, router };
  },
};
</script>

<style>
.home-main {
  height: 100%;
}
</style>
