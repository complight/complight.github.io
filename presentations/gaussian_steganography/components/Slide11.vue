<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
</script>

<template>
  <div class="content s11">
    <div v-click="1" class="visuals">
      <img class="edits" :src="asset('selected-parameter-edits.png')" alt="Selected changes to elongation, opacity, and brightness" />
      <span class="down accent" aria-hidden="true">↓</span>
      <img class="embedded" :src="asset('embedded-parameters.png')" alt="Embedded Gaussian parameters after fine-tuning" />
    </div>
    <div class="objectives">
      <div v-click="1" :class="{ dim: $clicks > 1 }"><span>01</span><strong>Make the intended<br />changes readable.</strong></div>
      <div v-click="2" :class="{ dim: $clicks > 2 }"><span>02</span><strong>Preserve the<br />rendered appearance.</strong></div>
      <div v-click="3"><span>03</span><strong>Limit changes to the<br />parameter distribution.</strong></div>
    </div>
  </div>
</template>

<style scoped>
.visuals { position:absolute; left:37px; top:1px; width:465px; text-align:center; }
.edits { width:450px; height:283px; object-fit:contain; background:white; }
.down { font-size:38px; line-height:1; display:block; height:32px; }
.embedded { display:block; margin:0 auto; width:220px; height:166px; object-fit:contain; background:white; }
.objectives { position:absolute; left:620px; right:8px; top:0; }
.objectives > div { display:flex; align-items:flex-start; gap:35px; padding:30px 0 32px; min-height:145px; }
.objectives > div + div { border-top:1px solid #3e516a; }
.objectives span { font-size:30px; color:#91c5ff; font-weight:700; }
.objectives strong { font-size:32px; line-height:1.2; }
</style>
