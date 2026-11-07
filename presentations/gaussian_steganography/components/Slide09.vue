<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const parameters = [
  { title:'Elongation', symbol:'log κ', description:'How stretched\nthe Gaussian is', plus:'elongation-increase.png', minus:'elongation-decrease.png', plusLabel:'More stretched', minusLabel:'More rounded' },
  { title:'Opacity', symbol:'α', description:'How strongly it contributes\nto the image', plus:'opacity-increase.png', minus:'opacity-decrease.png', plusLabel:'Stronger contribution', minusLabel:'Weaker contribution' },
  { title:'Brightness', symbol:'Y', description:'How bright\nits color is', plus:'brightness-increase.png', minus:'brightness-decrease.png', plusLabel:'Brighter', minusLabel:'Darker' },
]
</script>

<template>
  <div class="content s09">
    <div class="columns">
      <section v-for="(p, i) in parameters" :key="p.symbol" v-click="i+1" :class="{ dim: $clicks > i+1 && $clicks < 4 }">
        <h3>{{ p.title }} <span class="symbol">{{ p.symbol }}</span></h3>
        <p class="description muted">{{ p.description }}</p>
        <figure>
          <span class="sign accent">+Δ</span>
          <img :src="asset(p.plus)" :alt="`${p.title} increases: ${p.plusLabel.toLowerCase()}`" />
          <figcaption class="muted">{{ p.plusLabel }}</figcaption>
        </figure>
        <figure>
          <span class="sign accent">−Δ</span>
          <img :src="asset(p.minus)" :alt="`${p.title} decreases: ${p.minusLabel.toLowerCase()}`" />
          <figcaption class="muted">{{ p.minusLabel }}</figcaption>
        </figure>
      </section>
    </div>
    <p v-click="4" class="summary accent">One edit specifies a Gaussian, a parameter,<br />and an increase or decrease.</p>
  </div>
</template>

<style scoped>
.columns { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
section { position:relative; padding:0 12px; text-align:center; }
section + section { border-left:1px solid #3e516a; }
.s09 h3 { margin:0 0 11px; font-size:29px; white-space:nowrap; }
.symbol { display:inline; margin-left:8px; }
.description { white-space:pre-line; font-size:22px; line-height:1.22; height:57px; margin:0 0 7px; }
figure { position:relative; margin:0; height:151px; padding-left:47px; }
figure img { display:block; width:280px; height:120px; object-fit:contain; margin:0 auto; }
.sign { position:absolute; left:3px; top:45px; font-size:30px; line-height:1; }
figcaption { margin:0; font-size:22px; line-height:1.15; }
.summary { position:absolute; bottom:0; left:0; right:0; margin:0; text-align:center; font-size:29px; line-height:1.2; font-weight:700; }
</style>
