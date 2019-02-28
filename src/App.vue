<template>
  <v-container id="app">
    <router-link to="/"><h1>NorthWestヲタ</h1></router-link>
    <router-view/>
  </v-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
