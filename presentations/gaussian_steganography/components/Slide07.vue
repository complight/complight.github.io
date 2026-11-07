<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
</script>

<template>
  <div class="content s07">
    <img v-click="1" class="carrier" :src="asset('candidate-carrier-pairs.png')" alt="Candidate signed Gaussian parameter edits and their keyed assignment to four-bit message blocks" />
    <div class="requirements">
      <div v-click="1" :class="{ dim: $clicks > 1 && $clicks < 4 }"><span>01</span><strong>Low visual impact</strong></div>
      <div v-click="2" :class="{ dim: $clicks > 2 && $clicks < 4 }"><span>02</span><strong>Reliable detection</strong></div>
      <div v-click="3"><span>03</span><strong>Correct message</strong></div>
    </div>
    <p v-click="4" class="takeaway accent">We need edits that satisfy all three requirements.</p>
  </div>
</template>

<style scoped>
.carrier { position:absolute; left:12px; top:28px; width:550px; height:350px; object-fit:contain; }
.requirements { position:absolute; left:610px; top:30px; width:570px; }
.requirements > div { display:flex; align-items:center; gap:40px; height:110px; transition:opacity .2s; }
.requirements span { color:#91c5ff; font-size:29px; font-weight:700; }
.requirements strong { font-size:35px; line-height:1.18; }
.takeaway { position:absolute; top:430px; left:0; width:100%; margin:0; text-align:center; font-size:31px; font-weight:700; }
</style>
