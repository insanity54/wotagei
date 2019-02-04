<template>
<div class="romance-furi">
  <h3>Romance (ロマンス)</h3>
  <vue-plyr>
    <video :poster="videoPoster" :src="videoHigh.src">
      <source :src="videoLow.src" :type="videoLow.type" :size="videoLow.size">
      <source :src="videoHigh.src" :type="videoHigh.type" :size="videoHigh.size">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
  <hr>
  <vue-plyr>
    <video :poster="videoPoster2" :src="videoHigh2.src">
      <source :src="videoLow2.src" :type="videoLow2.type" :size="videoLow2.size">
      <source :src="videoHigh2.src" :type="videoHigh2.type" :size="videoHigh2.size">
    </video>
  </vue-plyr>
  <a :href="sauce2" target="_blank">Video Source</a>
  <hr>
  <vue-plyr>
    <video :poster="videoPoster1" :src="videoHigh1.src">
      <source :src="videoLow1.src" :type="videoLow1.type" :size="videoLow1.size">
      <source :src="videoHigh1.src" :type="videoHigh1.type" :size="videoHigh1.size">
    </video>
  </vue-plyr>
  <a :href="sauce1" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'RomanceFuri',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=oK96IeXv-ko',
      ss: '0:07',
      to: '0:55',
      videoHigh: {
        src: "/static/vid/oK96IeXv-ko_0:07-0:55.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow: {
        src: "/static/vid/oK96IeXv-ko_0:07-0:55.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster: "/static/img/oK96IeXv-ko_0:07-0:55.jpg",
      sauce2: 'https://www.youtube.com/watch?v=DJ8azFtOhL0',
      ss2: '1:52',
      to2: '2:09',
      videoHigh2: {
        src: "/static/vid/DJ8azFtOhL0_1:52-2:09.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow2: {
        src: "/static/vid/DJ8azFtOhL0_1:52-2:09.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster2: "/static/img/DJ8azFtOhL0_1:52-2:09.jpg",
      sauce1: 'https://www.youtube.com/watch?v=jbiUaBSDhoI',
      ss1: '4:24',
      to1: '4:32',
      videoHigh1: {
        src: "/static/vid/jbiUaBSDhoI_4:24-4:32.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow1: {
        src: "/static/vid/jbiUaBSDhoI_4:24-4:32.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster1: "/static/img/jbiUaBSDhoI_4:24-4:32.jpg",
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
