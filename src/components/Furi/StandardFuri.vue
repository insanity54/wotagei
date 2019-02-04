<template>
<div class="standard-furi">
  <h3>Standard</h3>
  <vue-plyr>
    <video :poster="videoPoster" :src="videoHigh.src">
      <source :src="videoLow.src" :type="videoLow.type" :size="videoLow.size">
      <source :src="videoHigh.src" :type="videoHigh.type" :size="videoHigh.size">
    </video>
  </vue-plyr>

  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'StandardFuri',
  components: {

  },
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=OUldsLhOMtc',
      ss: '5:29',
      to: '5:34',
      videoHigh: {
        src: "/static/vid/OUldsLhOMtc_5:29-5:34.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow: {
        src: "/static/vid/OUldsLhOMtc_5:29-5:34.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster: "/static/img/OUldsLhOMtc_5:29-5:34.jpg",
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
