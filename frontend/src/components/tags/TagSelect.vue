<template>
  <main class="select-main">
    <div class="select-title-wrapper">
      <h1 class="select-title">Select your favorite music genres</h1>
      <h3 class="select-subtitle">Tell us your favorite music genres so you see the rooms you want to visit first!</h3>
    </div>

    <tag-list @select-tag="selectTag" class="select-tags" :tags="tags"></tag-list>
    <chi-button @click="handleSaveSelected" class="select-skip" :disabled="!areAnySelected" inline>Continue</chi-button>
    <chi-button @click="handleProceed" class="select-skip" inline>Skip for now</chi-button>
  </main>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { tag as tagApi, userTag as userTagApi } from '@/api';
import TagList from './TagList.vue';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'tag-select',
  setup() {
    const router = useRouter();
    const userStore = useAuthStore();

    const tags = ref([]);

    onMounted(async () => {
      const data = await tagApi.getAll();
      tags.value = data.map(tag => ({ ...tag, selected: false }));
    });

    const selectTag = tagId => {
      const tag = tags.value.find(tag => tag.id === tagId);
      tag.selected = !tag.selected;
    };

    const areAnySelected = computed(() => {
      return tags.value.filter(tag => tag.selected).length > 0;
    });

    const handleSaveSelected = async () => {
      const userId = userStore.getUser.id;
      const tagIds = tags.value.filter(tag => tag.selected).map(tag => tag.id);

      await userTagApi.add({ userId, tagIds });
      handleProceed();
    };

    const handleProceed = () => {
      router.push({ name: 'Home' });
    };

    return { tags, areAnySelected, selectTag, handleSaveSelected, handleProceed };
  },
  components: { TagList },
};
</script>

<style scoped>
.select-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 10%;
}

.select-title-wrapper {
  margin-bottom: 64px;
}

.select-title {
  margin-top: 0;
  margin-bottom: 56px;
  font: var(--font-accent);
  font-size: var(--font-size-huge);
  color: var(--color-primary);
}

.select-subtitle {
  margin: 0;
  width: 50%;
  font: var(--font-accent);
  font-size: var(--font-size-large);
}

.select-tags {
  max-width: 85%;
  max-height: calc(88px * 2);
  overflow-y: scroll;
  margin-bottom: 20px;
  direction: rtl;
  padding-left: 20px;
  margin-left: -20px;
}

.select-skip {
  font: var(--font-accent);
  align-self: flex-end;
  margin-bottom: 8px;
}

.select-skip:disabled {
  color: var(--color-primary-disabled);
  cursor: initial;
}
</style>
