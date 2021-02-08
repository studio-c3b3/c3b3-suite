<template>

  <div class="header">

    <div class="logo">
      <h1 class="titre">C3B3</h1>
    </div>

    <div class="nav">

        <div class="home">
          <router-link to="/" class="pages">Home</router-link> 
        </div>

        <div class ="films">
          <router-link to="/films" class="pages">Films</router-link>
        </div>
        
    </div>

  </div>

  <router-view />
</template>

<style>

body{
  margin : 0
}

.header{
  background-color: #333;
}

.titre{
  color: antiquewhite;
}

.logo{
  margin-left: 15%;
  margin-right: 5%; 
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(247,163,86,1) 0%, rgba(246,123,12,1) 100%);
  display: inline-block;
}

.nav{
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(246,123,12,1) 0%, rgba(247,163,86,1) 100%); 
}

.pages{
  color: antiquewhite;
}

.home{
  display: inline-block;
  transition: all .2s ease-in-out;
  margin-right: 1%;
}

.films{
  display: inline-block;
  transition: all .2s ease-in-out;
  margin-right: 1%;
}

.home:hover{
  transform: scale(1.1);
}

.films:hover{
  transform: scale(1.1);
}

</style>