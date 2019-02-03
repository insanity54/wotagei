<template>
<div class="calls">
  <h3>Standard Mix</h3>
  <ul>
    <li>
      Taiga (Tiger) タイガー
    </li>
    <li>
      Faiya (Fire) ファイヤー
    </li>
    <li>
      Saiba (Cyber) サイバー
    </li>
    <li>
      Faiba (Fiber) ファイバー
    </li>
    <li>
      Daiba (Diver) ダイバー
    </li>
    <li>
      Baiba (Viber) バイバー
    </li>
    <li>
      Jya Jya! ジャージャー！
    </li>
  </ul>
  <vue-plyr>
    <video poster="/static/img/mSvrMVGpMiE_4:23-7:28.jpg" src="/static/vid/mSvrMVGpMiE_4:23-7:28.mp4">
      <source src="/static/vid/mSvrMVGpMiE_4:23-7:28.webm" type="video/webm" size="360">
      <source src="/static/vid/mSvrMVGpMiE_4:23-7:28.mp4" type="video/mp4" size="720">
    </video>
  </vue-plyr>
  <a :href="sauce" target="_blank">Video Source</a>
</div>
</template>

<script>
export default {
  name: 'StandardMix',
  data() {
    return {
      sauce: 'https://www.youtube.com/watch?v=mSvrMVGpMiE',
      ss: '4:23',
      to: '7:28',
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
