<script setup lang="ts">
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="content setting-content">
    <figure v-click="1">
      <img :src="base + 'assets/clean-parameters.png'" alt="Fitted clean parameter table: index i, position μ, shape s, orientation θ, color c, and opacity α">
      <figcaption>Each row describes one Gaussian.</figcaption>
    </figure>
    <div class="setting-copy">
      <div v-click="1">
        <h3>One image, represented by<br>a set of 2D Gaussians</h3>
      </div>
      <dl v-click="2" class="parameter-key">
        <div><dt>μ</dt><dd>Position</dd></div>
        <div><dt>s</dt><dd>Shape</dd></div>
        <div><dt>θ</dt><dd>Orientation</dd></div>
        <div><dt>c</dt><dd>Color</dd></div>
        <div><dt>α</dt><dd>Opacity</dd></div>
      </dl>
      <div v-click="3">
        <p class="question">Can selected parameter changes<br>carry a hidden message?</p>
        <p class="goal">Keep the rendered image close to the clean fit.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.setting-content{display:grid;grid-template-columns:445px 1fr;gap:55px;align-items:center}
figure{margin:0;text-align:center}figure img{width:445px;max-height:400px;object-fit:contain}
figcaption{color:#91c5ff;font-size:23px;margin-top:20px}
.setting-copy h3{font-size:33px;line-height:1.25;margin:0 0 23px}
.parameter-key{display:flex;flex-wrap:wrap;gap:15px 27px;margin:0 0 24px}
.parameter-key>div{display:flex;align-items:baseline;gap:9px}.parameter-key dt{font-family:Georgia,serif;color:#91c5ff;font-size:31px;font-style:italic;width:25px}
.parameter-key dd{margin:0;font-size:24px}
.question{background:#17362d;color:#91e5b2;font-weight:700;font-size:30px;line-height:1.3;padding:19px 20px;margin:0 0 22px}
.goal{font-size:24px;line-height:1.3;color:#91c5ff;margin:0}
</style>
