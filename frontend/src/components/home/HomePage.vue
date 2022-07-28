<template>
  <main class="home-main">
    <chi-sidebar
      @switch-sections="switchSections"
      @select="handleSelect"
      :sections="sections[sectionsIndex].content"
      :footer="sections[sectionsIndex].footer"
    ></chi-sidebar>
    <button @click="authStore.signOut(router)">Sign out</button>
  </main>
</template>

<script>
import { reactive, ref } from 'vue';
import { roomsSectionsDefault, usersSectionsDefault } from './constants';
import ChiSidebar from '../common/ChiSidebar.vue';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'home-page',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const roomsSections = reactive(roomsSectionsDefault);
    const usersSections = reactive(usersSectionsDefault);

    const sectionsIndex = ref(0);
    const sections = [roomsSections, usersSections];

    const switchSections = () => {
      sectionsIndex.value = (sectionsIndex.value + 1) % sections.length;
    };

    const handleSelect = roomName => {
      if (sectionsIndex.value !== 0) return;

      roomsSections.content[1].elements.forEach(room => {
        if (room.selected === true) room.selected = false;
        if (room.name === roomName) room.selected = true;
      });
    };

    return { authStore, router, sections, sectionsIndex, switchSections, handleSelect };
  },
  components: { ChiSidebar },
};
</script>

<style>
.home-main {
  height: 100%;
}
</style>
