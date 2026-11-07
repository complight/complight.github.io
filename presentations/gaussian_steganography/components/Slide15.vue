<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const ids = ['0801', '0803', '0805', '0806', '0807', '0808', '0809', '0810']
const descriptions = ['penguin', 'flower', 'wolf', 'tropical beach', 'mountain lake', 'lakeside village', 'lion', 'squirrel']
</script>

<template>
  <div class="content natural-content">
    <p v-click="1" class="setup muted">112 held-out images / 256 × 256 / 4,096 Gaussians / fixed 8-bit message</p>
    <div class="natural-layout">
      <section v-click="1" class="examples" :class="{ dim: $clicks > 1 }">
        <h3>Examples from the held-out input set</h3>
        <div class="example-grid">
          <figure v-for="(id, i) in ids" :key="id">
            <img :src="asset(`natural-${id}.png`)" :alt="`Held-out image ${id}: ${descriptions[i]}`" />
            <figcaption>{{ id }}</figcaption>
          </figure>
        </div>
      </section>
      <section class="results" aria-label="Natural image evaluation results">
        <div v-click="2" class="result exact" :class="{ dim: $clicks > 2 }">
          <strong>112 / 112</strong>
          <h3>Exact message recovery</h3>
          <p class="green">Correct-key BER: 0.000</p>
        </div>
        <div v-click="3" class="result psnr" :class="{ dim: $clicks > 3 }">
          <strong class="accent">0.009 dB</strong>
          <p class="muted">Mean ΔPSNR</p>
        </div>
        <div v-click="4" class="result wrong-key">
          <strong>0.520</strong>
          <div><p>Mean wrong-key BER</p><p class="muted">Chance BER = 0.5</p></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.natural-content { display: flex; flex-direction: column; gap: 28px; }
.setup { margin: 0; font-size: 25px; line-height: 1.3; }
.natural-layout { display: grid; grid-template-columns: 600px 1fr; gap: 45px; }
.examples { transition: opacity 180ms ease; }
.examples h3 { margin: 0 0 20px; font-size: 26px; line-height: 1.2; }
.example-grid { display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 16px; row-gap: 18px; }
.example-grid figure { margin: 0; }
.example-grid img { display: block; width: 138px; height: 138px; object-fit: cover; }
.example-grid figcaption { text-align: center; color: #b3bdca; font-size: 16px; margin-top: 7px; }
.results { border-left: 1px solid #344254; padding-left: 40px; display: flex; flex-direction: column; gap: 24px; }
.result { transition: opacity 180ms ease; }
.exact > strong { font-size: 66px; line-height: 1; letter-spacing: -1px; }
.exact h3 { font-size: 27px; margin: 14px 0 8px; line-height: 1.15; }
.result p { margin: 0; line-height: 1.3; }
.green { color: #88e8ae; font-size: 23px; }
.psnr > strong { font-size: 47px; line-height: 1; }
.psnr p { font-size: 26px; margin-top: 10px; }
.wrong-key { display: flex; gap: 18px; align-items: center; }
.wrong-key > strong { font-size: 42px; }
.wrong-key p { font-size: 22px; margin: 3px 0; }
</style>
