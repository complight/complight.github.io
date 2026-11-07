<script setup lang="ts">
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
const authors = [
  { name: 'Tong Wu', image: 'author-tong-wu.png' },
  { name: 'Runze Cheng', image: 'author-runze-cheng.png' },
  { name: 'Xiaoyue Fan', image: 'author-xiaoyue-fan.png' },
  { name: 'Kaan Akşit', image: 'author-kaan-aksit.png' },
]
</script>

<template>
  <div v-click="1" class="content closing-content">
    <p class="resources">Paper / Supplementary material / Code / Slides</p>
    <div class="closing-layout">
      <div>
        <div class="author-row">
          <figure v-for="author in authors" :key="author.name">
            <img :src="asset(author.image)" :alt="author.name" />
            <figcaption>{{ author.name }}</figcaption>
          </figure>
        </div>
        <section class="citation">
          <h3 class="accent">Citation</h3>
          <p>Tong Wu, Runze Cheng, Xiaoyue Fan, and Kaan Akşit.<br />
            Gaussian Image Steganography via Parameter-Domain Keyed Embeddings.<br />
            SIGGRAPH Asia 2026 Technical Communications (2026).<br />
            Association for Computing Machinery.<br />
            <a href="https://doi.org/10.1145/3829339.3847833" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3829339.3847833</a>
          </p>
        </section>
      </div>
      <a class="project-link" href="https://complightlab.com/publications/gaussian_steganography/" target="_blank" rel="noopener noreferrer" aria-label="Open the Gaussian Image Steganography project page">
        <img :src="asset('project-qr-code.png')" alt="QR code linking to the project page" />
        <strong>PROJECT PAGE</strong>
      </a>
    </div>
    <p class="contact"><strong>Tong Wu</strong><a href="mailto:24012920@mail.ecust.edu.cn">24012920@mail.ecust.edu.cn</a></p>
    <div class="affiliations" aria-label="Author affiliations">
      <img :src="asset('ecust-wordmark.png')" alt="East China University of Science and Technology" />
      <img :src="asset('cambridge-wordmark.png')" alt="University of Cambridge" />
      <img :src="asset('ucl-wordmark.png')" alt="University College London" />
      <img :src="asset('complight-wordmark.png')" alt="Computational Light Laboratory" />
    </div>
  </div>
</template>

<style scoped>
.closing-content { display: flex; flex-direction: column; gap: 15px; }
.resources { margin: 0; font-size: 25px; line-height: 1.2; }
.closing-layout { display: grid; grid-template-columns: 840px 1fr; gap: 46px; align-items: center; }
.author-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 13px; }
.author-row figure { text-align: center; margin: 0; }
.author-row img { display: block; width: 88px; height: 88px; object-fit: contain; border-radius: 50%; margin: 0 auto 10px; }
.author-row figcaption { font-size: 22px; font-weight: 700; }
.citation h3 { font-size: 23px; margin: 0 0 7px; }
.citation p { font-size: 21px; line-height: 1.3; margin: 0; }
.citation a { color: inherit; text-decoration: none; }
.citation a:hover { text-decoration: underline; }
.project-link { display: flex; flex-direction: column; align-items: center; gap: 15px; color: #b3bdca; text-decoration: none; }
.project-link img { width: 253px; height: 253px; object-fit: contain; }
.project-link strong { font-size: 22px; }
.contact { display: flex; gap: 22px; margin: 0; align-items: baseline; font-size: 23px; }
.contact strong { font-size: 25px; }
.contact a { color: #91c5ff; text-decoration: underline; }
.affiliations { display: flex; align-items: center; justify-content: space-around; gap: 22px; background: white; height: 65px; padding: 9px 20px; width: 1000px; }
.affiliations img { display: block; height: 46px; width: auto; object-fit: contain; max-width: 270px; }
.affiliations img:nth-child(1) { max-width: 310px; }
.affiliations img:nth-child(3) { max-width: 150px; }
.affiliations img:nth-child(4) { max-width: 180px; }
</style>
