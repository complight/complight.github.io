<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
</script>

<template>
  <div class="content s12">
    <div v-click="1" class="comparison" :class="{ dim: $clicks > 3 && $clicks < 6 }">
      <div class="table embedded"><h3>Embedded parameters</h3><img :src="asset('embedded-parameters.png')" alt="Parameters after message embedding" /></div>
      <span class="compare muted">compare<span class="line"></span></span>
      <div class="table clean"><h3>Clean parameters<br />before embedding</h3><img :src="asset('clean-parameters.png')" alt="Matching Gaussian parameters saved before message embedding" /></div>
    </div>
    <div v-click="2" class="map" :class="{ dim: $clicks > 2 && $clicks < 5 }">
      <h3>Assignment map</h3>
      <img :src="asset('assignment-map.png')" alt="Keyed assignment map for reading changes and combining decisions" />
      <p class="muted">Which edits to check<br />How to read their changes<br />How to combine the decisions</p>
    </div>
    <div v-click="3" class="measure" :class="{ dim: $clicks > 3 && $clicks < 6 }">
      <svg class="brace" viewBox="0 0 565 50" aria-hidden="true"><defs><marker id="s12-measure" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#91c5ff" /></marker></defs><path d="M565 0 V18 H4 M4 0 V45" fill="none" stroke="#91c5ff" stroke-width="3" marker-end="url(#s12-measure)" /></svg>
      <h3>Measure parameter<br />changes</h3>
    </div>
    <div v-click="4" class="decisions" :class="{ dim: $clicks > 4 && $clicks < 6 }">
      <span class="arrow accent" aria-hidden="true">⟶</span>
      <h3>Convert changes into<br />0/1 decisions</h3>
    </div>
    <div v-click="5" class="recover">
      <span class="arrow accent" aria-hidden="true">⟶</span>
      <span class="map-arrow accent" aria-hidden="true">↓</span>
      <h3>Recover four-bit<br />message blocks</h3>
    </div>
    <p v-click="6" class="scale accent">Fixed 8-bit message: 256 Gaussians per synthetic fit / 4,096 per natural image.</p>
  </div>
</template>

<style scoped>
.s12 h3 { margin:0; font-size:28px; line-height:1.15; text-align:center; }
.comparison { position:absolute; left:10px; top:0; width:740px; height:330px; }
.table { position:absolute; top:0; width:290px; }
.table h3 { height:66px; display:flex; align-items:center; justify-content:center; }
.table img { width:290px; height:235px; object-fit:contain; background:white; }
.embedded { left:0; }
.clean { left:420px; }
.compare { position:absolute; left:299px; top:167px; width:110px; text-align:center; font-size:21px; font-weight:700; }
.line { display:block; width:104px; height:3px; background:#91c5ff; margin:10px auto; }
.map { position:absolute; left:840px; top:0; width:340px; text-align:center; }
.map h3 { margin:4px 0 15px; }
.map img { width:104px; height:147px; object-fit:contain; background:white; }
.map p { font-size:21px; line-height:1.2; margin:12px 0 0; }
.measure { position:absolute; left:0; top:362px; width:310px; }
.brace { position:absolute; left:155px; top:-50px; width:565px; height:50px; overflow:visible; }
.decisions { position:absolute; left:418px; top:362px; width:320px; }
.arrow { position:absolute; left:-95px; top:7px; width:88px; font-size:50px; line-height:1; text-align:center; }
.recover { position:absolute; left:840px; top:355px; width:340px; background:#17392f; padding:13px 10px; color:#9be3b3; }
.recover h3 { font-size:30px; line-height:1.15; }
.recover > .arrow { top:16px; }
.map-arrow { position:absolute; left:152px; top:-36px; font-size:35px; line-height:1; }
.scale { position:absolute; bottom:0; left:0; right:0; margin:0; text-align:center; font-size:24px; font-weight:700; }
</style>
