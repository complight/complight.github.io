<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="content related-content">
    <article v-click="1" :class="{ dim: $clicks > 1 && $clicks < 3 }">
      <h3>Image pixels</h3>
      <div class="figure"><img :src="base + 'assets/related-hidden.png'" alt="HiDDeN example showing cover, perturbation, and encoded image"></div>
      <p class="work">HiDDeN</p>
      <p>Small changes to image pixels carry the message.</p>
    </article>
    <article v-click="2" :class="{ dim: $clicks > 2 && $clicks < 3 }">
      <h3>Learned latent<br>representations</h3>
      <div class="figure"><img class="latent" :src="base + 'assets/related-latent.png'" alt="Latent code illustrated by a cube labeled z"></div>
      <p class="work">RoSteALS</p>
      <p>The message is added to an autoencoder’s latent code.</p>
    </article>
    <article v-click="3">
      <h3>3D Gaussian<br>representations</h3>
      <div class="figure"><img class="scene" :src="base + 'assets/related-3d-gaussians.png'" alt="Three-dimensional Gaussian scene of a ship"></div>
      <p class="work smaller">GaussianMarker / 3D-GSW</p>
      <p class="smaller">GaussianMarker reads parameters and renders.<br>3D-GSW reads rendered views.</p>
    </article>
  </div>
</template>

<style scoped>
.related-content{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;padding-top:13px}
article{text-align:center;border-left:1px solid #324052;padding:7px 18px 0;transition:opacity .25s}
article:first-child{border-left:0}
h3{font-size:30px;line-height:1.2;height:75px;display:flex;align-items:center;justify-content:center;margin:0 0 16px}
.figure{height:200px;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.figure img{width:100%;height:180px;object-fit:contain}
.figure img.latent{width:178px;height:195px}
.figure img.scene{width:190px;height:195px}
.work{color:#b3bdca;font-size:25px;margin:0 0 25px}
article>p:last-child{font-size:23px;line-height:1.3;margin:0}
.smaller{font-size:21px!important}
</style>
