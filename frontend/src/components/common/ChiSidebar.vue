<template>
  <aside class="sidebar-wrapper">
    <section v-for="{ label } in sections" :key="label" class="section-wrapper">
      <h3 class="section-title">{{ label }}</h3>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'room-list',
  props: {
    sections: { type: Object, required: true },
  },
  setup(props) {
    console.log(props);
  },
};
</script>

<style scoped>
.sidebar-wrapper {
  background-color: var(--color-primary);
  width: 33%;
  height: 100%;
  padding: 24px;
}

.section-wrapper {
  margin-bottom: 36px;
}

.section-title {
  font: var(--font-accent);
  font-size: var(--font-size-large);
  color: var(--color-secondary);
  margin: 0;
  padding: 0 24px 24px 0;
  border-bottom: 1px solid var(--color-secondary);
}
</style>
