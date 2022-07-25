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
import { signInFormLabels } from './constants';
import UserForm from './UserForm.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'user-sign-in',
  setup() {
    const router = useRouter();

    const formInputs = [
      { label: 'Username', type: 'text', value: '' },
      { label: 'Password', type: 'password', value: '' },
    ];

    const submit = async () => {
      const username = formInputs[0].value;
      const password = formInputs[1].value;

      try {
        await authApi.signIn({ username, password });
        router.push('/');
      } catch (err) {
        console.log(err.response.data.message);
      }
    };

    const { formButtonLabel, formSwitch } = signInFormLabels;
    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
