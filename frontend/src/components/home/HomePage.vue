<template>
  <main class="home-main">
    <chi-sidebar
      @switch-sections="switchSections"
      @select="handleSelect"
      :sections="currentSections.content"
      :footer="currentSections.footer"
    ></chi-sidebar>
    <button @click="authStore.signOut(router)">Sign out</button>
  </main>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue';
import { roomsSectionsDefault, usersSectionsDefault } from './constants';
import ChiSidebar from '../common/ChiSidebar.vue';
import { room as roomApi } from '@/api';
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

    const currentSections = computed(() => sections[sectionsIndex.value]);

    onMounted(async () => {
      const rooms = await roomApi.getAll();
      roomsSections.content[1].elements = rooms.map(({ title }) => ({
        iconLeft: 'globe.svg',
        textLeft: title,
        textRight: '0',
        iconRight: 'profile_darker.svg',
        selected: false,
      }));
    });

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
  components: { ChiSidebar },
};
</script>

<style>
.home-main {
  height: 100%;
}
</style>
