<template>
  <main class="select-main">
    <div class="select-title-wrapper">
      <h1 class="select-title">Select your favorite music genres</h1>
      <h3 class="select-subtitle">Tell us your favorite music genres so you see the rooms you want to visit first!</h3>
    </div>

    <tag-list class="select-tags" :tags="tags"></tag-list>
    <chi-button class="select-skip" inline>Skip for now >></chi-button>
  </main>
</template>

<script>
import { onMounted, reactive } from 'vue';
import ChiButton from '../common/ChiButton.vue';
import { tag } from '@/api';
import TagList from './TagList.vue';

export default {
  name: 'tag-select',
  setup() {
    const tags = reactive([]);

    onMounted(async () => {
      const tagsArray = await tag.fetch();
      tagsArray.forEach(el => {
        tags.push({ ...el, selected: false });
      });
    });

    return { tags };
  },
  components: { TagList, ChiButton },
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
}
</style>
