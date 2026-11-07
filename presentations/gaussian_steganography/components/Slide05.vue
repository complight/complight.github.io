<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const base = import.meta.env.BASE_URL
const items = [
  { name: 'Position', file: 'gaussian-position.png', alt: 'A Gaussian center moving between two positions' },
  { name: 'Shape and orientation', file: 'gaussian-shape.png', alt: 'Circular, stretched, and tilted Gaussian examples' },
  { name: 'Color', file: 'gaussian-color.png', alt: 'Gaussians with blue, green, and orange colors' },
  { name: 'Opacity', file: 'gaussian-opacity.png', alt: 'Gaussians with different rendering contributions' },
]
</script>

<template>
  <div class="content gaussian-content">
    <div class="properties">
      <figure v-for="(item, index) in items" :key="item.name" v-click="index + 1" :class="{ dim: $clicks > index + 1 && $clicks < 5 }">
        <img :src="base + 'assets/' + item.file" :alt="item.alt">
        <figcaption>{{ item.name }}</figcaption>
      </figure>
    </div>
    <div v-click="5" class="overlap">
      <img :src="base + 'assets/gaussian-overlap.png'" alt="Many overlapping Gaussians reconstruct colored shapes and a checkerboard">
      <div><h3>Overlapping soft, colored primitives<br>form an image.</h3><p>We send the Gaussian parameters to the receiver,<br>who can use them to render the image.</p></div>
    </div>
  </div>
</template>

<style scoped>
.gaussian-content{padding-top:12px}
.properties{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;height:205px}
figure{margin:0;text-align:center;transition:opacity .25s}
figure img{width:100%;height:122px;object-fit:contain}
figcaption{font-weight:700;font-size:25px;border-top:1px solid #324052;margin-top:15px;padding-top:18px;white-space:nowrap}
figure:nth-child(2) figcaption{font-size:23px}
.overlap{display:flex;align-items:center;gap:48px;margin-top:17px}
.overlap>img{width:232px;height:232px;object-fit:contain;margin-left:20px}
.overlap h3{font-size:32px;line-height:1.35;margin:0 0 25px}
.overlap p{font-size:27px;line-height:1.35;color:#91c5ff;font-weight:600;margin:0}
</style>
