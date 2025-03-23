<template>
  <router-view />
  <SigninSignup />
</template>

<script>
import SigninSignup from '@/components/SigninSignup.vue'; // Assurez-vous du bon chemin

export default {
  name: 'App',
  components: {
    SigninSignup,
  },
};
</script>

<style>
/* Styles globaux */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
