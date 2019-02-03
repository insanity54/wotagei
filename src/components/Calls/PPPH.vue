<template>
<div class="ppph">
  <h3>PPPH</h3>
  <ul>
    <li>
      Pan
    </li>
    <li>
      Pan
    </li>
    <li>
      Pan
    </li>
    <li>
      Hiuu
    </li>
  </ul>
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
  name: 'PPPH',
  data() {
    return {
      sauce: 'tbd',
      ss: '4:23',
      to: '7:28',
      videoHigh: {
        src: "/static/vid/mSvrMVGpMiE_4:23-7:28.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow: {
        src: "/static/vid/mSvrMVGpMiE_4:23-7:28.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster: "/static/img/mSvrMVGpMiE_4:23-7:28.jpg",
    }
  }
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
