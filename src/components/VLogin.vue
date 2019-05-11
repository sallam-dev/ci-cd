<template>
  <form @submit.prevent="submit">
    <div class="imgcontainer">
      <img src="../assets/avatar.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="uname">
        <b>{{ email.label }}</b>
      </label>
      <input
        id="uname"
        v-model.trim="email.value"
        type="email"
        :placeholder="email.placeholder"
        required
        data-test="email-input"
        @input="email.validate()"
        @blur="email.blurred()"
      />
      <div
        v-if="email.shouldShowError"
        class="validation-error"
        data-test="email-validation-error"
      >
        {{ email.error }}
      </div>

      <label for="psw">
        <b>{{ password.label }}</b>
      </label>
      <input
        id="psw"
        v-model.trim="password.value"
        type="password"
        minlength="8"
        :placeholder="password.placeholder"
        required
        data-test="password-input"
        @input="password.validate()"
        @blur="password.blurred()"
      />
      <div
        v-if="password.shouldShowError"
        class="validation-error"
        data-test="password-validation-error"
      >
        {{ password.error }}
      </div>

      <button
        data-test="login-button"
        type="submit"
        :disabled="shouldDisableSubmit"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'VLogin',
  props: {
    email: {
      type: Object,
      default: null,
      required: true,
    },
    password: {
      type: Object,
      default: null,
      required: true,
    },
    shouldDisableSubmit: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$forceUpdate();
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
  },
};
</script>

<style scoped>
.validation-error {
  color: #f44336;
}

/* Full-width inputs */
input[type='text'],
input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  padding: 20px 10px;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

button[disabled] {
  opacity: 0.5;
}

button[disabled]:hover {
  cursor: default;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
