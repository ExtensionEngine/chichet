<template>
  <textarea
    v-bind="{ ...$attrs, onInput: updateModelValue }"
    ref="textarea"
    @input="resize"
    :value="modelValue"
    class="chi-textarea"
    maxlength="500"
    minlength="1"
    spellcheck="false"
  ></textarea>
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
  methods: {
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = '0';
      textarea.style.height = textarea.scrollHeight + 2 + 'px';
      textarea.scrollTop = textarea.scrollHeight;
    },
  },
  mounted() {
    this.resize();
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
  max-height: 200px;
  border-bottom: 2px solid var(--color-primary);
  padding: 16px 8px;
  color: var(--color-text);
}
</style>
