<template>
  <h3>{{title}}</h3>
  <p>Par {{director}}</p>
  <img :src="'../assets/'+image" width="300" height="500">
</template>

<script>
export default {
  name: "PresentationFilm",
  props:{
    title: String,
    image: String,
    director: String,
  }
}
</script>