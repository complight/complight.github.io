<script setup lang="ts">
import { useNav } from '@slidev/client'
const { isPrintMode } = useNav()
defineProps<{ title: string; section: string; page: number; source?: string }>()
</script>
<template>
  <section class="deck-frame" :class="{ 'print-ready': isPrintMode }" :data-slide="page">
    <header class="deck-heading">
      <div class="section-label">{{ section }}</div>
      <div class="page-number">{{ String(page).padStart(2, '0') }} / 16</div>
      <div class="section-rule"></div>
      <h1>{{ title }}</h1>
    </header>
    <slot />
    <footer v-if="source" class="source-line">{{ source }}</footer>
  </section>
</template>
