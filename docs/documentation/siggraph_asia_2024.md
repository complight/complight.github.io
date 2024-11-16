# Computational Light Laboratory contributes to ACM SIGGRAPH Asia 2024 with innovative computational display and lensless camera research

_Written by [**Kaan Akşit**](https://kaanaksit.com), 15 November 2024_

<figure markdown>
  ![Image title](../media/acm_siggraph_asia_2024.png){ width="300" }
</figure>

[**ACM SIGGRAPH Asia 2024**](https://asia.siggraph.org/2024/) continues to serve as one of the leading venues in computer graphics and interactive techniques related research.
This year, the conference is taking place between 3rd and 6th of December in Tokyo, Japan.
We, members of [**Computational Light Laboratory (CLL)**](https://complightlab.com), are contributing to [**ACM SIGGRAPH Asia 2024**](https://asia.siggraph.org/2024/) with our cutting edge research.
Our work continues to deliver innovations in emerging fields including computational displays and lensless cameras.
This document describes our activities and provides a brief introduction to our work presented at [**ACM SIGGRAPH Asia 2024**](https://asia.siggraph.org/2024/).

## Propagating light to arbitrary shaped surfaces

!!! example end "[**Focal Surface Holographic Light Transport using Learned Spatially Adaptive Convolutions**](../../publications/focal_surface_light_transport)"
    **Presented by:** [**Chuanjun Zheng**](https://scholar.google.com.hk/citations?user=9Jk_LC8AAAAJ&) and [**Yicheng Zhan**](https://asia.siggraph.org/2024/presenter/?uid=49032604224391258001)

    **Location:** G510, G Block, Level 5, Tokyo International Forum, Tokyo, Japan

    **Time:** 11:27 am and 11:40 am JST, Wednesday 4 December 2024

    **Session:** [**Mixed Reality & Holography**](https://asia.siggraph.org/2024/presentation/?id=tcom_122&sess=sess282)

Classical computer graphics work with rays to render 3D scenes, largely avoiding wave characteristics of light.
In the recent years, treating light as waves in rendering pipelines has gained a strong attention with increasing interest in holographic displays and improving physical realism in computer graphics.

<figure markdown>
  ![Image title](../publications/media/focal_surfaec_lightprop_proposed_vs_conv.png){ width="700" }
  <figcaption>Our wave-based rendering method unlocks light simulation from a plane to a focal surface.</figcaption>
</figure>

[**Chuanjun Zheng**](https://scholar.google.com.hk/citations?user=9Jk_LC8AAAAJ&) has spearheaded a new wave-based rendering method for rendering light beams emerging from a plane landing on arbitrary shaped surfaces.
Previous literature on wave-based rendering typically rely on planes to propagate light in 3D, which would require multiple computational steps as it would slice a 3D scene into many planes.

<figure markdown>
  ![Image title](../publications/media/focal_surface_depth_plane.gif){ width="680" }
  <figcaption>Performance of our method in plane-to-plane simulation.</figcaption>
</figure>

Our work enables a new way to overcome this computational complexity arising from plane to plane treatment, and unlocks a new rendering method that could propagate light beams from a plane to a focal surface.
This new model could help reduce computational complexity in simulating light.
Specifically, it could help verify and calculate holograms for holographic displays with much ease and lesser computation.

<figure markdown>
  ![Image title](../publications/media/focal_surface.gif){ width="700" }
  <figcaption>Our wave-based rendering method unlocks light simulation from a plane to a focal surface.</figcaption>
</figure>

[**Chuanjun Zheng**](https://scholar.google.com.hk/citations?user=9Jk_LC8AAAAJ&) has conducted this major effort as our remote intern, showing an examplery scientific rigor and motivation.
The work is also conducted in collaboration with various partners from industry and academia, including [**Yicheng Zhan (UCL)**](https://scholar.google.com/citations?user=xZLjeAMAAAAJ&hl=en), [**Liang Shi (MIT)**](https://people.csail.mit.edu/liangs/), [**Ozan Cakmakci (Google)**](https://scholar.google.com/citations?user=xZLjeAMAAAAJ&hl=en) and [**Kaan Akşit (UCL)**](https://kaanaksit.com).
For more technical details including manuscript, supplementary materials, examples and codebase please visit the [**project website**](../../publications/focal_surface_light_transport).

## Precisely detecting orientation of objects remotely in micron scale

!!! example end "[**SpecTrack: Learned Multi-Rotation Tracking via Speckle Imaging**](../../publications/spec_track)"
    **Presented by:** [**Ziyang Chen**](https://ziyang.space/)

    **Location:** Lobby Gallery (1) & (2), G Block, Level B1, Tokyo International Forum, Tokyo, Japan

    **Time:** 09:00 am and 06:00 pm JST, Tuesday, 3 December 2024

    **Session:** [**Poster**](https://asia.siggraph.org/2024/presentation/?id=pos_131&sess=sess195)

Tracking objects and people using cameras is a commonplace in computer vision and interactive techniques related research.
The accuracy in terms of identifying spatial location of objects are limited in vision-based methods.
The vision-based provides an accuracy around several centimeters.


<figure markdown>
  ![Image title](../publications/media/spec_track_different_attributes.png){ width="800" }
  <figcaption>Our speckle imaging technique precisely tracks orientation and location of objects with coded apertures in micron-scale.</figcaption>
</figure>

[**Ziyang Chen**](https://ziyang.space/) built a hardware setup that contains a lensless camera, a laser and a controllable stage to investigate on speckle imaging as an alternative to vision based systems in tracking of objects.
Previous literature demonstrated that speckle imaging could provide micron-scale tracking ability.
However, the literature was missing a technique to precisely detect orientation of objects in a 3D scene using speckle imaging.
Our work addressed this gap in the literature by proposing a learned method that could precisely detect the orientation of objects in a 3D scene using speckle imaging.
This innovative approach relies on our light-weight learned method and clever usage of coded apertures on objects.

<figure markdown>
  ![Image title](../publications/media/spec_track_tracking_demonstration.gif){ width="800" }
  <figcaption>A demonstration of our learned method on actual bench-top prototype.</figcaption>
</figure>

[**Ziyang Chen**](https://ziyang.space/), coming from computer science background, has swiftly adapted to the challenges in hardware research by building a bench-top optical setup in our laboratory space, and he managed to couple that with artificial intelligence through his learned model.
[**Ziyang Chen**](https://ziyang.space) conducted this research both as a part of his master thesis and his first year Ph.D. studies at UCL.
[**Ziyang Chen**](https://ziyang.space) collaborated with various industrial and academic researchers in this project, including [**Doğa Doğan (Adobe)**](https://www.dogadogan.com/), [**Josef Spjut (NVIDIA)**](https://josef.spjut.me/), and [**Kaan Akşit (UCL)**](https://kaanaksit.com).
For more technical details including manuscript, supplementary materials, examples and codebase please visit the [**project website**](../../publications/spec_track).


## Public outcomes
We release codebases at each project website for other researchers and developers to be able to replicate and compare their development with ours in the future.
These codebases use modern Python programming language libraries, and [**our toolkit, Odak**](https://github.com/kaanaksit/odak).
We have integrated our models to [**Odak**](https://github.com/kaanaksit/odak) as:

* [`odak.learn.wave.focal_surface_light_propagation`](https://kaanaksit.com/odak/odak/learn_wave/?h=focal_sur#odak.learn.wave.models.downsample_layer.forward),
* [`odak.learn.lensless.spec_track`](https://kaanaksit.com/odak/odak/learn_lensless/?h=spec_track#odak.learn.lensless.models.spec_track).

These model classes also have their unit tests avaible in:

* [`test/test_learn_wave_focal_surface_light_propagation.py`](https://github.com/kaanaksit/odak/blob/master/test/test_learn_wave_focal_surface_light_propagation.py),
* [`test/test_learn_lensless_models_spec_track.py`](https://github.com/kaanaksit/odak/blob/master/test/test_learn_lensless_models_spec_track.py).

These models are also shipped with the new version of `odak==0.2.6` and readily available to install using `pip install odak`.

## Photo gallery
Here, we release photographs from our visit to the conference, highlighting parts of our SIGGRAPH Asia experience.


## Outreach
We host a Slack group with more than 250 members.
This Slack group focuses on the topics of rendering, perception, displays and cameras.
The group is open to public and you can become a member by following [this link](../outreach/index.md).


## Contact Us
!!! Warning
    Please reach us through [email](mailto:kaanaksit@kaanaksit.com) to provide your feedback and comments.
