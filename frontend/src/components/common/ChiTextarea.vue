<template>
  <textarea
    v-bind="{ ...$attrs, onInput: [updateModelValue, resize] }"
    ref="textarea"
    :value="modelValue"
    class="chi-textarea"
    maxlength="500"
    minlength="1"
    spellcheck="false"
  ></textarea>
</template>

<script>
import { onMounted, ref } from 'vue';
import useModelValue from '@/composables/useModelValue.js';

export default {
  name: 'chi-textarea',
  props: {
    modelValue: { type: String, default: '' },
  },
  setup(_props, { emit }) {
    const { updateModelValue } = useModelValue(emit);

    const textarea = ref(null);
    const resize = () => {
      textarea.value.style.height = '0';
      textarea.value.style.height = textarea.value.scrollHeight + 2 + 'px';
      textarea.value.scrollTop = textarea.value.scrollHeight;
    };

    onMounted(() => {
      resize();
    });

    return { updateModelValue, resize, textarea };
  },
};
</script>

<style scoped>
.chi-textarea {
  font-size: inherit;
  background: var(--color-secondary);
  border: none;
  outline: none;
  resize: none;
  max-height: 200px;
  padding: 24px 32px;
  border-radius: 40px;
  color: var(--color-text);
  letter-spacing: 0.1rem;
}
</style>
