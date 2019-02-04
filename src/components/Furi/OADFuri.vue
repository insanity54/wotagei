<template>
<div class="oad-furi">
  <h3>OAD</h3>
  <p>Over Action Dolphin</p>
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
  name: 'OADFuri',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=D37HA6vYMyM',
      ss: '0:25',
      to: '0:29',
      videoHigh: {
        src: "/static/vid/D37HA6vYMyM_0:25-0:29.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow: {
        src: "/static/vid/D37HA6vYMyM_0:25-0:29.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster: "/static/img/D37HA6vYMyM_0:25-0:29.jpg",
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
