<template>
  <aside class="sidebar-wrapper">
    <section v-for="{ label, elements } in sections" :key="label" class="section-wrapper">
      <h3 class="section-title">{{ label }}</h3>

      <section class="elements-wrapper">
        <span v-for="{ name, online } in elements" :key="name" class="elements-item">
          <span class="elements-title">
            <span class="elements-circle"></span>
            <p class="elements-name">{{ name }}</p>
          </span>

          <span class="elements-title">
            <span class="elements-online-amount">{{ online }}</span>
            <span class="elements-online-profile"></span>
          </span>
        </span>
      </section>
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

.elements-wrapper {
  margin: 0 12px;
}

.elements-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  font: var(--font-accent);
  color: var(--color-secondary);
}

.elements-title {
  display: flex;
  align-items: center;
}

.elements-circle {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  margin-right: 16px;
}

.elements-name {
  margin: 0;
}

.elements-online-profile {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  margin-left: 4px;
}
</style>
