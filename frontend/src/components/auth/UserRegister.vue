<template>
  <section>
    <form v-if="isActive" class="user-form">
      <fieldset>
        <chi-field label="Username" type="text" autofocus></chi-field>
        <chi-field label="First name" type="text"></chi-field>
        <chi-field label="Last name" type="text"></chi-field>
        <chi-field label="Password" type="password"></chi-field>
        <chi-button class="user-submit" type="submit">Register</chi-button>

        <p class="user-info">
          Already have an account?
          <chi-button @click="$emit('swap-active')" type="button" inline>Click here to sign in!</chi-button>
        </p>
      </fieldset>
    </form>
  </section>
</template>

<script>
import ChiButton from '../common/ChiButton.vue';
import ChiField from '../common/ChiField.vue';

export default {
  name: 'user-register',
  props: {
    isActive: { type: Boolean, default: false },
  },
  components: { ChiField, ChiButton },
};
</script>

<style scoped></style>
