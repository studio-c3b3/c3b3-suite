<template>
  <h3>{{title}}</h3>
  <img :src="'../assets/'+image+'.jpg'" width="300" height="500">
</template>

<script>
export default {
  name: "PresentationFilm",
  props:{
    title: String,
    image: String,
  }
}
</script>