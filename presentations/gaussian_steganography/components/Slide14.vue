<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const methods = [
  { name: 'Matched random', detail: 'Random edits with a key', recovered: 25, drop: '0.066 dB', ours: false },
  { name: 'Greedy no-key', detail: 'Lowest-cost edits, no key', recovered: 30, drop: '0.075 dB', ours: false },
  { name: 'Ours', detail: 'Cost-aware keyed assignment', recovered: 30, drop: '0.091 dB', ours: true },
]
</script>

<template>
  <div class="content evaluation-content">
    <p class="setup muted">30 synthetic fits / 256 Gaussians / fixed 8-bit message</p>
    <div class="chart" role="table" aria-label="Synthetic fit evaluation results">
      <div class="chart-head" role="row">
        <span></span><strong>Exact recovery</strong><span></span><strong>Mean ΔPSNR ↓</strong>
      </div>
      <div v-for="(method, i) in methods" :key="method.name" v-click="i + 1" class="chart-row" :class="{ dim: $clicks > i + 1 && $clicks < 4, ours: method.ours }" role="row">
        <div class="method" role="cell"><strong>{{ method.name }}</strong><small>{{ method.detail }}</small></div>
        <div class="bar-track" role="cell" :aria-label="`${method.recovered} exact recoveries out of 30`"><div class="bar" :style="{ width: `${method.recovered / 30 * 100}%` }"></div></div>
        <strong class="count" role="cell">{{ method.recovered }} / 30</strong>
        <span class="drop" role="cell">{{ method.drop }}</span>
      </div>
      <div class="axis"><span></span><div><span>0</span><span>10</span><span>20</span><span>30 fits</span></div></div>
    </div>
    <div v-click="4" class="interpretation">
      <strong>Both cost-based methods recover every message in this test.</strong>
      <p class="accent">Greedy no-key selects low-cost edits without a key.<br />Our method uses a key to define candidate edits and their mapping to message bits.</p>
      <p class="muted">Correct-key BER: 0.000. Mean wrong-key BER: 0.543 (chance level: 0.5).</p>
    </div>
  </div>
</template>

<style scoped>
.evaluation-content { display: flex; flex-direction: column; gap: 12px; }
.setup { font-size: 25px; line-height: 1.25; margin: 0 0 8px; }
.chart { margin: 0; }
.chart-head, .chart-row { display: grid; grid-template-columns: 250px 1fr 120px 170px; column-gap: 20px; align-items: center; }
.chart-head { height: 34px; margin-bottom: 7px; font-size: 23px; }
.chart-head strong:last-child { text-align: center; }
.chart-row { min-height: 77px; transition: opacity 180ms ease; }
.method strong { display: block; font-size: 27px; font-weight: 500; line-height: 1.15; }
.method small { display: block; margin-top: 7px; color: #b3bdca; font-size: 17px; }
.bar-track { height: 49px; background: repeating-linear-gradient(to right, transparent 0, transparent calc(33.333% - 1px), #2a3b4e calc(33.333% - 1px), #2a3b4e 33.333%); border-left: 1px solid #2a3b4e; border-right: 1px solid #2a3b4e; }
.bar { height: 41px; margin-top: 4px; background: #6c8099; }
.ours .bar { background: #91c5ff; }
.ours .method strong, .ours .drop { font-weight: 700; }
.ours .method small { color: #91c5ff; }
.count, .drop { font-size: 27px; text-align: center; white-space: nowrap; }
.drop { color: #b3bdca; }
.ours .drop { color: #f6f8fc; }
.axis { display: grid; grid-template-columns: 250px 1fr 120px 170px; column-gap: 20px; color: #b3bdca; font-size: 16px; }
.axis > div { display: flex; justify-content: space-between; border-top: 1px solid #2a3b4e; padding-top: 6px; }
.interpretation { margin-top: 9px; }
.interpretation strong { display: block; font-size: 26px; line-height: 1.2; }
.interpretation p { font-size: 21px; line-height: 1.35; margin: 8px 0 0; }
.interpretation p:last-child { font-size: 19px; }
</style>
