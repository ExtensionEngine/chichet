<template>
  <main class="home-main">
    <chi-sidebar @switch-sections="switchSections" :sections="sections[sectionsIndex]"></chi-sidebar>
    <button @click="authStore.signOut(router)">Sign out</button>
  </main>
</template>

<script>
import { roomsSections, usersSections } from './constants';
import ChiSidebar from '../common/ChiSidebar.vue';
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'home-page',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const sectionsIndex = ref(0);
    const sections = [roomsSections, usersSections];

    const switchSections = () => {
      sectionsIndex.value = (sectionsIndex.value + 1) % sections.length;
    };

    return { authStore, router, sections, sectionsIndex, switchSections };
  },
  components: { ChiSidebar },
};
</script>

<style>
.home-main {
  height: 100%;
}
</style>
