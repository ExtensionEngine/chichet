<template>
  <main>
    <h1 class="select-title">Select your favorite music genres</h1>
    <h3 class="select-subtitle">Tell us your favorite music genres so you see the rooms you want to visit first!</h3>

    <tag-list :tags="tags"></tag-list>
    <chi-button class="select-skip" inline>Skip for now >></chi-button>
  </main>
</template>

<script>
import ChiButton from '../common/ChiButton.vue';
import TagList from './TagList.vue';

export default {
  name: 'tag-select',
  setup() {
    const tags = [
      { id: 1, label: 'Rock', selected: true },
      { id: 2, label: 'Metal', selected: true },
      { id: 3, label: 'Classical', selected: true },
      { id: 4, label: 'Rock', selected: true },
      { id: 5, label: 'Metal', selected: false },
      { id: 6, label: 'Classical', selected: false },
      { id: 7, label: 'Rock', selected: false },
      { id: 8, label: 'Metal', selected: false },
      { id: 9, label: 'Classical', selected: false },
    ];

    return { tags };
  },
  components: { TagList, ChiButton },
};
</script>

<style scoped>
.select-title {
  font: var(--font-accent);
  font-size: var(--font-size-huge);
  color: var(--color-primary);
}

.select-subtitle {
  width: 50%;
  font: var(--font-accent);
  font-size: var(--font-size-large);
}

.select-skip {
  font: var(--font-accent);
}
</style>
