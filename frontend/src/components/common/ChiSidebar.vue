<template>
  <aside class="sidebar-aside">
    <div>
      <section class="sidebar-section">
        <h2 class="sidebar-header">Recomended Rooms</h2>
        <section class="sidebar-list" :style="{ maxHeight: '30vh' }">
          <chi-card class="sidebar-card"></chi-card>
        </section>
      </section>

      <section class="sidebar-section">
        <h2 class="sidebar-header">Recomended Rooms</h2>
        <section class="sidebar-list" :style="{ maxHeight: '30vh' }">
          <chi-card class="sidebar-card"></chi-card>
        </section>
      </section>
    </div>

    <section class="sidebar-footer">
      <span class="sidebar-switch">
        <h3 class="sidebar-header--last">Users online</h3>
        <img src="@/assets/img/arrow.svg" alt="arrow" />
      </span>
    </section>
  </aside>
</template>

<script>
import ChiCard from './ChiCard.vue';

export default {
  name: 'room-list',
  props: {
    sections: { type: Object, required: true },
  },

  emits: ['switch-sections', 'select'],
  components: { ChiCard },
};
</script>

<style scoped>
.sidebar-aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  height: 100%;
  padding: 24px;
  border-bottom-right-radius: 120px;
  background-color: var(--color-primary);
  font: var(--font-accent);
  color: var(--color-secondary);
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-header {
  margin: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-secondary);
  font-size: var(--font-size-large);
}

.sidebar-list {
  width: 100%;
  display: inline-block;
  max-height: initial;
  overflow-y: scroll;
}

.sidebar-card {
  margin-right: 8px;
  padding: 12px;
}

.sidebar-card:first-of-type {
  padding-top: 24px;
}

.sidebar-footer {
  width: 50%;
  border-top: 1px solid var(--color-secondary);
}

.sidebar-switch {
  display: flex;
  margin-top: 16px;
}

.sidebar-header--last {
  margin: 0;
  margin-right: 8px;
  font-size: var(--font-size-large);
}
</style>
