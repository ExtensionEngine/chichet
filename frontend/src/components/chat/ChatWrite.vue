<template>
  <section>
    <form>
      <chi-field>
        <chi-textarea></chi-textarea>
      </chi-field>
      <button></button>
    </form>
  </section>
</template>

<script>
import ChiTextarea from '@/components/common/ChiTextarea.vue';

export default {
  name: 'chat-write',
  components: { ChiTextarea },
};
</script>

<style scoped></style>
