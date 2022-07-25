<template>
  <user-form
    @submit-data="submit"
    :inputs="formInputs"
    :button-label="formButtonLabel"
    :form-switch="formSwitch"
  ></user-form>
</template>

<script>
import { auth as authApi } from '@/api';
import { registerFormLabels } from './constants';
import UserForm from './UserForm.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'user-register',
  setup() {
    const router = useRouter();

    const formInputs = [
      { label: 'Username', type: 'text', value: '' },
      { label: 'First name', type: 'text', value: '' },
      { label: 'Last name', type: 'text', value: '' },
      { label: 'Password', type: 'password', value: '' },
    ];

    const submit = async () => {
      const username = formInputs[0].value;
      const firstName = formInputs[1].value;
      const lastName = formInputs[2].value;
      const password = formInputs[3].value;

      try {
        await authApi.register({ username, firstName, lastName, password });
        router.push('/tags');
      } catch (err) {
        console.log(err.response.data.message);
      }
    };

    const { formButtonLabel, formSwitch } = registerFormLabels;
    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
