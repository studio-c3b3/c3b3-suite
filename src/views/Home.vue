<template>
  <div>
    <h1 class="page">Son-mai</h1>
    <ul>
      <li v-for="movie, index in movies" :key="index">{{movie.title}}</li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Home',
  data() {
    return {
      movies: null
    }
  },
  methods: {
    fetchAllMovies(){
      return api.get(`movies/`).then(response => {
        console.log(response);
        this.movies = response.data
        });
    }
  },
  created(){
    this.fetchAllMovies();
  }
}
</script>

<style>

</style>