<template>
<div class="calls">
  <h3>Hai</h3>
  <vue-plyr>
    <video poster="/static/img/OUldsLhOMtc_5:18-5:26.jpg" src="/static/vid/OUldsLhOMtc_5:18-5:26.mp4">
      <source src="/static/vid/OUldsLhOMtc_5:18-5:26.webm" type="video/webm" size="360">
      <source src="/static/vid/OUldsLhOMtc_5:18-5:26.mp4" type="video/mp4" size="720">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'HaiFuri',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=OUldsLhOMtc',
      ss: '5:18',
      to: '5:26',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
  margin: 0;
}
a {
  color: #1aafffcc;
}
</style>
