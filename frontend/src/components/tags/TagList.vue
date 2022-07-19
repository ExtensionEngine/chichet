<template>
  <section>
    <chi-button v-for="{ id, label, selected } in tags" :key="id" :secondary="!selected" class="tag-button">
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
.tag-button {
  margin: 0 36px 36px 0;
  border-radius: 100px;
}
</style>
