const EMAIL_REGEXP = /\S+@\S+\.\S+/;

export function loginPM() {
  return {
    email: {
      label: 'Email',
      value: undefined,
      error: undefined,
      valid: undefined,
      placeholder: 'example@domain.com',
      _blurred: false,
      get shouldShowError() {
        return !this.valid && this._blurred;
      },
      blurred() {
        this._blurred = true;
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
      _blurred: false,
      get shouldShowError() {
        return !this.valid && this._blurred;
      },
      blurred() {
        this._blurred = true;
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

    get _valid() {
      return this.email.valid === true && this.password.valid === true;
    },

    _validate() {
      this.password.validate();
      this.email.validate();
    },

    get shouldDisableSubmit() {
      this._validate();
      return !this._valid;
    },

    alert: undefined,

    submit() {
      this._validate();
      if (!this._valid) {
        this.alert = 'missing or invalid login data';
      } else {
        this.alert = `your password is: ${this.password.value}`;
      }
    },
  };
}
