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
import { registerFormLabels } from './constants';
import { useAuthStore } from '@/store/authStore';
import UserForm from './UserForm.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'user-register',
  setup() {
    const router = useRouter();
    const userStore = useAuthStore();

    console.log(userStore.getUser);

    const formInputs = reactive(registerFormLabels.formInputs);

    const submit = async () => {
      if (!validateAuthForm(formInputs)) return;

      const username = formInputs.username.value;
      const firstName = formInputs.firstName.value;
      const lastName = formInputs.lastName.value;
      const password = formInputs.password.value;

      try {
        const user = await authApi.register({ username, firstName, lastName, password });
        userStore.setUser(user);
        router.push({ name: 'Tags' });
      } catch (err) {
        setErrorToLastForm(formInputs, err.response.data.message);
      }
    };

    const { formButtonLabel, formSwitch } = registerFormLabels;
    return { formInputs, formButtonLabel, formSwitch, submit };
  },
  components: { UserForm },
};
</script>
