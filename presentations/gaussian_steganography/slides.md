---
theme: default
title: Gaussian Image Steganography via Parameter-Domain Keyed Embeddings
info: SIGGRAPH Asia 2026 Technical Communications
author: Tong Wu, Runze Cheng, Xiaoyue Fan, Kaan Akşit
canvasWidth: 1280
aspectRatio: 16/9
colorSchema: dark
transition: none
drawings:
  enabled: false
fonts:
  provider: none
  sans: Arial, Helvetica
download: ./TC147_slides.pdf
exportFilename: TC147_slides
htmlAttrs:
  lang: en
lineNumbers: false
layout: none
clicks: 0
---

<Slide01 />

---
layout: none
title: "What is steganography?"
clicks: 6
---

<DeckFrame title="What is steganography?" section="INTRODUCTION" :page="2">
  <Slide02 />
</DeckFrame>

---
layout: none
title: "Where can hidden information live?"
clicks: 3
---

<DeckFrame title="Where can hidden information live?" section="RELATED WORK" :page="3" source="HiDDeN, ECCV 2018 · RoSteALS, CVPRW 2023 · GaussianMarker, NeurIPS 2024 · 3D-GSW, CVPR 2025.">
  <Slide03 />
</DeckFrame>

---
layout: none
title: "One image represented by 2D Gaussian parameters"
clicks: 3
---

<DeckFrame title="One image represented by 2D Gaussian parameters" section="OUR SETTING" :page="4">
  <Slide04 />
</DeckFrame>

---
layout: none
title: "An image can be represented by 2D Gaussians"
clicks: 5
---

<DeckFrame title="An image can be represented by 2D Gaussians" section="GAUSSIAN REPRESENTATION" :page="5" source="GaussianImage, ECCV 2024; Kerbl et al., SIGGRAPH 2023.">
  <Slide05 />
</DeckFrame>

---
layout: none
title: "Fitting Gaussians to the target image"
clicks: 3
---

<DeckFrame title="Fitting Gaussians to the target image" section="GAUSSIAN REPRESENTATION" :page="6">
  <Slide06 />
</DeckFrame>

---
layout: none
title: "Which parameter changes should carry the message?"
clicks: 4
---

<DeckFrame title="Which parameter changes should carry the message?" section="THE CHALLENGE" :page="7">
  <Slide07 />
</DeckFrame>

---
layout: none
title: "Choose the edits, then optimize the parameters"
clicks: 5
---

<DeckFrame title="Choose the edits, then optimize the parameters" section="METHOD OVERVIEW" :page="8" source="Wu et al., SIGGRAPH Asia 2026 Technical Communications, Figure 1.">
  <Slide08 />
</DeckFrame>

---
layout: none
title: "Three parameters we can change"
clicks: 4
---

<DeckFrame title="Three parameters we can change" section="CANDIDATE EDITS" :page="9">
  <Slide09 />
</DeckFrame>

---
layout: none
title: "Choose valid edits with lower cost"
clicks: 5
---

<DeckFrame title="Choose valid edits with lower cost" section="KEYED ASSIGNMENT" :page="10">
  <Slide10 />
</DeckFrame>

---
layout: none
title: "Fine-tuning refines the selected parameter edits"
clicks: 3
---

<DeckFrame title="Fine-tuning refines the selected parameter edits" section="FINE-TUNING" :page="11" source="Wu et al., Figure 1. The full objective also includes key-specificity and auxiliary robustness terms.">
  <Slide11 />
</DeckFrame>

---
layout: none
title: "Read the message from parameter changes"
clicks: 6
---

<DeckFrame title="Read the message from parameter changes" section="DECODING" :page="12">
  <Slide12 />
</DeckFrame>

---
layout: none
title: "The clean and embedded images look similar"
clicks: 4
---

<DeckFrame title="The clean and embedded images look similar" section="VISUAL QUALITY" :page="13" source="Wu et al., Figure 2. Source photos: Christian Widell and Christian J. Leuner.">
  <Slide13 />
</DeckFrame>

---
layout: none
title: "Cost-aware selection improves recovery over random selection"
clicks: 4
---

<DeckFrame title="Cost-aware selection improves recovery over random selection" section="CONTROLLED EVALUATION" :page="14">
  <Slide14 />
</DeckFrame>

---
layout: none
title: "The fixed message is recovered from all 112 test images"
clicks: 4
---

<DeckFrame title="The fixed message is recovered from all 112 test images" section="HELD-OUT EVALUATION" :page="15">
  <Slide15 />
</DeckFrame>

---
layout: none
title: "Thank you"
clicks: 1
---

<DeckFrame title="Thank you" section="GAUSSIAN IMAGE STEGANOGRAPHY" :page="16">
  <Slide16 />
</DeckFrame>
