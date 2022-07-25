<template>
  <user-form
    @submit-data="submit"
    :inputs="formInputs"
    :button-label="formButtonLabel"
    :form-switch="formSwitch"
  ></user-form>
</template>

<script>
import { setErrorToLastForm, validateAuthForm } from '@/utils/validation';
import { auth as authApi } from '@/api';
import { reactive } from 'vue';
import { signInFormLabels } from './constants';
import UserForm from './UserForm.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'user-sign-in',
  setup() {
    const router = useRouter();
    const formInputs = reactive(signInFormLabels.formInputs);

    const submit = async () => {
      if (!validateAuthForm(formInputs)) return;

      const username = formInputs.username.value;
      const password = formInputs.password.value;

      try {
        await authApi.signIn({ username, password });
        router.push('/');
      } catch (err) {
        setErrorToLastForm(formInputs, err.response.data.message);
      }
    };

    const { formButtonLabel, formSwitch } = signInFormLabels;
    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
