<template>
  <main class="home-main">
    <chi-sidebar
      @switch-sections="switchSections"
      @select="handleSelect"
      :sections="currentSections.content"
      :footer="currentSections.footer"
    ></chi-sidebar>

    <home-chat></home-chat>
    <!-- <button @click="authStore.signOut(router)">Sign out</button> -->
  </main>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { roomsSectionsDefault, usersSectionsDefault } from './constants';
import ChiSidebar from '../common/ChiSidebar.vue';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';
import HomeChat from './HomeChat.vue';

export default {
  name: 'home-page',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const roomsSections = reactive(roomsSectionsDefault);
    const usersSections = reactive(usersSectionsDefault);

    const sectionsIndex = ref(0);
    const sections = [roomsSections, usersSections];

    const currentSections = computed(() => sections[sectionsIndex.value]);

    const switchSections = () => {
      sectionsIndex.value = (sectionsIndex.value + 1) % sections.length;
    };

    const handleSelect = roomName => {
      if (sectionsIndex.value !== 0) return;

      roomsSections.content[1].elements.forEach(room => {
        if (room.selected === true) room.selected = false;
        if (room.textLeft === roomName) room.selected = true;
      });
    };

    return { authStore, router, currentSections, switchSections, handleSelect };
  },
  components: { ChiSidebar, HomeChat },
};
</script>

<style>
.home-main {
  height: 100%;
  display: flex;
}
</style>
