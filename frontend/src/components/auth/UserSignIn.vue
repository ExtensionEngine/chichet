<template>
  <section class="user-sign-in" :class="{ 'user-sign-in--active': isActive }">SignIn</section>
</template>

<script>
export default {
  name: 'user-sign-in',
  props: {
    isActive: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.user-sign-in {
  background-color: var(--color-secondary);
  width: 45%;
}

.user-sign-in--active {
  width: 55%;
}
</style>
