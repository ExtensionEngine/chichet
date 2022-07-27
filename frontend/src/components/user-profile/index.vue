<template>
  <div :class="{ active }" class="user-profile">
    <div class="user-profile-container">
      <img src="@/assets/user.png" alt="user" class="user-profile-image" />
      <user-form :inputs="formInputs" class="user-profile-form" disabled />
    </div>
    <div @click="$emit('close-profile')" class="user-profile-overlay"></div>
  </div>
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
}

.user-profile-container {
  z-index: var(--z-user-profile-container);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-profile-image {
  height: 150px;
  width: auto;
}

.user-profile-form {
  padding-top: 20px;
}

.user-profile-overlay {
  z-index: var(--z-user-profile-overlay);
  width: 100vw;
  height: 100vh;
  background-color: var(--color-overlay);
  visibility: hidden;
}

.user-profile.active,
.active .user-profile-overlay {
  visibility: visible;
}

.active .user-profile-container {
  left: 0;
}
</style>
