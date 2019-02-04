<template>
  <div class="furi">
    <h2>Furi</h2>
    <ul>
      <li>
        <router-link to="/furi/standard">Standard</router-link>
      </li>
      <li>
        <router-link to="/furi/hai">Hai</router-link>
      </li>
      <li>
        <router-link to="/furi/kecha">Kecha</router-link>
      </li>
      <li>
        <router-link to="/furi/fuwa">Fuwa</router-link>
      </li>
      <li>
        <router-link to="/furi/romance">Romance</router-link>
      </li>
      <li>
        <router-link to="/furi/oad">OAD</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Furi',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1aafffcc;
}
</style>
