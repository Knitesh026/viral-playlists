# 🎵 Viral Playlist — Nostalgic & Regional Music Directory

> A curated, interactive directory and discovery hub for viral nostalgic, regional, and cultural music websites from around the internet.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.75-FF8C00?style=flat-square)](https://oxc.rs/)

---

## 🌟 Overview

**Viral Playlist** is a modern web application designed to showcase and index viral Indian music web apps, nostalgic audio hubs, and regional playlist sites—such as *Deluxe Saloon* (90s barber shop bangers), *Haryana Roadways* (highway bus hits), *Cutting Shop* (Telugu salon mass beats), *Nani Ka Ghar* (grandparents' vintage radio), *School Ke Baad* (2000s anime/cartoon title tracks), and *Kappiyum Paattum* (Malayalam tea stall monsoon vibes).

The application provides a nostalgic retro CRT TV interface, real-time website thumbnail auto-fetching, community playlist submissions, upvoting system, category filtering, and instant search.

---

## ✨ Features

- 📺 **Retro CRT TV Card Directory**: Playlists rendered inside retro TV frames with screen glow, site branding badges, physical knobs, and live preview screenshots.
- 🎠 **Animated Marquee Hero**: High-impact top hero section displaying an infinite marquee carousel of featured site thumbnails. Clicking any thumbnail dynamically features it in the main banner.
- ⚡ **Real-Time Live Search**: Instant multi-attribute search filtering by title, creator handle, tags, domain name, or site description.
- 🏷️ **Category Filter System**: Filter playlists by curated mood & cultural categories:
  - 🚌 **Safar** — Travel & Roadways
  - ✂️ **Dukaan** — Shop & Saloon
  - 📺 **Bachpan** — Childhood Nostalgia
  - 📻 **Kshetriya** — Regional Beats
  - ✨ **Shaadi** — Wedding & Baraat
  - ☀️ **Tyohar** — Festival Specials
  - ❤️ **Bhakti** — Devotional
  - 🌙 **Raat** — Late Night
  - ☕ **Rozmarra** — Everyday Vibe
- 🔮 **Auto-Fetch Metadata & Screenshot Submission**:
  - Community submission modal with real-time website metadata extraction.
  - Automatically fetches open-graph title, description, domain favicon, and live website screenshot preview via **Microlink API** and **WordPress mshots**.
  - Supports custom image overrides and social platform attribution (X/Twitter & Instagram).
- ❤️ **Upvote & View Count Tracker**: User upvotes and view counts with persistent state stored in `localStorage`.
- 🔍 **SEO & Topic Clusters Directory**: Comprehensive SEO keyword directory and FAQ section for discovery.
- 📱 **Fully Responsive & Fast**: Optimized mobile and desktop layout powered by React 19 and Tailwind CSS v4.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/), JavaScript (ES2024+)
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/), Radix UI Slot, `clsx`, `tailwind-merge`, `class-variance-authority`
- **Animations**: [Framer Motion 13](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/) + Custom SVG Social Icons (X/Twitter, Instagram)
- **Services**: WordPress mshots & Microlink API for dynamic screenshot & metadata auto-fetching
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
viral-playlists-app/
├── public/                  # Static assets (logo, favicon)
├── src/
│   ├── assets/              # Component assets
│   ├── components/          # Application UI components
│   │   ├── ui/              # Radix & hero marquee primitives
│   │   ├── CategoryFilter.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlaylistGrid.jsx
│   │   ├── SeoKeywordsSection.jsx
│   │   ├── SocialIcons.jsx
│   │   └── SubmitModal.jsx
│   ├── data/
│   │   └── initialPlaylists.js   # Pre-seeded viral playlists & categories
│   ├── lib/
│   │   └── utils.js              # Tailwind class merging utility (`cn`)
│   ├── services/
│   │   └── thumbnailService.js   # Live screenshot & metadata fetcher service
│   ├── App.jsx              # Main app container & state management
│   ├── main.jsx             # React DOM entrypoint
│   └── index.css            # Custom CSS & retro TV styling rules
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd viral-playlists-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Vite dev server with fast HMR |
| `npm run build` | Builds optimized production bundle in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs `oxlint` for lightning-fast code linting |

---

## 🧠 Key Services & Architecture

### 📸 Thumbnail & Metadata Auto-Fetcher (`src/services/thumbnailService.js`)

When a user pastes a URL in the submission modal, `thumbnailService` automatically:
1. Normalizes the target URL and extracts the domain name.
2. Calls the **Microlink API** with a fallback to **WordPress mshots (`s.wordpress.com/mshots/v1/`)** and **11ty screenshot API**.
3. Extracts open-graph title, description, favicon, and live mobile screenshot preview.

### 💾 LocalStorage Persistence

- **User Submissions**: `viral_playlists_user_submissions` stores community submitted sites locally.
- **Upvotes**: `viral_playlists_upvotes` persists upvoted item IDs to prevent duplicate voting.

---

## 🤝 Contributing

Contributions, bug reports, and playlist submissions are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

