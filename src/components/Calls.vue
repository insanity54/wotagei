<template>
  <div class="calls">
    <h2>Calls</h2>
    <ul>
      <li>
        <router-link to="/calls/hai-chant">Hai Chant</router-link>
      </li>
      <li>
        <router-link to="/calls/hai-combo">Hai Combo / PPPH</router-link>
      </li>
      <li>
        <router-link to="/calls/standard-mix">Standard Mix</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Calls',
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
