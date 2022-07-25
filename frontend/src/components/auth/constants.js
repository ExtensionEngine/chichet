const signInFormLabels = {
  formInputs: {
    username: { label: 'Username', type: 'text', value: '', error: '', required: true },
    password: { label: 'Password', type: 'password', value: '', error: '', required: true },
  },
  formButtonLabel: 'Sign in',
  formSwitch: {
    label: "Don't have and account?",
    buttonText: 'Click here to register!',
  },
};

const registerFormLabels = {
  formInputs: {
    username: { label: 'Username', type: 'text', value: '', error: '', required: true },
    firstName: { label: 'First name', type: 'text', value: '', error: '', required: false },
    lastName: { label: 'Last name', type: 'text', value: '', error: '', required: false },
    password: { label: 'Password', type: 'password', value: '', error: '', required: true },
  },
  formButtonLabel: 'Register',
  formSwitch: {
    label: 'Already have an account?',
    buttonText: 'Click here to sign in!',
  },
};

export { signInFormLabels, registerFormLabels };
