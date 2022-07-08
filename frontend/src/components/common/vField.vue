<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <slot><v-input v-bind="$attrs" /></slot>
    <span class="error">{{ error }}</span>
  </div>
</template>

<script>
import vInput from './vInput.vue';

export default {
  name: 'v-field',
  props: {
    label: { type: String, default: '' },
    error: { type: String, default: '' },
  },
  components: { vInput },
};
</script>

<style>
.error::after {
  content: ' ';
  font-size: 0;
  white-space: pre;
}
</style>
