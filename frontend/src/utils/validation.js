const validateAuthForm = formInputs => {
  let isValid = true;

  for (const key in formInputs) {
    formInputs[key].error = '';

    if (formInputs[key].value.length === 0) {
      formInputs[key].error = 'This field is required';
      isValid = false;
    }
  }

  return isValid;
};

export { validateAuthForm };
