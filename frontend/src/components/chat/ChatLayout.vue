<template>
  <section class="chat-container">
    <chat-navigation></chat-navigation>
    <chat-messages></chat-messages>
    <chat-write></chat-write>
  </section>
</template>

<script>
import ChatMessages from './ChatMessages.vue';
import ChatNavigation from './ChatNavigation.vue';
import ChatWrite from './ChatWrite.vue';

export default {
  name: 'chat-layout',
  components: { ChatMessages, ChatNavigation, ChatWrite },
};
</script>

<style scoped>
.chat-container {
  width: 67%;
  height: 100%;
}
</style>
