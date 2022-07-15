<template>
  <main class="auth-main">
    <span @click="dosmn" class="auth-slider" :class="{ 'auth-slider--shift': isRegisterActive }"></span>
    <user-register :is-active="isRegisterActive"></user-register>
    <user-sign-in :is-active="!isRegisterActive"></user-sign-in>
  </main>
</template>

<script>
import { ref } from 'vue';
import UserRegister from './UserRegister.vue';
import UserSignIn from './UserSignIn.vue';

export default {
  name: 'user-auth',
  setup() {
    const isRegisterActive = ref(false);
    const dosmn = () => {
      isRegisterActive.value = !isRegisterActive.value;
    };

    return { isRegisterActive, dosmn };
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
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.auth-slider {
  background-color: var(--color-primary);
  position: absolute;
  height: 100%;
  width: 55%;
  right: 55%;
  transition: right 1s ease-in-out;
}

.auth-slider--shift {
  right: -10%;
  transition: right 1s ease-in-out;
}
</style>
