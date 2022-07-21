<template>
  <button class="chi-button" :class="{ 'chi-button-secondary': secondary, 'chi-button-inline': inline }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'chi-button',
  props: {
    secondary: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
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

.chi-button-secondary,
.chi-button-inline {
  background: transparent;
  color: var(--color-primary);
}

.chi-button-secondary {
  border: 2px solid var(--color-primary);
}

.chi-button-inline {
  padding: 0;
  text-transform: none;
  border: none;
  font: var(--font-default);
  font-size: var(--font-size-small);
  letter-spacing: 0.1rem;
}
</style>
