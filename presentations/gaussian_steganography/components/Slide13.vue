<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const columns = [
  { title: 'Source image', files: ['quality-source-a.png', 'quality-source-b.png'], alt: ['Source photograph A: white flower', 'Source photograph B: orange flower'] },
  { title: 'Clean Gaussian fit', files: ['quality-clean-a.png', 'quality-clean-b.png'], alt: ['Clean fit A, PSNR 30.2, SSIM 0.94, LPIPS 0.022', 'Clean fit B, PSNR 28.7, SSIM 0.92, LPIPS 0.018'] },
  { title: 'Embedded Gaussian fit', files: ['quality-embedded-a.png', 'quality-embedded-b.png'], alt: ['Embedded fit A, PSNR 30.1, SSIM 0.94, LPIPS 0.022', 'Embedded fit B, PSNR 28.7, SSIM 0.92, LPIPS 0.018'] },
]
</script>

<template>
  <div class="content quality-content">
    <div class="quality-grid">
      <section v-for="(column, i) in columns" :key="column.title" v-click="i + 1" :class="{ dim: $clicks > i + 1 && $clicks < 4 }" :aria-label="column.title">
        <h3>{{ column.title }}</h3>
        <img v-for="(file, n) in column.files" :key="file" :src="asset(file)" :alt="column.alt[n]" />
      </section>
    </div>
    <div v-click="4" class="quality-takeaway">
      <strong>Perceptually similar results</strong>
      <span class="accent">ΔPSNR = max(0, PSNR<sub>clean</sub> − PSNR<sub>embedded</sub>)</span>
    </div>
  </div>
</template>

<style scoped>
.quality-content { display: flex; flex-direction: column; justify-content: space-between; }
.quality-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; text-align: center; }
.quality-grid section { transition: opacity 180ms ease; }
.quality-grid h3 { margin: 0 0 12px; font-size: 26px; line-height: 1.2; }
.quality-grid img { display: block; width: 198px; height: 198px; object-fit: contain; margin: 0 auto 10px; }
.quality-takeaway { display: flex; align-items: center; justify-content: space-between; gap: 18px; font-size: 24px; line-height: 1.25; }
.quality-takeaway strong { font-size: 27px; }
.quality-takeaway sub { font-size: 14px; }
</style>
