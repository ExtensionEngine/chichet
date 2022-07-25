<template>
  <div>
    <div class="tag-list">
      <chi-button
        v-for="{ id, label, selected } in tags"
        :key="id"
        @click="$emit('select-tag', id)"
        :secondary="!selected"
        class="tag-button"
      >
        {{ label }}
      </chi-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tag-list',
  props: {
    tags: { type: Array, required: true },
  },
};
</script>

<style scoped>
.tag-list {
  direction: ltr;
}

.tag-button {
  margin: 0 36px 36px 0;
  border: 2px solid var(--color-primary);
  border-radius: 100px;
  padding: 20px 36px;
  text-transform: capitalize;
}
</style>
