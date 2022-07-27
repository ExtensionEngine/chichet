import { ref } from 'vue';

export default function useToggle() {
  const isTrue = ref(false);
  const toggle = () => {
    isTrue.value = !isTrue.value;
  };
  return { isTrue, toggle };
}
