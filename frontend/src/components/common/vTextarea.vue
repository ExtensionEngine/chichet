<template>
  <textarea @input="updateModelValue" :value="modelValue" class="textarea"></textarea>
</template>

<script>
import useModelValue from '../../composables/useModelValue.js';

export default {
  name: 'base-input',
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
.textarea {
  font-size: inherit;
  background: none;
  outline: none;
  resize: none;
}
</style>
