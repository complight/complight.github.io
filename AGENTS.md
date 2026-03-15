# AGENTS.md - Guidelines for AI Coding Agents

## Project Overview

This is the Computational Light Laboratory website, built with ** MkDocs** using the **Material for MkDocs** theme. The site documents research, publications teaching materials and technical documentation for UCL's Computational Light Lab.

## Key Technologies

- **Framework**: MkDocs with Material theme (`mkdocs-material`)
- **Plugins**: `mkdocs-glightbox`, `mkdocs-bibtex`, `mkdocs-redirects` `mkdocstrings`, `autorefs`
- **Content Format**: Markdown with MathJax support LaTeX equations, HTML/CSS for custom components
- **Deployment**: GitHub Actions to GitHub Pages

## Build, Test Commands

### Build and Serve Locally

```bash
# Install dependencies (if needed)
pip install mkdocs-material mkdocs-glightbox mkdocs-bibtex mkdocs-redirects mkdocstrings

# Start development server with hot-reload
mkdocs serve

# Build production site
mkdocs build

# Deploy to GitHub Pages (requires write access)
mkdocs gh-deploy --force
```

### Validation Commands

```bash
# Check MkDocs configuration validity
mkdocs build --strict

# Verify syntax of JavaScript files
node --check docs/javascripts/slideshow.js
node --check docs/javascripts/config.js
```

## Code Style Guidelines

### Markdown/HTML Content (`.md` files)

#### Structure
- Use **Multi-Tabbed Lists** and `???+ Question` for collapsible content sections
- Wrap complex HTML elements in `<body>` or container divs for proper rendering
- All image paths must be relative to the `docs/` directory
- Use `class="off-glb"` on images that should skip lightbox processing
- Center images with `text-align: center;` wrapper or `p.aligncenter`

#### Navigation Links
- Internal links: `'page-path/index.md'` or `'page-path/'` in mkdocs.yml nav
- External links: Full URL starting with `http://` or `https://`
- In markdown body: `[link text](relative/path/)` for internal URLs

#### Math & LaTeX
- Inline math: `\(` ... `\)` renders via MathJax
- Display math: `\`[` ... `\`]\`` in arithmatex enabled blocks
- No special wrapper needed for standard inline equations

### JavaScript (`docs/javascripts/`)

#### Style Conventions
- Use `function declare` for global functions and arrow functions inside closures
- Variable naming: camelCase (e.g., `currentSlide`, `numSlides` slidesContainer`)
- Event listeners use descriptive handler names: `handleNext()`, handlePrevious()`
- No semicolons at end of statements if following project convention (inconsistent)
- Use `const` for immutable references, `let` for counters and state

#### DOM Access Patterns
  
```javascript
// Preferred: querySelector with data attributes
const element = carousel.querySelector('[data-carousel-slides-container]');

// Iterate NodeList with forEach
carousels.forEach(setUpCarousel);
```

#### No External Dependencies
- Vanilla JavaScript only no frameworks or libraries beyond browser APIs
- Avoid `document$.subscribe()` except in MathJax integration (`config.js`)

### CSS/Stylesheets (`docs/stylesheets/`)

#### Variables and Theming
- Use CSS variables for theming: `--md-primary-fg-color`, `--current-slide`
- Dark/light theme support via `[data-md-color-scheme="scheme-name"]` selectors
- Primary theme color: `#a61600` (YouTube red variant)

#### Component Organization
- Prefix component classes: `.carousel-*`, `.md-grid`, slide*`
- Use BEM-like structure when extending components
- Media queries at bottom of file, mobile-first not enforced

#### Specific Overrides
- Max width for full layout: `.md-grid { max-width: 1440px; }`
- Carousel height constrained to `550px max-height`

### YAML Configuration (`mkdocs.yml`)

#### Navigation Structure
- Use hierarchical lists with page titles as keys
- Nested under section headers (Home, People, Timeline, Publications, etc.)
- Redirects must use original path: new path format in plugins section

#### Plugin Config
- Keep plugin options indented correctly under their key
- BibTeX file path relative to docs/: `"docs/references.bib"`
- JavaScript files listed in `extra_javascript` should be absolute or CDN URLs

### Git Workflow

```bash
# Typical commit flow on main repository (complight.github.io)
git checkout master  # or main, both trigger CI
# Make changes...
git add .
git commit -m "Descriptive message about change"
git push origin master  # Triggers GitHub Actions deploy
```

### Common Patterns to Follow

1. **Publication pages in `docs/publications/`**: Link images from `publications/media/` subdirectory, include title, venue and thumbnail
2. **People pages**: Markdown tables organized by role (PI, PhD Students, Master's Students, etc.)
3. **Technical docs in `docs/documentation/computing/`**: Ubuntu-specific commands and lab infrastructure guides
4. **Timeline entries**: Year-based markdown with links to detailed event pages

### File Organization

```
docs/
  ├── documentation/      # Lab procedures setup guides
  ├── javascripts/        # Custom interactive components  
  ├── logo/              # Brand assets (logo.png, favicon)
  ├── media/             # Global images
  ├── outreach/          # Community information
  ├── people/            # Team listings bios
  ├── publications/      # Research works with media subdirectory
  ├── stylesheets/       # Theme overrides custom styles
  ├── teaching/          # Course materials lecture notes
  └── timeline/          # News announcements events
```

### Do Not Modify Without Understanding

- `mkdocs.yml` plugins section (breaks site if config invalid)
- `.github/workflows/ci.yml` deployment pipeline
- `docs/javascripts/slideshow.js` carousel depends on CSS variables in `carousel.css`
- MathJax configuration in `config.js` affects LaTeX rendering globally

### BibTeX Integration

- Citations stored in `docs/references.bib`
- MkDocs-BibTeX plugin auto-generates bibliographies from this file
- New entries must follow standard BibTeX/LaTeX format

### Contributing Notes

When adding new content:
1. Create matching markdown file and add to nav in `mkdocs.yml`
2. Test locally with `mkdocs serve --strict`
3. Commit with descriptive message that will appear as PR title if using GitHub flow
4. Deployment is automatic on push to master/main
