<template>
  <main class="auth-main">
    <span class="auth-slider"></span>
    <user-register @swap-active="swapActive"></user-register>
    <user-sign-in @swap-active="swapActive"></user-sign-in>
  </main>
</template>

<script>
import { ref } from 'vue';
import UserRegister from './UserRegister.vue';
import UserSignIn from './UserSignIn.vue';

export default {
  name: 'user-auth',
  setup() {
    const sliderRight = ref('55%');

    const isLeftActive = ref(false);
    const swapActive = () => {
      isLeftActive.value = !isLeftActive.value;
      sliderRight.value = isLeftActive.value ? '55%' : '-10%';
    };

    return { isLeftActive, swapActive, sliderRight };
  },
  components: {
    UserSignIn,
    UserRegister,
  },
};
</script>

<style scoped>
.auth-main {
  margin: 64px;
  border-radius: 120px 0 120px 0;
  width: calc(100% - 128px);
  height: calc(100% - 128px);
  display: flex;
  position: relative;
  overflow: hidden;
}

.auth-slider {
  position: absolute;
  background-color: var(--color-primary);
  width: 55%;
  height: 100%;
  right: v-bind(sliderRight);
  transition: right 1s ease-in-out;
}
</style>
