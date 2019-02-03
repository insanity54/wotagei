<template>
<div class="fuwa-furi">
  <h3>Fuwa</h3>
  <vue-plyr>
    <video poster="/static/img/OUldsLhOMtc_3:52-4:00.jpg" src="/static/vid/OUldsLhOMtc_3:52-4:00.mp4">
      <source src="/static/vid/OUldsLhOMtc_3:52-4:00.webm" type="video/webm" size="360">
      <source src="/static/vid/OUldsLhOMtc_3:52-4:00.mp4" type="video/mp4" size="720">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'FuwaFuri',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=OUldsLhOMtc',
      ss: '3:52',
      to: '4:00',
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
