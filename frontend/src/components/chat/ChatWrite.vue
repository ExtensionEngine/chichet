<template>
  <section class="write-container">
    <form class="write-form">
      <chi-field>
        <chi-textarea placeholder="Write your message..." autofocus></chi-textarea>
      </chi-field>
      <span class="write-send">
        <img src="@/assets/img/send.svg" alt="send" />
      </span>
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

<style scoped>
.write-container {
  margin: 20px;
}

.write-form {
  position: relative;
}

.write-send {
  position: absolute;
  bottom: 50%;
  right: 28px;
  cursor: pointer;
}

.write-send:hover {
  opacity: 0.6;
}
</style>
