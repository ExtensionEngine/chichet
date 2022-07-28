<template>
  <aside class="sidebar-aside">
    <div>
      <section v-for="{ label, maxHeight, elements } in sections" :key="label" class="sidebar-section">
        <h2 class="sidebar-header">{{ label }}</h2>
        <section class="sidebar-list" :style="{ maxHeight: maxHeight || '42vh' }">
          <chi-card
            v-for="{ iconLeft, textLeft, iconRight, textRight, selected } in elements"
            :key="textLeft"
            :icon-left="iconLeft"
            :text-left="textLeft"
            :icon-right="iconRight"
            :text-right="textRight"
            :selected="selected"
            class="sidebar-card"
          ></chi-card>
        </section>
      </section>
    </div>

    <section class="sidebar-footer">
      <span @click="$emit('switch-sections')" class="sidebar-switch">
        <h3 class="sidebar-header--last">{{ footer }}</h3>
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
    footer: { type: String, required: true },
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
  overflow-y: scroll;
}

.sidebar-card {
  margin-right: 8px;
  padding: 12px;
}

.sidebar-card:first-of-type {
  margin-top: 12px;
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
  cursor: pointer;
}
</style>
