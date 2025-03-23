import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import SigninSignupVue from '@/components/SigninSignup.vue';


const routes = [
  {
    path: '/',
    name: 'Home', 
    component: HomePage
  },
  {
    path: '/',
    name: 'SignIn', 
    component: SigninSignupVue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
