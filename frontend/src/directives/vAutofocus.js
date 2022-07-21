const vAutofocus = {
  mounted: (el, binding) => {
    if (binding.value === undefined || binding.value) el.focus();
  },
};

export default vAutofocus;
