<template>
  <div class="login-container">
    <v-login
      :email="pm.formModel.email"
      :password="pm.formModel.password"
      :disable-submit="pm.disableSubmit"
      @submit="pm.submit()"
    ></v-login>
  </div>
</template>

<script>
import VLogin from '../components/VLogin.vue';
import { loginPM } from '../core/LoginPM';
export default {
  name: 'LoginView',
  components: { VLogin },
  data() {
    return {
      pm: loginPM(),
    };
  },
  watch: {
    'pm.alert': function alertWatcher(value) {
      if (value) {
        window.alert(value);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  min-width: 300px;
  max-width: 450px;
  height: auto;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
