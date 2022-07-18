<template>
  <user-form :inputs="formInputs" :button-label="formButtonLabel" :form-switch="formSwitch"></user-form>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
  name: 'user-sign-in',
  setup() {
    const formInputs = [
      { label: 'Username', type: 'text' },
      { label: 'Password', type: 'password' },
    ];
    const formButtonLabel = 'Sign in';
    const formSwitch = {
      label: "Don't have and account?",
      buttonText: 'Click here to register!',
    };
    return { formInputs, formButtonLabel, formSwitch };
  },
  components: { UserForm },
};
</script>

<style scoped></style>
