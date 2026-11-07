<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
const base = import.meta.env.BASE_URL
const container = ref<HTMLElement>()
const { $clicks } = useSlideContext()
function syncFrame() {
  const video = container.value?.querySelector('video')
  if (!video || !Number.isFinite(video.duration)) return
  if ($clicks.value >= 2) {
    video.pause()
    video.currentTime = Math.max(0, video.duration - 0.05)
  }
}
watch($clicks, (value, previous) => {
  const video = container.value?.querySelector('video')
  if (value === 1 && previous >= 2 && video) {
    video.currentTime = 0
    void video.play().catch(() => {})
  } else syncFrame()
}, { flush:'post' })
</script>

<template>
  <div ref="container" class="content fitting-content">
    <p class="explanation">Fitting adjusts the Gaussian parameters to approximate the target.</p>
    <div class="fit-pair">
      <figure><figcaption>Target Image</figcaption><img :src="base + 'assets/fitting-target.png'" alt="Target containing a red circle, green square, blue ellipse, and checkerboard"></figure>
      <figure><figcaption v-click="1">Gaussian Parameter Updates</figcaption>
        <SlidevVideo v-click="1" :poster="base + 'assets/fitting-poster.png'" :print-poster="base + 'assets/fitting-poster.png'" :autoplay="true" autoreset="slide" controls muted playsinline preload="metadata" @loadedmetadata="syncFrame">
          <source :src="base + 'assets/gaussian-fitting.mp4'" type="video/mp4">
        </SlidevVideo>
      </figure>
    </div>
    <p v-click="2" class="clean-label">This is the clean fit, before message embedding.</p>
    <p v-click="3" class="question">Can we add a message while keeping the rendering nearly unchanged?</p>
  </div>
</template>

<style scoped>
.explanation{font-size:27px;line-height:1.2;margin:0 0 20px}
.fit-pair{display:grid;grid-template-columns:1fr 1fr;gap:70px;margin:0 105px}
figure{margin:0;text-align:center}
figcaption{font-size:29px;font-weight:700;white-space:nowrap;margin-bottom:15px}
figure img,figure video{width:303px;height:303px;object-fit:contain;background:#151716;display:block;margin:auto}
.clean-label{text-align:center;font-size:25px;color:#b3bdca;margin:16px 0 12px}
.question{text-align:center;font-size:27px;background:#17362d;color:#91e5b2;font-weight:700;padding:13px 14px;margin:0;line-height:1.2}
</style>
