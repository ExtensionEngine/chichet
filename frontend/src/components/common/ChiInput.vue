<template>
  <input @input="updateModelValue" :value="modelValue" class="input" />
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

<style>
.input {
  font-size: inherit;
  background: none;
  border: none;
}

.input:focus {
  outline: none;
}
</style>
