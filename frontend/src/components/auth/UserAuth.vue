<template>
  <main class="auth-main">
    <span class="auth-slider" :class="{ 'auth-slider--shift': isRegisterActive }"></span>
    <user-register
      @swap-active="swapActive"
      class="auth-forms"
      :class="{ 'auth-forms--active': isRegisterActive }"
      :is-active="isRegisterActive"
    ></user-register>
    <user-sign-in
      @swap-active="swapActive"
      class="auth-forms"
      :class="{ 'auth-forms--active': !isRegisterActive }"
      :is-active="!isRegisterActive"
    ></user-sign-in>
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
    const swapActive = () => {
      isRegisterActive.value = !isRegisterActive.value;
    };

    return { isRegisterActive, swapActive };
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

.auth-forms {
  background-color: var(--color-secondary);
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-forms--active {
  width: 55%;
}
</style>

<style>
.user-form {
  width: 50%;
}

.user-submit {
  width: 100%;
  margin-top: 20px;
}

.user-info {
  margin-top: 16px;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
  text-align: center;
}

.user-info--clickable {
  color: var(--color-primary);
  cursor: pointer;
  text-align: center;
}

@media screen and (max-width: 1366px) {
  .user-info--clickable {
    display: block;
  }
}
</style>
