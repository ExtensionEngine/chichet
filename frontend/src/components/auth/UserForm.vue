<template>
  <section class="user-section">
    <form @submit.prevent="$emit('submit-data')" class="user-form">
      <fieldset>
        <chi-field
          v-for="(input, index) in inputs"
          :key="input.label"
          v-model="input.value"
          :label="input.label"
          :error="input.error"
          :type="input.type"
          :auto-focus="index === 0"
        ></chi-field>
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
export default {
  name: 'user-form',
  props: {
    inputs: { type: Object, required: true },
    buttonLabel: { type: String, default: null },
    formSwitch: { type: Object, default: () => ({}) },
  },
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
