# Gaussian Image Steganography presentation

Native Slidev source for the 16-slide SIGGRAPH Asia 2026 Technical Communications presentation, **Gaussian Image Steganography via Parameter-Domain Keyed Embeddings**.

Text, tables, charts, and process diagrams use HTML and Vue components. Individual figures, photographs, author portraits, logos, and the fitting clip are in `public/assets/`. The presentation contains no whole-slide screenshots, Microsoft Office files, or speaker scripts.

## Local development

Use Node.js 24. From the repository root:

```sh
cd presentations/gaussian_steganography
npm ci
npm run dev
```

The development server uses port 4391. Space or the right arrow reveals the next step, then advances to the next slide. The left arrow steps back. Click counts by slide are `0, 6, 3, 3, 5, 3, 4, 5, 4, 5, 3, 6, 4, 4, 4, 1`.

Slide 2 uses a click-controlled introduction. Slide 6 plays the fitting illustration on click 1 and pauses at its final frame when the clean fit is discussed. Stepping back to click 1 replays the clip.

## Website build

From this directory:

```sh
npm run build
```

The build generates `docs/slides/gaussian_steganography/` in the website repository, using `/slides/gaussian_steganography/` as its public base path. This generated directory is excluded from version control. The website workflow builds Slidev before MkDocs, which copies the generated presentation into the final site. The publication page embeds the presentation at `/slides/gaussian_steganography/#/1`.

To preview just the generated presentation:

```sh
npm run preview
```

For the full website preview, build the presentation first, then run `mkdocs serve` from the repository root.

## PDF export

```sh
npm run export
```

This exports `public/TC147_slides.pdf` directly from Slidev. Chromium must be installed for the exporter. Run `npx playwright install chromium` if needed, or pass `--executable-path` to an installed Chromium-based browser. The PDF contains one complete page per slide, with focus dimming removed and a still image in place of the video. Rebuild the presentation after updating the PDF so the website receives the new file.

## Sources

The content and numerical results follow the [paper and supplementary material](https://complightlab.com/publications/gaussian_steganography/). Original method diagrams and evaluation examples are reused as individual assets. Visual-comparison source photographs are by Christian Widell and Christian J. Leuner. Related-work examples are attributed on Slide 3. Author portraits, institutional logos, and the project QR code come from the reviewed presentation materials.

The fitting clip is a teaching illustration of parameter updates toward a target image, separate from the reported 256- and 4,096-Gaussian evaluations.
