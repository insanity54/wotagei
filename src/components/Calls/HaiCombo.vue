<template>
<div class="hai-combo">
  <h3>Hai Combo / PPPH</h3>
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
  name: 'HaiCombo',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=OUldsLhOMtc',
      ss: '0:55',
      to: '2:27',
      videoHigh: {
        src: "/static/vid/OUldsLhOMtc_0:55-2:27.mp4",
        type: "video/mp4",
        size: "720"
      },
      videoLow: {
        src: "/static/vid/OUldsLhOMtc_0:55-2:27.webm",
        type: "video/webm",
        size: "360"
      },
      videoPoster: "/static/img/OUldsLhOMtc_0:55-2:27.jpg",
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
