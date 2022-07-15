<template>
  <section>
    <form v-if="isActive" class="user-form">
      <fieldset>
        <chi-field label="Username" type="text" autofocus></chi-field>
        <chi-field label="Password" type="password"></chi-field>
        <chi-button class="user-submit" type="submit">Sign in</chi-button>

        <p class="user-info">
          Don't have and account?
          <chi-button @click="$emit('swap-active')" type="button" inline>Click here to register!</chi-button>
        </p>
      </fieldset>
    </form>
  </section>
</template>

<script>
import ChiButton from '../common/ChiButton.vue';
import ChiField from '../common/ChiField.vue';

export default {
  name: 'user-sign-in',
  props: {
    isActive: { type: Boolean, default: false },
  },
  components: { ChiField, ChiButton },
};
</script>

<style scoped></style>
