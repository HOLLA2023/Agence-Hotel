<template>
  <div class="home-page">
      <div v-if="data">
      <h2>Données reçues :</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/data'); // Remplacez par votre endpoint
        this.data = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    },
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>