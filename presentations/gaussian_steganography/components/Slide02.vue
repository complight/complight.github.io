<script setup lang="ts">
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="content intro-content">
    <p class="definition">Steganography hides a message in a carrier while aiming to conceal its presence.</p>
    <div class="intro-diagram">
      <div v-click="1" class="cover"><h3>Cover image</h3><img :src="base + 'assets/poppy-cover.jpeg'" alt="Orange poppy used as the cover image"></div>
      <div v-click="2" class="message"><div class="bits">1011 0010</div><p>Message</p><span class="vertical-arrow">↑</span></div>
      <div v-click="3" class="embedding"><span class="line-arrow" aria-hidden="true"></span><span class="embed-label">Embed</span><span class="line-arrow" aria-hidden="true"></span></div>
      <div v-click="3" class="stego"><h3>Stego image</h3><img :src="base + 'assets/poppy-cover.jpeg'" alt="Conceptual stego image with similar appearance"></div>
      <div v-click="4" class="similar"><span>⟵</span><p>Similar appearance</p><span>⟶</span></div>
      <div v-click="5" class="recovered"><span class="vertical-arrow">↓</span><p>Extract</p><span class="vertical-arrow small-arrow">↓</span><p class="recovered-title">Recovered message</p><div class="bits">1011 0010</div></div>
    </div>
    <p v-click="6" class="uses">Uses: covert communication, watermarking, and hidden identifiers.</p>
  </div>
</template>

<style scoped>
.intro-content{font-size:25px}.definition{margin:0;line-height:1.35}
.intro-diagram{position:relative;height:390px;margin-top:30px}
.cover,.stego{position:absolute;top:0;width:220px;text-align:center}.cover{left:60px}.stego{right:60px}
.cover h3,.stego h3{font-size:30px;font-weight:600;margin:0 0 15px}
.cover img,.stego img{width:220px;height:220px;object-fit:cover}
.embedding{position:absolute;left:294px;right:294px;top:127px;display:grid;grid-template-columns:1fr 150px 1fr;gap:18px;align-items:center}
.embed-label{display:inline-block;border:1.5px solid #91c5ff;padding:10px 25px;font-size:30px}
.line-arrow{display:block;position:relative;height:3px;background:#91c5ff}
.line-arrow::after{content:'';position:absolute;right:-1px;top:-5px;border-left:10px solid #91c5ff;border-top:6px solid transparent;border-bottom:6px solid transparent}
.message{position:absolute;top:246px;left:calc(50% - 130px);width:260px;text-align:center}.message p{margin:7px 0 0;font-size:24px}
.bits{border:1px solid #91e5b2;color:#91e5b2;font-family:monospace;font-size:32px;letter-spacing:1px;text-align:center;padding:3px 18px}
.vertical-arrow{font-size:39px;color:#91c5ff;display:block;line-height:1}
.message .vertical-arrow{position:absolute;top:-48px;left:111px}
.similar{position:absolute;top:42px;left:310px;width:565px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.similar p{font-size:24px;color:#b3bdca;white-space:nowrap;margin:0}.similar span{font-size:39px;color:#91c5ff}
.recovered{position:absolute;top:260px;right:44px;width:254px;text-align:center}.recovered p{margin:0;font-size:25px}.recovered-title{font-size:22px!important;margin:2px 0 6px!important}
.small-arrow{font-size:26px}.recovered .bits{font-size:27px}
.uses{position:absolute;left:0;bottom:0;font-size:24px;font-weight:700;max-width:810px;line-height:1.3}
</style>
