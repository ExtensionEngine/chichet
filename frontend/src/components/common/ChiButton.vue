<template>
  <button class="chi-button" :class="{ 'chi-button-secondary': secondary }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'chi-button',
  props: {
    secondary: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.chi-button {
  background: var(--color-primary);
  border: none;
  color: var(--color-secondary);
  font: var(--font-accent);
  text-transform: uppercase;
  border-radius: 20px;
  padding: 16px 24px;
  cursor: pointer;
}

.chi-button-secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}
</style>
