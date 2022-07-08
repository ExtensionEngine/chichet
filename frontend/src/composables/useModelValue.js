export default function useModelValue(emit) {
  const updateModelValue = event => {
    const val = event.target.value;
    emit('update:modelValue', val);
  };
  return { updateModelValue };
}
