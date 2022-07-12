<template>
  <textarea @input="updateModelValue" :value="modelValue" class="chi-textarea"></textarea>
</template>

<script>
import useModelValue from '@/composables/useModelValue.js';

export default {
  name: 'chi-textarea',
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
.chi-textarea {
  font-size: inherit;
  background: none;
  border: none;
  outline: none;
  resize: none;
}
</style>
