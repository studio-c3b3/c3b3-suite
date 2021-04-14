
<template>
  <h1>Films</h1>

  <div class="uploader">
    <simple-upload/>
  </div>

  <div>
    <ul>
      <li v-for="movie, index in movies" :key="index">{{movie.title}}</li>
    </ul>
  </div>

  <div>
    <PresentationFilm title="Hunger Games" image = "hungerGames"/>
  </div>

</template>

<script>
import api from '@/services/api';
import SimpleUpload from './SimpleUpload.vue'
import PresentationFilm from '../components/PresentationFilm.vue';


export default {
  name: "Films",
  components: { SimpleUpload, PresentationFilm },

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
  },
}
</script>

<style>

</style>