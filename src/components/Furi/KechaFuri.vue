<template>
<div class="kecha-furi">
  <h3>Kecha</h3>
  <vue-plyr>
    <video poster="/static/img/OUldsLhOMtc_4:00-4:18.jpg" src="/static/vid/OUldsLhOMtc_4:00-4:18.mp4">
      <source src="/static/vid/OUldsLhOMtc_4:00-4:18.webm" type="video/webm" size="360">
      <source src="/static/vid/OUldsLhOMtc_4:00-4:18.mp4" type="video/mp4" size="720">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'KechaFuri',
  components: {

  },
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=OUldsLhOMtc',
      ss: '4:00',
      to: '4:18',
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
