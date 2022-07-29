<template>
  <div :class="{ active }" class="user-profile">
    <div class="user-profile-container">
      <div class="user-profile-wrapper">
        <img src="@/assets/img/profile.svg" alt="profile" class="user-profile-avatar" />
        <user-form :inputs="formInputs" class="user-profile-form" disabled />
        <tag-list @select-tag="selectTag" :tags="tags" class="user-profile-tags" centred small />
      </div>
    </div>
    <div @click="$emit('close-profile')" class="user-profile-overlay"></div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import { tag as tagApi } from '@/api';
import TagList from '../tags/TagList.vue';
import { useAuthStore } from '@/store/authStore';
import UserForm from '../auth/UserForm.vue';
import { userProfileFormLabels } from './constants';

export default {
  name: 'user-profile',
  props: {
    active: { type: Boolean, default: false },
  },
  setup() {
    const { username, fullName } = useAuthStore().getUserProfile;
    const formInputs = reactive(userProfileFormLabels.formInputs);
    formInputs.username.value = username;
    formInputs.fullName.value = fullName;

    // Replace with composables
    const tags = ref([]);

    onMounted(async () => {
      const data = await tagApi.fetchAll();
      tags.value = data.map(tag => ({ ...tag, selected: false }));
    });

    const selectTag = tagId => {
      const tag = tags.value.find(tag => tag.id === tagId);
      tag.selected = !tag.selected;
    };

    return { formInputs, tags, selectTag };
  },
  components: { TagList, UserForm },
};
</script>

<style scoped>
.user-profile {
  z-index: var(--z-user-profile);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
}

.user-profile-container {
  z-index: var(--z-user-profile-container);
  background-color: var(--color-secondary);
  border-bottom-right-radius: 120px;
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  left: -100%;
  transition: left 0.6s ease;
  display: grid;
  place-items: center;
}

.user-profile-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
}

.user-profile-avatar {
  filter: var(--shadow);
}

.user-profile-form {
  padding-top: 40px;
  width: 100%;
}

.user-profile-tags {
  max-width: 65%;
  max-height: calc(44px * 2);
  overflow-y: scroll;
  margin-bottom: 10px;
  direction: rtl;
  padding-left: 10px;
  margin-left: -10px;
}

.user-profile-overlay {
  z-index: var(--z-user-profile-overlay);
  width: 100vw;
  height: 100vh;
  background-color: var(--color-overlay);
  visibility: hidden;
}

.user-profile.active,
.active .user-profile-overlay {
  visibility: visible;
}

.active .user-profile-container {
  left: 0;
}
</style>
