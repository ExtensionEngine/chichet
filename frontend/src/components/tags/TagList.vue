<template>
  <section>
    <chi-button v-for="{ id, label, selected } in tags" :key="id" :secondary="!selected" class="button-round">
      {{ label }}
    </chi-button>
  </section>
</template>

<script>
import ChiButton from '../common/ChiButton.vue';
export default {
  name: 'tag-list',
  props: {
    tags: { type: Array, required: true },
  },
  components: { ChiButton },
};
</script>

<style scoped>
.button-round {
  border-radius: 100px;
}
</style>
