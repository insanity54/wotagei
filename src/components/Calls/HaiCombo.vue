<template>
<div class="hai-combo">
  <h3>Hai Combo</h3>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'Calls',
  data() {
    return {
      sauce: 'tbd',
      ss: '4:23',
      to: '7:28',
      video: {
        sources: [{
          src: '/static/vid/mSvrMVGpMiE.mp4',
          type: 'video/mp4'
        }],
        options: {
          autoplay: false,
          volume: 0.6,
          poster: '/static/img/mSvrMVGpMiE.jpg'
        }
      }
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
