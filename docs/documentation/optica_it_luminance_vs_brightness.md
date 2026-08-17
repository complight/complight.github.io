# Luminance vs. Brightness: Understanding the Difference

_Written by [**Kai-Han Chang**](https://scholar.google.com/citations?user=qaKcyrYAAAAJ&hl=en), [**Andrzej Kaczorowski**](https://www.drandrzejka.com/), [**Yuge (Esther) Huang**](https://www.linkedin.com/in/yuge-esther-huang-730740124/) and [**Kaan Akşit**](https://kaanaksit.com), 17 August 2026_


## Introduction

_Luminance vs. Brightness: Understanding the Difference_ is a technical note produced by the Computational Light Laboratory's outreach team to help engineers, researchers, and display technology developers understand the distinction between two closely related photometric and psychophysical quantities.
While often used interchangeably, "luminance" and "brightness" describe two different concepts in display technology [@optica1971_luminance_brightness].

Luminance is a measurable physical quantity defined by the amount of light emitted from a surface in a given direction, scaled by the human eye's color-matching function to account for human color perception.

Brightness, conversely, is a subjective experience and not a measurable physical quantity. It depends on the individual viewer and their surroundings [@optica1971_luminance_brightness]. To bridge this gap, displays use "gamma curves", mathematical mappings based on a power law. Gamma curves ensure that digital pixel levels (e.g., 0–255 in an 8-bit system) translate into luminance changes that the human eye perceives as a linear increase in brightness.


## The Role of Environment
A display's specification for luminance is typically determined by its intended environment:

- **Desktop Monitors:** Typically 300–400 cd/m² for indoor use.
- **Smartphones:** Often 800–1,200 cd/m² to ensure readability in outdoor viewing conditions.
- **Digital Cinema:** Standardized at approximately 48 cd/m² [@konicaminolta_cinema_luminance @smpte_st_431_1_2006].
The subjectivity of brightness is most evident when comparing these figures to the ambient environment. For example, a sunny concrete road can reach 5,000 cd/m², while some indoor environments have been reported as low as 21 cd/m² [@huang2026_environment_to_bits]. Although cinema screens are relatively low in absolute luminance, they are perceived as vivid and bright due to the darkness of the theater environment.


## The Limit of Comfort
Higher luminance is not always preferable. Research conducted in home environments indicates that excessive on-screen luminance can lead to visual discomfort [@smpte2019_visual_discomfort]. Specifically, viewers have rated transitions to average on-screen luminance levels as low as 35 cd/m² as "slightly annoying" and 75 cd/m² as "annoying" [@smpte2019_visual_discomfort].

## Summary
Luminance is the objective measurement while brightness is the subjective experience. The ideal luminance for any display is inextricably linked to its specific application and the ambient light of its environment.




