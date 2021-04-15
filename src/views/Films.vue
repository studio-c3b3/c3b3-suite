
<template>
  <h1>Films</h1>

  <div class="uploader">
    <simple-upload/>
  </div>

  <div>
    <ul>
      <li v-for="movie, index in movies" :key="index" v-on:click="selectMovie(movie)">{{movie.title}}</li>
    </ul>
  </div>

  <div v-if="selectedMovie != null">
    <PresentationFilm :title="selectedMovie.title" :image="selectedMovie.image" :director="selectedMovie.director"/>
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
      selectedMovie: null,
      movies: null
    }
  },
  methods: {
    fetchAllMovies(){
      return api.get(`movies/`).then(response => {
        console.log(response);
        this.movies = response.data
        });
    },

    selectMovie(movie){
      this.selectedMovie = movie
      console.log(this.selectedMovie)
    }
  },
  created(){
    this.fetchAllMovies();
  },
}
</script>

<style>

</style>