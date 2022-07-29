import { ref } from 'vue';

export default function useToggle() {
  const isToggled = ref(false);
  const toggle = () => {
    isToggled.value = !isToggled.value;
  };
  return { isToggled, toggle };
}
