<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>

<template>
  <div class="content s10">
    <section class="candidate-side">
      <div v-click="1" :class="{ dim: $clicks > 2 }">
        <h2>Candidate edits</h2>
        <div class="edit"><strong class="accent">E₁</strong><p>Increase elongation of<br />Gaussian 1</p></div>
        <div class="edit"><strong class="accent">E₂</strong><p>Increase opacity of<br />Gaussian 3</p></div>
        <div class="edit"><strong class="accent">E₃</strong><p>Decrease brightness of<br />Gaussian 1</p></div>
      </div>
      <div v-click="2" class="set" :class="{ dim: $clicks > 2 }">
        <p>An edit set uses several<br />candidate edits together.</p>
        <strong class="accent">Example edit set: E₁ and E₂</strong>
      </div>
    </section>
    <section class="selection-side">
      <h2 v-click="3">Select an edit set</h2>
      <div v-click="3" class="rule first" :class="{ dim: $clicks > 3 }">
        <h3>1. Keep sets that encode<br />the target message.</h3>
        <p class="muted">The key defines the candidate edits<br />and their mapping to message bits.</p>
      </div>
      <div v-click="4" class="rule second">
        <h3>2. Among valid sets, prefer<br />lower total cost.</h3>
        <p class="accent">Cost estimates visual and<br />parameter changes.</p>
      </div>
      <p v-click="5" class="constraints muted">Region and coverage constraints also apply.</p>
    </section>
  </div>
</template>

<style scoped>
.candidate-side { position:absolute; left:16px; top:7px; width:520px; }
.selection-side { position:absolute; left:620px; top:7px; width:560px; }
.s10 h2 { font-size:31px; margin:0 0 30px; line-height:1.15; }
.edit { display:flex; align-items:flex-start; gap:30px; margin:0 0 24px; }
.edit strong { width:54px; flex:none; font-size:32px; }
.edit p { margin:0; font-size:27px; line-height:1.18; }
.set { margin-top:23px; }
.set p { margin:0 0 15px; font-size:25px; line-height:1.2; }
.set strong { font-size:27px; }
.rule h3 { margin:0 0 24px; font-size:30px; line-height:1.22; }
.rule p { margin:0; font-size:24px; line-height:1.25; }
.second { margin-top:35px; }
.second h3 { margin-bottom:15px; }
.constraints { font-size:21px; margin-top:25px; }
</style>
