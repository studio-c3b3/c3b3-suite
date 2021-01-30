<template>

  <div id="header">

    <div id="logo">
      <h1 id="titre">C3B3</h1>
    </div>

    <div id="nav">

        <div id="home">
          <router-link to="/" id="pages">Home</router-link> 
        </div>

        <div id ="films">
          <router-link to="/films" id="pages">Films</router-link>
        </div>
        
    </div>

  </div>

  <router-view />
</template>
