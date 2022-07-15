<template>
  <section class="user-register" :class="{ 'user-register--active': isActive }">Register</section>
</template>

<script>
export default {
  name: 'user-register',
  props: {
    isActive: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.user-register {
  background-color: var(--color-secondary);
  width: 45%;
}
.user-register--active {
  width: 55%;
}
</style>
