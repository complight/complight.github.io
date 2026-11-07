<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const captions = [
  '',
  'Start with clean parameters, the message, and a secret key.',
  'Choose allowed edits that encode the message at lower cost.',
  'Record the reading locations and bit mapping in an assignment map.',
  'Fine-tune the selected parameters to make the edits readable.',
  'Assignment chooses the edits. Fine-tuning embeds the message.',
]
const caption = computed(() => captions[Math.min($clicks.value, 5)])
</script>

<template>
  <div class="content s08">
    <div v-click="1" class="clean" :class="{ dim: $clicks > 1 && $clicks < 5 }">
      <h3>Clean<br />parameters</h3>
      <img :src="asset('clean-parameters.png')" alt="Clean Gaussian parameter table before embedding" />
      <p class="message">Message + Secret key</p>
    </div>
    <div v-click="2" class="assignment" :class="{ dim: $clicks > 2 && $clicks < 5 }">
      <div class="process">Keyed<br />assignment</div>
      <svg class="input-arrows" viewBox="0 0 120 200" aria-hidden="true"><defs><marker id="s08-in" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#91c5ff" /></marker></defs><path d="M0 28 H112 M0 177 H47 V48 H112" fill="none" stroke="#91c5ff" stroke-width="3" marker-end="url(#s08-in)" /></svg>
    </div>
    <div v-click="3" class="map" :class="{ dim: $clicks > 3 && $clicks < 5 }">
      <span class="down" aria-hidden="true">↓</span>
      <h3>Assignment map</h3>
      <img :src="asset('assignment-map.png')" alt="Assignment map identifies reading locations and how decisions form four-bit blocks" />
    </div>
    <div v-click="4" class="fine" :class="{ dim: $clicks > 4 && $clicks < 5 }">
      <div class="selected">Selected edits</div>
      <div class="edit-arrow" aria-hidden="true">⟶</div>
      <div class="process">Fine-tuning</div>
    </div>
    <div v-click="5" class="embedded">
      <span class="out-arrow" aria-hidden="true">⟶</span>
      <h3>Embedded<br />parameters</h3>
      <img :src="asset('embedded-parameters.png')" alt="Gaussian parameters after message embedding" />
    </div>
    <p v-click="1" class="caption accent" aria-live="polite">{{ caption }}</p>
  </div>
</template>

<style scoped>
.s08 h3 { margin:0 0 12px; text-align:center; font-size:27px; line-height:1.15; }
.clean { position:absolute; left:10px; top:12px; width:220px; }
.clean img { width:210px; height:205px; object-fit:contain; background:white; }
.message { margin-top:22px; padding:11px 7px; background:#1c2939; font-size:21px; font-weight:700; text-align:center; white-space:nowrap; }
.assignment { position:absolute; left:325px; top:125px; width:235px; }
.process { background:#1c2939; border:1px solid #3e516a; padding:23px 14px; text-align:center; font-size:31px; font-weight:700; line-height:1.25; }
.input-arrows { position:absolute; width:95px; height:195px; left:-96px; top:-3px; overflow:visible; }
.map { position:absolute; left:330px; top:253px; width:225px; text-align:center; }
.map .down { display:block; height:40px; margin-top:-5px; font-size:42px; color:#91c5ff; line-height:.9; }
.map h3 { margin:1px 0 8px; font-size:25px; }
.map img { width:90px; height:127px; object-fit:contain; background:white; }
.fine { position:absolute; left:805px; top:125px; width:210px; }
.selected { position:absolute; left:-232px; top:1px; width:225px; text-align:center; font-size:25px; font-weight:700; }
.edit-arrow { position:absolute; left:-236px; top:30px; width:235px; color:#91c5ff; font-size:64px; line-height:1; text-align:center; }
.fine .process { padding:38px 10px; font-size:29px; }
.embedded { position:absolute; left:1060px; top:32px; width:130px; }
.embedded h3 { margin-bottom:18px; font-size:25px; }
.embedded img { width:130px; height:184px; object-fit:contain; background:white; }
.out-arrow { position:absolute; left:-48px; top:106px; font-size:44px; color:#91c5ff; line-height:1; }
.caption { position:absolute; left:0; right:0; bottom:0; margin:0; height:54px; display:flex; align-items:center; justify-content:center; text-align:center; font-weight:700; font-size:27px; line-height:1.2; }
</style>
