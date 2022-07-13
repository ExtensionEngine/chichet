<template>
  <div class="chi-field">
    <label v-if="label" class="chi-field-label">{{ label }}</label>
    <slot><chi-input v-bind="$attrs" /></slot>
    <span class="chi-field-error">{{ error }}</span>
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

<style scoped>
.chi-field-error::after {
  content: ' ';
  font-size: 0;
  white-space: pre;
}
</style>
