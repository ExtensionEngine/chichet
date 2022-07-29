<template>
  <article class="card-article" :class="{ 'card-article--selected': selected }">
    <span class="card-group">
      <img class="card-icon--left" :src="iconLeftUrl" alt="icon-left" />
      <p class="card-text">{{ textLeft }}</p>
    </span>

    <span v-if="!!textRight" class="card-group">
      <p class="card-text">{{ textRight }}</p>
      <img class="card-icon--right" :src="iconRightUrl" alt="icon-right" />
    </span>
  </article>
</template>

<script>
import { computed } from 'vue';
import getIconUrl from '@/utils/getIconUrl';

export default {
  name: 'chi-card',
  props: {
    iconLeft: { type: String, required: true },
    textLeft: { type: String, required: true },
    iconRight: { type: String, default: null },
    textRight: { type: String, default: null },
    selected: { type: Boolean, default: false },
  },
  setup(props) {
    const iconLeftUrl = computed(() => getIconUrl(props.iconLeft));
    const iconRightUrl = computed(() => getIconUrl(props.iconRight));

    return { iconLeftUrl, iconRightUrl };
  },
};
</script>

<style scoped>
.card-article {
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 12px;
  cursor: pointer;
}

.card-article--selected {
  background-color: var(--color-primary-subdued);
}

.card-article:hover {
  border-color: var(--color-primary-subdued);
}

.card-group {
  display: flex;
  align-items: center;
}

.card-icon--left {
  width: 32px;
  height: 32px;
  margin-right: 16px;
  padding: 6px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  filter: var(--shadow);
}

.card-icon--right {
  width: 16px;
  height: 16px;
  margin-left: 4px;
  filter: var(--shadow);
}

.card-text {
  margin: 0;
}
</style>
