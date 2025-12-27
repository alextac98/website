# Required Images

This directory contains images for the website. Some images have been downloaded from the WordPress site, while others are using placeholder images that should be replaced with actual photos.

## Status Legend

- ✅ Downloaded from WordPress (actual image)
- 🔲 Placeholder (needs replacement with actual image)

---

## Homepage Images

| File | Status | Description |
|------|--------|-------------|
| `banner.jpg` | ✅ | Main hero banner (Tonight Show image) |
| `robotics.jpg` | ✅ | SmallKat rendering for Robotics section |
| `software.png` | ✅ | OS_Static image for Software section |
| `electronics.jpg` | ✅ | SmallKat electronics for Electronics section |
| `3dprinting.png` | ✅ | 3D printing icon for CAD section |

## About Page

| File | Status | Description |
|------|--------|-------------|
| `alex-profile.png` | ✅ | Profile icon (from WordPress favicon) |

## Blog Post Images (`/blog/`)

| File | Status | Description |
|------|--------|-------------|
| `macbook-setup.jpg` | 🔲 | MacBook Setup article featured image |
| `vscode-extensions.jpg` | 🔲 | VS Code Extensions article featured image |
| `linux-desktop.jpg` | 🔲 | Linux .desktop files article featured image |
| `filament-spools.jpg` | 🔲 | 3D Printing Filament Spool Weights article |
| `ender-3.jpg` | 🔲 | Ender 3 Upgrades article featured image |

## Project Images (`/projects/`)

| File | Status | Description |
|------|--------|-------------|
| `maverick.jpg` | ✅ | Project Maverick featured image |
| `smallkat.jpg` | ✅ | SmallKat MQP featured image |
| `nasa-src.png` | ✅ | NASA Space Robotics Challenge featured image |
| `poverty-stoplight.jpg` | 🔲 | Poverty Stoplight IQP featured image |
| `project-drogo.jpg` | 🔲 | Project Drogo featured image |
| `frc-2761.jpg` | 🔲 | FIRST FRC Team 2761 featured image |
| `robomagellan.jpg` | 🔲 | RoboMagellan featured image |
| `ri3d-2018.jpg` | 🔲 | Robot in 3 Days 2018 featured image |
| `project-pather.jpg` | 🔲 | Project Pather featured image |

## Award Images (`/awards/`)

| File | Status | Description |
|------|--------|-------------|
| `tonight-show.jpg` | ✅ | Tonight Show Fallonventions featured image |
| `isef-2016.jpg` | 🔲 | Intel ISEF 2016 featured image |
| `nasa-src.png` | ✅ | NASA Space Robotics Challenge featured image |

## Company Logos (`/companies/`)

These are used in the Experience section on the homepage. Currently using placeholders.

| File | Status | Description |
|------|--------|-------------|
| `inversion.png` | 🔲 | Inversion Space logo |
| `spacex.png` | 🔲 | SpaceX logo |
| `nbc.png` | 🔲 | NBC logo (for Tonight Show) |
| `intel.png` | 🔲 | Intel logo (for ISEF) |

---

## Replacing Placeholder Images

To replace placeholder images with actual images:

1. Find or create an appropriate image
2. Ensure it's optimized for web (reasonable file size)
3. Replace the placeholder file with the same filename
4. Rebuild the site with `npm run build` or `pnpm run build`

### Recommended Image Sizes

- **Homepage banner**: 1200x380 pixels
- **Feature images**: 520x480 pixels (square-ish)
- **Blog featured images**: 800x400 pixels
- **Project featured images**: 800x600 pixels
- **Award featured images**: 800x600 pixels
- **Company logos**: 200x80 pixels (with transparency)

### Supported Formats

- JPEG (`.jpg`) - Best for photographs
- PNG (`.png`) - Best for logos/graphics with transparency
- WebP (`.webp`) - Modern format, smaller file sizes

Astro will automatically optimize images during the build process.

---

## Existing Template Images (can be removed/replaced)

These images came with the Astroplate template:

- `logo.png` - Site logo
- `logo-darkmode.png` - Dark mode site logo
- `favicon.png` - Site favicon
- `avatar.png` / `avatar-sm.png` - Default avatars
- `call-to-action.png` - CTA section image
- `og-image.png` - Open Graph image for social sharing
- `service-1.png`, `service-2.png`, `service-3.png` - Template service images
- `image-placeholder.png` - Generic placeholder image