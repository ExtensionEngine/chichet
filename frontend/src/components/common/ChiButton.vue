<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'chi-button',
};
</script>

<style>
.button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
