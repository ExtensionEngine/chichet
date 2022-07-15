<template>
  <input v-bind="{ ...$attrs, onInput: updateModelValue }" :value="modelValue" class="chi-input" spellcheck="false" />
</template>

<script>
import useModelValue from '@/composables/useModelValue.js';

export default {
  name: 'chi-input',
  props: {
    modelValue: { type: String, default: '' },
  },
  setup(_props, { emit }) {
    const { updateModelValue } = useModelValue(emit);
    return { updateModelValue };
  },
};
</script>

<style scoped>
.chi-input {
  font-size: inherit;
  background: none;
  border: none;
  border-bottom: 2px solid var(--color-primary);
  color: var(--color-text);
  padding: 16px 8px;
  letter-spacing: 0.1rem;
}

.chi-input:focus {
  outline: none;
}
</style>
