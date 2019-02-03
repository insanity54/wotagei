<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>How to Wota</h2>
    <ul>
      <li>
        <router-link
          to="/calls"
        >
          Calls
        </router-link>
      </li>
      <li>
        <router-link
          to="/furi"
        >
          Furi
        </router-link>
      </li>
    </ul>
    <h2>Social</h2>
    <ul>
      <li>
        <a
          href="#"
          target="_blank"
        >
          Discord
        </a>
      </li>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: ''
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
