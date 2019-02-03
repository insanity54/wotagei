<template>
<div class="hai-chant">
  <h3>Hai Chant</h3>
  <vue-plyr>
    <video poster="/static/img/mSvrMVGpMiE_1:39.100-1:45.jpg" src="/static/vid/mSvrMVGpMiE_1:39.100-1:45.mp4">
      <source src="/static/vid/mSvrMVGpMiE_1:39.100-1:45.webm" type="video/webm" size="360">
      <source src="/static/vid/mSvrMVGpMiE_1:39.100-1:45.mp4" type="video/mp4" size="720">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'HaiCall',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=mSvrMVGpMiE',
      ss: '1:39.100',
      to: '1:45',
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
