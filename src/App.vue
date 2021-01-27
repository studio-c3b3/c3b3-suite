<template>
  <div id="header">
    <h1 id="titre">C3B3</h1>
    <div id="nav">
        <router-link to="/" id="pages">Home</router-link> |
        <router-link to="/films" id="pages">Films</router-link>
    </div>
  </div>
  <router-view />
</template>
