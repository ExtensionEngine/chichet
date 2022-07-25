<template>
  <user-form
    @submit-data="submit"
    :inputs="formInputs"
    :button-label="formButtonLabel"
    :form-switch="formSwitch"
  ></user-form>
</template>

<script>
import { signInFormLabels } from './constants';
import UserForm from './UserForm.vue';

export default {
  name: 'user-sign-in',
  setup() {
    const { formButtonLabel, formSwitch } = signInFormLabels;

    const formInputs = [
      { label: 'Username', type: 'text', value: '' },
      { label: 'Password', type: 'password', value: '' },
    ];

    const submit = () => {};

    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
