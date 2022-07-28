<template>
  <article class="card-article">
    <span class="card-group">
      <img class="card-icon--left" :src="getIconUrl('../../assets/img/globe.svg')" />
      <p class="card-text">Room #1</p>
    </span>

    <span class="card-group">
      <p class="card-text">3</p>
      <img class="card-icon--right" :src="getIconUrl('../../assets/img/profile_darker.svg')" />
    </span>
  </article>
</template>

<script>
import getIconUrl from '@/utils/getIconUrl';

export default {
  name: 'chi-card',
  setup() {
    return { getIconUrl };
  },
};
</script>

<style scoped>
.card-article {
  display: flex;
  justify-content: space-between;
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
