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

const setErrorToLastForm = (formInputs, error) => {
  const keys = Object.keys(formInputs);
  formInputs[keys[keys.length - 1]].error = error;
};

export { validateAuthForm, setErrorToLastForm };
