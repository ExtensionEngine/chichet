<template>
  <aside class="sidebar-aside">
    <section>
      <h2>Recomended Rooms</h2>
      <section class="sidebar-list" :style="{ maxHeight: '30vh' }">
        <article class="sidebar-article">Text</article>
        <article class="sidebar-article">Text</article>
        <article class="sidebar-article">Text</article>
        <article class="sidebar-article">Text</article>
      </section>
    </section>
  </aside>
</template>

<script>
import getIconUrl from '@/utils/getIconUrl';

export default {
  name: 'room-list',
  props: {
    sections: { type: Object, required: true },
  },
  setup() {
    return { getIconUrl };
  },
  emits: ['switch-sections', 'select'],
};
</script>

<style scoped>
.sidebar-aside {
  width: 33%;
  height: 100%;
  background-color: var(--color-primary);
  border-bottom-right-radius: 120px;
}

.sidebar-list {
  width: 100%;
  max-height: initial;
  display: inline-block;
  overflow-y: scroll;
}

.sidebar-article {
  width: 100%;
}
</style>
