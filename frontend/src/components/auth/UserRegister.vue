<template>
  <user-form
    @submit-data="submit"
    :inputs="formInputs"
    :button-label="formButtonLabel"
    :form-switch="formSwitch"
  ></user-form>
</template>

<script>
import { registerFormLabels } from './constants';
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

    const submit = () => {};

    const { formButtonLabel, formSwitch } = registerFormLabels;
    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
