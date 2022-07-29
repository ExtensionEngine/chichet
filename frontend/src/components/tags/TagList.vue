<template>
  <div>
    <div :class="{ centered }" class="tag-list">
      <chi-button
        v-for="{ id, label, selected } in tags"
        :key="id"
        @click="$emit('select-tag', id)"
        :secondary="!selected"
        :class="{ small }"
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
    centered: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
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

.tag-list.centered {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tag-button.small {
  margin: 0 18px 18px 0;
  padding: 10px 18px;
  font-size: var(--font-size-small);
}
</style>
