<script setup lang="ts">
const base = import.meta.env.BASE_URL
const project = 'https://complightlab.com/publications/gaussian_steganography/'
</script>

<template>
  <section class="title-page">
    <p class="venue">SIGGRAPH ASIA 2026 / TECHNICAL COMMUNICATIONS</p>
    <p class="page">01 / 16</p>
    <div class="rule"></div>
    <h1>Gaussian Image Steganography</h1>
    <h2>via Parameter-Domain Keyed Embeddings</h2>
    <p class="tagline">“Hide information in Gaussian parameters — not pixels”</p>
    <p class="authors">Tong Wu<sup>1</sup> · Runze Cheng<sup>2,3</sup> · Xiaoyue Fan<sup>3</sup> · Kaan Akşit<sup>3</sup></p>
    <p class="affiliations"><sup>1</sup> East China University of Science and Technology<br><sup>2</sup> University of Cambridge &nbsp; <sup>3</sup> University College London</p>
    <p class="date">1–4 December 2026</p>
    <div class="logos" aria-label="Affiliated institutions">
      <div class="ecust"><img :src="base + 'assets/logo-ecust-mark.png'" alt="ECUST emblem"><img :src="base + 'assets/logo-ecust-name.png'" alt="East China University of Science and Technology"></div>
      <img class="cambridge" :src="base + 'assets/logo-cambridge.png'" alt="University of Cambridge">
      <img class="ucl" :src="base + 'assets/logo-ucl.png'" alt="University College London">
      <img class="lab" :src="base + 'assets/logo-lab.png'" alt="Computational Light Laboratory">
    </div>
    <a class="qr" :href="project" target="_blank" rel="noopener noreferrer"><img :src="base + 'assets/project-qr.png'" alt="QR code linking to the project page"><span>PROJECT PAGE</span></a>
  </section>
</template>

<style scoped>
.title-page{position:absolute;inset:0;padding:38px 60px;color:#f5f7fb;background:#0b1018}
.venue{font-size:18px;font-weight:700;color:#b3bdca;margin:0}
.page{position:absolute;right:55px;top:28px;font-size:28px;font-weight:700;margin:0}
.rule{width:78px;height:4px;background:#91c5ff;margin-top:25px}
h1{font-size:53px;line-height:1.1;letter-spacing:-1.5px;margin:30px 0 20px;font-weight:750}
h2{font-size:43px;line-height:1.13;letter-spacing:-1px;margin:0;font-weight:700}
.tagline{font-size:28px;color:#b3bdca;font-style:italic;margin:30px 0 42px}
.authors{font-size:27px;font-weight:700;margin:0 0 12px}
sup{font-size:.58em;vertical-align:super}
.affiliations{font-size:23px;line-height:1.5;color:#b3bdca;margin:0}
.date{font-size:26px;margin:18px 0}
.logos{position:absolute;left:60px;bottom:45px;width:985px;height:84px;display:flex;align-items:center;gap:24px;background:white;padding:13px 16px}
.logos img{object-fit:contain;max-height:55px}.ecust{display:flex;gap:7px;align-items:center;width:315px}.ecust img:first-child{width:57px}.ecust img:last-child{width:248px}
.cambridge{width:238px}.ucl{width:134px}.lab{width:170px}
.qr{position:absolute;bottom:18px;right:49px;width:154px;color:#b3bdca;text-decoration:none;text-align:center;font-size:13px;font-weight:700}
.qr img{width:154px;height:154px;display:block;margin-bottom:7px}
</style>
