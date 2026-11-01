<div align="center">

# 🎬 MKVtoMP4 — Free MKV to MP4 Converter Online

**Instant 2-Second Lossless Container Remux (`-c copy`) & Universal H.264 Transcoder in Your Browser**

[![Live Demo](https://img.shields.io/badge/Live_Demo-mkvtomp4.github.io-3A86FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mkvtomp4.github.io/)
[![Astro Islands](https://img.shields.io/badge/Built_With-Astro_4.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![FFmpeg.wasm](https://img.shields.io/badge/Engine-FFmpeg.wasm_Lossless_Remux-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)](https://github.com/ffmpegwasm/ffmpeg.wasm)
[![100% Client-Side Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side_RAM-BDB2FF?style=for-the-badge&logo=shield&logoColor=0F172A)](https://mkvtomp4.github.io/)
[![PWA Offline Ready](https://img.shields.io/badge/PWA-100%25_Offline_Ready-FFD6E0?style=for-the-badge&logo=pwa&logoColor=0F172A)](https://mkvtomp4.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0F172A?style=for-the-badge)](./LICENSE)
[![Support on Ko-fi](https://img.shields.io/badge/Support_the_Developer-Ko--fi-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/kishara)

</div>

---

## 🚀 Overview & Why Local Remuxing Wins

[**MKVtoMP4**](https://mkvtomp4.github.io/) is a fast, privacy-first, open-source web application that converts multi-gigabyte **MKV files to MP4 in seconds** directly inside your browser using **WebAssembly (`@ffmpeg/ffmpeg` & `@ffmpeg/util`)**.

### Why Local Browser Remuxing Beats Traditional Tools:
- **⚡ 2-Second Lossless Remux (`-c copy`)**: Most `.mkv` videos recorded by OBS Studio or downloaded online already contain an `H.264` video stream inside a Matroska wrapper. Instead of spending 20 minutes re-encoding every frame, MKVtoMP4 extracts the exact bitstream and repackages it into an `.mp4` container (`-movflags +faststart`) in seconds with **zero generation loss**.
- **🔒 100% Local RAM Privacy (Zero Cloud Uploads)**: Unlike CloudConvert or traditional online uploaders that cap free files at 100MB–500MB and upload your private recordings to third-party servers, MKVtoMP4 executes **100% locally in your device RAM**. Your files never leave your computer or phone.
- **🍎 Instant Mac QuickTime, iPhone & NLE Compatibility**: No need to install bulky desktop apps like **HandBrake** (which forces a lossy re-encode) or dig through **VLC Media Player** conversion dialogs that frequently drop audio tracks.
- **📲 100% Offline PWA**: Install MKVtoMP4 via the **Add to Home Screen** button. Our Service Worker (`public/sw.js` + `public/coi-serviceworker.js`) caches all 8 localized routes and WebAssembly binaries with Cross-Origin Isolation (`SharedArrayBuffer`) enabled on GitHub Pages.

---

## 🛠️ Supported Conversion Modes

Switch between 6 specialized video and audio pipelines directly from the top workspace pills:

| Mode | Pipeline Command | Best Use Case |
| :--- | :--- | :--- |
| **1. MKV → MP4 (Lossless Remux)** | `ffmpeg -i input.mkv -c:v copy -c:a aac -movflags +faststart output.mp4` | Instant 2-second container swap for OBS Studio recordings, gameplay, and HD movies with **100% bit-exact video quality**. |
| **2. MKV → MP4 (H.264 Transcode)** | `ffmpeg -i input.mkv -c:v libx264 -preset ultrafast -crf 23 -pix_fmt yuv420p -c:a aac output.mp4` | Universal hardware playback for `HEVC/H.265`, `VP9`, or `AV1` MKV files on older Macs, QuickTime, iPads, and Smart TVs. |
| **3. MP4 → MKV Converter** | `ffmpeg -i input.mp4 -c copy output.mkv` | Repackage MP4 recordings into open-standard Matroska containers with multi-track and soft subtitle support. |
| **4. WebM → MP4 Converter** | `ffmpeg -i input.webm ... output.mp4` | Convert browser recordings and VP8/VP9 WebM clips into universally editable MP4 videos. |
| **5. MKV → AVI Converter** | `ffmpeg -i input.mkv ... output.avi` | Legacy compatibility for classic hardware media players and embedded systems. |
| **6. MKV → MP3 Audio Extractor** | `ffmpeg -i input.mkv -vn -c:a libmp3lame -q:a 2 output.mp3` | Extract high-bitrate VBR stereo MP3 audio tracks from MKV video lectures, podcasts, and concerts. |

---

## 🎨 UI/UX Color Palette & Theme System

Designed around a **Soft Pastel & Electric Blue** visual hierarchy with an uncluttered `100dvh` first-fold Converter Box Div, oversized `clamp(2rem, 4vw, 3.25rem)` headings, and a **strictly icon-only (`48x48px`) mobile navbar** on viewports `< 768px`.

| Palette Token | Hex Code | Role in Light & Dark Theme System |
| :--- | :--- | :--- |
| **Electric Azure Blue** | `#3A86FF` | Primary action buttons (`Select MKV Video`, `Convert Video Now`, `Download MP4 File`), active format pills, dropzone hover border, and Ko-fi CTA background. |
| **Soft Periwinkle Lavender** | `#BDB2FF` | Secondary accent surfaces, default dashed dropzone border, workspace card borders, and animated progress bar gradient (`#3A86FF` → `#BDB2FF`). |
| **Blush Rose Pink** | `#FFD6E0` | Privacy & offline highlight pill badges (`100% Local Browser RAM Processing`), Ko-fi CTA hover glow, and interactive pill highlights. |
| **Warm Snow Alabaster** | `#FFF4F4` | Default Light Mode primary background (`--bg-primary`), dropzone active hover inner tint, and high-contrast text in Dark Mode (`#0B0F19`). |
| **Deep Ink Contrast Text** | `#0F172A` | Primary high-contrast body and display typography in Light Mode (AAA contrast compliance). |

---

## 🌍 Technical SEO & 8-Language Internationalization (`i18n`)

MKVtoMP4 is engineered for **100/100 Lighthouse Performance, Accessibility, Best Practices, and SEO** across **8 global languages**:

- **Supported Locales**:
  - 🇺🇸 **English** (`/`) — Default
  - 🇪🇸 **Español** (`/es/`)
  - 🇧🇷 **Português** (`/pt/`)
  - 🇩🇪 **Deutsch** (`/de/`)
  - 🇫🇷 **Français** (`/fr/`)
  - 🇯🇵 **日本語** (`/ja/`)
  - 🇨🇳 **简体中文** (`/zh/`)
  - 🇷🇺 **Русский** (`/ru/`)
- **Bidirectional Hreflang & Sitemap**: Automated `<link rel="alternate" hreflang="..." />` tags in `<head>` plus `@astrojs/sitemap` generating `sitemap-index.xml` and `sitemap-0.xml` for all 8 locales.
- **100% Compliant JSON-LD Structured Data**: Every localized route injects a rich `@graph` containing `WebApplication`, `HowTo`, `BreadcrumbList`, and `FAQPage` schemas — strictly compliant with Google Rich Results guidelines (**zero fake aggregate ratings or fake reviews**).
- **29-Keyword Content Architecture**: Semantic below-the-fold sections covering the 3-Step Browser Guide, Desktop Software Alternative Comparison Matrix (*HandBrake*, *VLC*, *OBS Studio*, *CloudConvert*, *FFmpeg*), Educational Deep-Dive Articles (*What is an MKV File?*, *MKV vs MP4*, *Remux MKV to MP4*), and an 8-Question Troubleshooting FAQ Accordion.

---

## 💻 Local Development & Build Commands

### Prerequisites
- **Node.js** `>= 18.17.1` (Node 20 LTS recommended)
- **npm** `>= 9.x`

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local Astro dev server with COOP/COEP headers enabled (http://localhost:4321)
npm run dev

# 3. Build static production output into ./dist/ (verifies all 8 locales & sitemaps)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 💖 Support the Developer

**MKVtoMP4** is 100% free, ad-free, and open-source with zero file size restrictions or paywalls. If this tool saved you time converting your videos, please consider supporting ongoing development:

[![Support Kishara on Ko-fi](https://img.shields.io/badge/☕_Support_the_Developer_on_Ko--fi-ko--fi.com%2Fkishara-3A86FF?style=for-the-badge&logo=kofi&logoColor=FFD6E0)](https://ko-fi.com/kishara)

👉 **[https://ko-fi.com/kishara](https://ko-fi.com/kishara)**

---

## 📄 License

Released under the [MIT License](./LICENSE) — Copyright (c) 2026 **Kishara Dilshan / PixelPieStudio**.
