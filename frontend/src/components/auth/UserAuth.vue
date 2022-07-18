<template>
  <main class="auth-main">
    <span class="auth-slider"></span>
    <component :is="components[componentIndex].name" @swap-active="swapActive"></component>
  </main>
</template>

<script>
import { ref } from 'vue';
import UserRegister from './UserRegister.vue';
import UserSignIn from './UserSignIn.vue';

export default {
  name: 'user-auth',
  setup() {
    const componentIndex = ref(0);
    const components = [
      { name: 'UserSignIn', position: 'flex-end', sliderRight: '55%' },
      { name: 'UserRegister', position: 'flex-start', sliderRight: '-10%' },
    ];

    const swapActive = () => {
      componentIndex.value = (componentIndex.value + 1) % 2;
    };

    return { componentIndex, components, swapActive };
  },
  components: {
    UserRegister,
    UserSignIn,
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
  justify-content: v-bind('components[componentIndex].position');
  position: relative;
  overflow: hidden;
  background-color: var(--color-secondary);
}

.auth-slider {
  position: absolute;
  background-color: var(--color-primary);
  width: 55%;
  height: 100%;
  right: v-bind('components[componentIndex].sliderRight');
  transition: right 1s ease-in-out;
}
</style>
