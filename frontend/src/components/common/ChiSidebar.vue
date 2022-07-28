<template>
  <aside class="sidebar-wrapper">
    <div>
      <section v-for="{ label, elements } in sections" :key="label" class="sidebar-section">
        <h3 class="sidebar-title">{{ label }}</h3>

        <section class="sidebar-list">
          <article
            v-for="{ iconLeft, name, online, iconRight, selected } in elements"
            :key="name"
            class="sidebar-article"
            :class="{ 'sidebar-article--selected': selected }"
          >
            <span class="article-span">
              <img class="article-icon--left" :src="getIconUrl(iconLeft)" />
              <p class="article-text">{{ name }}</p>
            </span>

            <span v-if="online !== undefined" class="article-span">
              <p class="article-text">{{ online }}</p>
              <img class="article-icon--right icon-shadow" :src="getIconUrl(iconRight)" />
            </span>
          </article>
        </section>
      </section>
    </div>

    <section class="sidebar-switch">
      <h2 class="sidebar-title sidebar-title--last">Users online</h2>
      <img class="article-icon--right" src="@/assets/img/arrow.svg" />
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
  border-bottom-right-radius: 120px;
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
  padding-right: 8px;
  max-height: 40vh;
  overflow: scroll;
}

.sidebar-article {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: var(--font-accent);
  color: var(--color-secondary);
  padding: 8px;
  margin: 8px 0;
}

.sidebar-article:first-of-type {
  margin-top: 16px;
}

.sidebar-article--selected {
  background-color: var(--color-primary-subdued);
  border-radius: 12px;
}

.article-span {
  display: flex;
  align-items: center;
}

.article-icon--left {
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 6px solid var(--color-secondary);
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
  margin-left: 4px;
}

.icon-shadow {
  filter: var(--shadow);
}

.sidebar-switch {
  display: flex;
  align-items: center;
  width: inherit;
  border-top: 1px solid var(--color-secondary);
  padding-top: 16px;
  cursor: pointer;
}

.sidebar-title--last {
  border-bottom: none;
  padding: 0;
}
</style>
