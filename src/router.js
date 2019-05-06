import Vue from 'vue';
import Router from 'vue-router';
import Profile from './views/ProfileView.vue';
import Login from './views/LoginView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
