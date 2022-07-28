<template>
  <div>
    <button @click="authStore.signOut(router)">Sign out</button>
    <button @click="toggleProfileActive">Toggle User Profile</button>
    <user-profile @close-profile="toggleProfileActive" :active="isProfileActive" />
  </div>
</template>

<script>
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';
import UserProfile from './userProfile/index.vue';
import useToggle from '@/composables/useToggle';

export default {
  name: 'home-temp',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const { isTrue: isProfileActive, toggle: toggleProfileActive } = useToggle();

    return { authStore, router, isProfileActive, toggleProfileActive };
  },
  components: { UserProfile },
};
</script>
