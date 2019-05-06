const EMAIL_REGEXP = /\S+@\S+\.\S+/;

export function loginPM() {
  return {
    formModel: {
      email: {
        label: 'Email',
        value: undefined,
        error: undefined,
        valid: undefined,
        placeholder: 'example@domain.com',
        blurred: false,
        get showError() {
          return !this.valid && this.blurred;
        },
        blur() {
          this.blurred = true;
        },
        validate() {
          if (!this.value) {
            this.error = 'Email is required';
            this.valid = false;
            return;
          }
          if (!EMAIL_REGEXP.test(this.value)) {
            this.error = 'Invalid Email';
            this.valid = false;
            return;
          }
          this.valid = true;
        },
      },
      password: {
        label: 'Password',
        value: undefined,
        error: undefined,
        valid: undefined,
        placeholder: 'Minimum of 8 characters',
        blurred: false,
        get showError() {
          return !this.valid && this.blurred;
        },
        blur() {
          this.blurred = true;
        },
        validate() {
          if (!this.value) {
            this.error = 'Password is required';
            this.valid = false;
            return;
          }
          if (this.value.length < 8) {
            this.error = 'Password should be 8 characters minimum';
            this.valid = false;
            return;
          }
          this.valid = true;
        },
      },
      get valid() {
        return this.email.valid === true && this.password.valid === true;
      },
    },

    alert: undefined,

    get disableSubmit() {
      return !this.formModel.valid;
    },

    submit() {
      this.alert = `your password is: ${this.formModel.password.value}`;
    },
  };
}
