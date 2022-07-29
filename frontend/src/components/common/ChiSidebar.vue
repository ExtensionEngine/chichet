<template>
  <aside class="sidebar-aside">
    <div class="sidebar-wrapper">
      <section v-for="{ label, maxHeight, elements } in filteredSections" :key="label" class="sidebar-section">
        <h2 class="sidebar-header">{{ label }}</h2>
        <section class="sidebar-list" :style="{ maxHeight }">
          <chi-card
            v-for="element in elements"
            :key="element.textLeft"
            @click="$emit('select', element.textLeft)"
            v-bind="element"
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
import { computed } from 'vue';

export default {
  name: 'room-list',
  props: {
    sections: { type: Object, required: true },
    footer: { type: String, required: true },
  },
  setup(props) {
    const filteredSections = computed(() => props.sections.filter(({ elements }) => elements.length > 0));
    return { filteredSections };
  },
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
  overflow-y: scroll;
}

.sidebar-wrapper {
  height: 90%;
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
  max-height: 80vh;
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
  display: flex;
  align-items: flex-end;
}

.sidebar-switch {
  border-top: 1px solid var(--color-secondary);
  display: flex;
  padding-top: 16px;
}

.sidebar-header--last {
  margin: 0;
  margin-right: 8px;
  font-size: var(--font-size-large);
  cursor: pointer;
}
</style>
