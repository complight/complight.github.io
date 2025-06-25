# SpecTrack: Learned Multi-Rotation Tracking via Speckle Imaging

## People
<table class=""  style="margin: 10px auto;">
  <tbody>
    <tr>
      <td> <img src="../../people/zicong_peng.png" width="120" alt=/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td> <img src="../../people/yicheng_zhan.png" width="120" alt=/> &nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td> <img src="../../people/josef_spjut.png" width="120" alt=/> &nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td> <img src="../../people/kaan_aksit.png" width="120" alt=/> &nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr> 
    <tr>
      <td><p style="text-align:center;"><a href="https://scholar.google.com/citations?user=lpi8DvIAAAAJ&hl=zh-CN">Zicong Peng</a><sup>1</sup></p></td>
      <td><p style="text-align:center;"><a href="https://scholar.google.com/citations?hl=zh-CN&user=x2ptSYUAAAAJ">Yicheng Zhan</a><sup>1</sup></p></td>
      <td><p style="text-align:center;"><a href="https://josef.spjut.me/">Josef Spjut</a><sup>2</sup></p></td>
      <td><p style="text-align:center;"><a href="https://kaanaksit.com">Kaan Akşit</a><sup>1</sup></p></td>
    </tr>
  </tbody>
</table>
<p style="text-align:center;">
<sup>1</sup>University College London,
<sup>2</sup>NVIDIA
</p>
<p style="text-align:center;"><b>SIGGRAPH Asia 2025 Poster</b></p>
<!-- &nbsp;<p style="text-align:center;">:material-medal:<b>Honorable Mention Award</b></p> -->


## Resources
:material-newspaper-variant: [Manuscript](https://github.com/Dasheng6666/final_project_files/blob/main/manuscript.pdf)
:material-newspaper-variant: [Poster](https://github.com/Dasheng6666/final_project_files/blob/main/goodgoodposter.pdf)
:material-newspaper-variant: [Supplementary](https://github.com/Dasheng6666/final_project_files/blob/main/supplementary.pdf)
:material-file-code: [Code](https://github.com/Dasheng6666/final_project_files/blob/main/INR.ipynb)
??? info ":material-tag-text: Bibtex"
        @inproceedings{chen2024spectrack,
          author = {Zicong Peng and Yichen Zhan and Josef Spjut and Kaan Ak{\c{s}}it},
          title = {Assessing Learned Models for Phase-only Hologram Compression},
          booktitle = {SIGGRAPH 2025 Posters (SA Posters '25)},
          year = {2025},
          location = {Vancouver, BC, Canada},
          publisher = {ACM},
          address = {New York, NY, USA},
          pages = {2},
          doi = {10.1145/3721250.3742993},
          url = {https://doi.org/10.1145/3721250.3742993},
          month = {August 10--14}
        }



## Video
<video controls>
<source src="https://kaanaksit.com/assets/video/ChenSigAsia2024SpecTrack.mp4" id="“ type="video/mp4">
</video>

## Abstract
<figure markdown>
  ![Image title](media/hologram_compression_teaser.png){ width="500" }
</figure>
We evaluate the performance of four common learned models utilizing INR and VAE structures for compressing phase-only holograms in holographic displays. The evaluated models include a vanilla <span style="color: rgb(216, 27, 96)">MLP</span>, <span style="color: rgb(30, 136, 229)">SIREN</span>, and <span style="color: rgb(255, 193, 7)">FilmSIREN</span>, with <span style="color: rgb(0, 77, 64)">TAESD</span> as the representative VAE model. Our experiments reveal that a pretrained image VAE, <span style="color: rgb(0, 77, 64)">TAESD</span>, with 2.2M parameters struggles with phase-only hologram compression, revealing the need for task-specific adaptations. Among the INR s, <span style="color: rgb(30, 136, 229)">SIREN</span> with 4.9k parameters achieves $40\%$ 
compression with high quality in the reconstructed 3D images (PSNR = 34.54 dB). These results emphasize the effectiveness of INR s and identify the limitations of pretrained image compression VAE s for hologram compression task.

## Proposed Method
Our assessments involve using single-color double-phase encoded phase-only holograms, $P \in \mathbb{R}^{3 \times 512 \times 512}$, using three color primaries.
These $P$s are calculated for three wavelengths, $\text{wavelengths} = \{473, 515, 639\}\,\text{nm}$ and a fixed pixel pitch, $\text{pixelpitch} = 3.74\,\mu\text{m}$ (Jasper Display JD7714).
We adopt an off-the-shelf <span style="color: rgb(0, 77, 64)">TAESD</span> trained for image compression task.
Specifically, the <span style="color: rgb(0, 77, 64)">TAESD</span> with $2.2M$ parameters encodes $P$ to a $\text{bottleneck} \in \mathbb{R}^{16 \times 64 \times 64}$ and later decodes into the original resolution of $3 \times 512 \times 512$.
\refFig{teaser} shows pretrained <span style="color: rgb(0, 77, 64)">TAESD</span> fails, requiring dedicated training for generalization.
Feature size comparison yields only 92\% reduction (excluding <span style="color: rgb(0, 77, 64)">TAESD</span> params).
Thus, we choose to explore \INR based models to see if the feature size could be further reduced while accepting longer training times as \INR{}s typically are overfitted on a single data at a time.
<figure markdown>
  ![Image title](media/hologram_compression_represent_image.jpg){ width="500" }
</figure>
In our study, we compare three foundational INR architectures (<span style="color: rgb(216, 27, 96)">vanillaMLP</span>, <span style="color: rgb(30, 136, 229)">SIREN</span>, and <span style="color: rgb(255, 193, 7)">FilmSIREN</span>), aiming for $\sim \%40$ feature reduction
as the starting point of the experiment, and the aim is to strike a balance between the quality of the reconstructed image and the compression ratio. 
$P$s are split into patches (e.g., $3 \times 64 \times 64$), a separate model is trained for each patch (initialized from prior weights), and their outputs are combined for full reconstruction.
Experiments that we are going to detail in the next section utilize ten different holograms (The purpose of selecting a small but diverse set of initial samples in this study is to demonstrate the comparative trends among different methods. The large-scale validation work will be addressed in the subsequent research.) and turns them into patches by following the choices listed in table.
All \INR{}s use Adam (lr=0.0001) with StepLR (gamma=0.5 every 5000 epochs), trained for 5000 epochs.


## Conclusions
### Baseline
<figure markdown>
  ![Image title](media/hologram_compression_table.png){ width="500" }
</figure>
<span style="color: rgb(30, 136, 229)">SIREN</span> and <span style="color: rgb(255, 193, 7)">FilmSIREN</span> provide strong compression, outperforming \vanillaMLP, with <span style="color: rgb(30, 136, 229)">SIREN</span> showing best consistency.
In our current experiments in table below, <span style="color: rgb(30, 136, 229)">SIREN</span> achieves the highest fidelity with a PSNR of 47.09 and SSIM of 0.9999 at $96 \times 96 \times 3$ patch size, 
while its 3D reconstruction quality (PSNR = 35.74, SSIM = 0.96, LPIPS = 0.08) marginally outperforms <span style="color: rgb(255, 193, 7)">FilmSIREN</span> (PSNR = 34.51, SSIM = 0.96, LPIPS = 0.09). 
Additionally, under identical training schedules, both <span style="color: rgb(30, 136, 229)">SIREN</span> and <span style="color: rgb(255, 193, 7)">FilmSIREN</span> frequently satisfied the early stopping criterion near 2000 epochs. 
This consistency implies a relatively smooth optimization process, suggesting that these models can converge effectively without compromising image quality, 
which is a favorable property in hologram compression task.
Computational cost ($T$ hours/hologram) is justified by <span style="color: rgb(30, 136, 229)">SIREN</span>'s quality.
These observations suggest that specialized \INR architectures require further investigation for the hologram compression task, 
potentially opening new solutions for efficient 3D scene representation in holographic displays.
Achieving robust compression remains an open challenge; our study guides future work on efficient 3D holographic rendering/storage.


<!-- ### Future work 
Testing and optimizing the system in real-world environments, considering varying lighting, distances, and object motions, is crucial for successful operation in various applications including VR, AR, and robotics. -->

## Relevant research works
Here are relevant research works from the authors:


- [Optimizing Vision and Visuals: Lectures on Cameras, Displays, and Perception](../teaching/siggraph2022_optimizing_vision_and_visuals.md)
- [Unrolled Primal-Dual Networks for Lensless Camera](https://github.com/complight/unrolled_primal_dual_networks)
- [Odak](https://github.com/kaanaksit/odak)


<!-- ## External Other Links
Here are links related to our project such as videos, articles or podcasts:

- [ACM SIGGRAPH Asia 2023, Technical Papers Fast Forward (Preview the presentations on 13 Dec, Day 2)](https://youtu.be/dMsD_xXOEKA?feature=shared&t=332) -->


## Outreach
We host a Slack group with more than 250 members.
This Slack group focuses on the topics of rendering, perception, displays and cameras.
The group is open to public and you can become a member by following [this link](../outreach/index.md).

## Contact Us
!!! Warning
    Please reach us through [email](mailto:kaanaksit@kaanaksit.com) to provide your feedback and comments.

<!-- ## Acknowledgements -->

<!-- <div style="float: left; height:200px;" class="boxed">
<img align='left' src="../../media/royal_society.png" width="100" alt/>
<img align='left' src="../../media/meta_reality_labs.png" width="100" alt/>
</div>
Kaan Akşit is supported by the Royal Society's RGS\R2\212229 - Research Grants 2021 Round 2 in building the hardware prototype. Kaan Akşit is also supported by Meta Reality Labs inclusive rendering initiative 2022. Liang Shi is supported by Meta Research PhD fellowship (2021-2023).
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<div style="float: left; height:200px;" class="boxed">
<img align='left' src="../../media/eu_horizon2020.png" width="100" alt/>
<img align='left' src="../../media/tubitak.png" width="100" alt/>
</div>
Hakan Urey is supported by the European Innovation Council’s HORIZON-EIC-2021-TRANSITION-CHALLENGES program Grant Number 101057672 and Tübitak’s 2247-A National Lead Researchers Program, Project Number 120C145.
<br />
<br />
<br />
<br />
<br />
<br />
<br /> -->


