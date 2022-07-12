<template>
  <button class="chi-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'chi-button',
};
</script>

<style scoped>
.chi-button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
