<template>
  <div :class="{ active }" class="user-profile">
    <user-form :inputs="formInputs" disabled />
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div @click="$emit('close-profile')" :class="{ active }" class="user-profile-overlay"></div>
</template>

<script>
import { reactive } from 'vue';
import { useAuthStore } from '@/store/authStore';
import UserForm from '../auth/UserForm.vue';
import { userProfileFormLabels } from './constants';

export default {
  name: 'user-profile',
  emits: ['close-profile'],
  props: {
    active: { type: Boolean, default: false },
  },
  setup() {
    const { username, fullName } = useAuthStore().getUserProfile;
    const formInputs = reactive(userProfileFormLabels.formInputs);
    formInputs.username.value = username;
    formInputs.fullName.value = fullName;

    return { formInputs };
  },
  components: { UserForm },
};
</script>

<style scoped>
.user-profile {
  z-index: var(--z-user-profile);
  background-color: var(--color-secondary);
  border-radius: 0 0 120px 0;
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 0.6s ease;
  transition-property: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile-overlay {
  z-index: var(--z-user-profile-overlay);
  width: 100vw;
  height: 100vh;
  background-color: var(--color-overlay);
  visibility: hidden;
}

.user-profile.active {
  left: 0;
}

.user-profile-overlay.active {
  visibility: visible;
}
</style>
