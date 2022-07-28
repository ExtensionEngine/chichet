<template>
  <aside class="sidebar-wrapper">
    <div>
      <section v-for="{ label, elements } in sections" :key="label" class="sidebar-section">
        <h3 class="sidebar-title">{{ label }}</h3>

        <section class="sidebar-list">
          <article v-for="{ name, online } in elements" :key="name" class="sidebar-article">
            <span class="article-span">
              <span class="article-icon--left"></span>
              <p class="article-text">{{ name }}</p>
            </span>

            <span class="article-span">
              <p class="article-text">{{ online }}</p>
              <span class="article-icon--right"></span>
            </span>
          </article>
        </section>
      </section>
    </div>

    <section class="sidebar-switch">
      <h2 class="sidebar-title sidebar-title--last">Users online</h2>
      <span class="article-icon--right"></span>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'room-list',
  props: {
    sections: { type: Object, required: true },
  },
  setup(props) {
    console.log(props);
  },
};
</script>

<style scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  width: 33%;
  height: 100%;
  padding: 24px;
}

.sidebar-section {
  margin-bottom: 36px;
}

.sidebar-title {
  font: var(--font-accent);
  font-size: var(--font-size-large);
  color: var(--color-secondary);
  margin: 0;
  padding: 0 24px 24px 0;
  border-bottom: 1px solid var(--color-secondary);
}

.sidebar-list {
  padding: 0 16px 0 12px;
  max-height: 40vh;
  overflow: scroll;
}

.sidebar-article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: var(--font-accent);
  color: var(--color-secondary);
  margin-top: 24px;
}

.article-span {
  display: flex;
  align-items: center;
}

.article-icon--left {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: var(--color-secondary);
  margin-right: 16px;
  border-radius: 50%;
}

.article-text {
  margin: 0;
}

.article-icon--right {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  margin-left: 4px;
}

.sidebar-switch {
  display: flex;
  align-items: center;
  width: inherit;
  border-top: 1px solid var(--color-secondary);
  padding-top: 16px;
}

.sidebar-title--last {
  border-bottom: none;
  padding: 0;
}
</style>
