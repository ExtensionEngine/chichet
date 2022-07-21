<template>
  <user-form :inputs="formInputs" :button-label="formButtonLabel" :form-switch="formSwitch"></user-form>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
  name: 'user-register',
  setup() {
    const formInputs = [
      { label: 'Username', type: 'text' },
      { label: 'First name', type: 'text' },
      { label: 'Last name', type: 'text' },
      { label: 'Password', type: 'password' },
    ];
    const formButtonLabel = 'Register';
    const formSwitch = {
      label: 'Already have an account?',
      buttonText: 'Click here to sign in!',
    };
    return { formInputs, formButtonLabel, formSwitch };
  },
  components: { UserForm },
};
</script>
