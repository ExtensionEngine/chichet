<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <slot><chi-input v-bind="$attrs" /></slot>
    <span class="error">{{ error }}</span>
  </div>
</template>

<script>
import ChiInput from './ChiInput.vue';

export default {
  name: 'chi-field',
  inheritAttrs: false,
  props: {
    label: { type: String, default: '' },
    error: { type: String, default: '' },
  },
  components: { ChiInput },
};
</script>

<style>
.error::after {
  content: ' ';
  font-size: 0;
  white-space: pre;
}
</style>
