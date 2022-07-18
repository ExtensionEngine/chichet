<template>
  <section class="user-section">
    <form class="user-form">
      <fieldset>
        <chi-field v-for="{ label, type } in inputs" :key="label" :label="label" :type="type"></chi-field>
        <chi-button class="user-submit" type="submit">{{ buttonLabel }}</chi-button>

        <p class="user-info">
          {{ formSwitch.label }}
          <chi-button @click="$emit('swap-active')" type="button" inline>{{ formSwitch.buttonText }}</chi-button>
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
    inputs: {
      type: Array,
      required: true,
    },
    buttonLabel: {
      type: String,
      default: null,
    },
    formSwitch: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: { ChiField, ChiButton },
};
</script>

<style scoped>
.user-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
}

.user-form {
  width: 50%;
}

.user-submit {
  width: 100%;
  margin-top: 20px;
}

.user-info {
  margin-top: 16px;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
  text-align: center;
}
</style>
