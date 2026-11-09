# 🌍 Skillbridge Africa

<p align="center">
  <img src="./src/assets/hero.png" alt="Skillbridge Africa Preview" width="600" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
</p>

<p align="center">
  <strong>Connecting trusted artisans across Africa with customers who need work done right.</strong>
  <br />
  <em>High-fidelity React 19 + Tailwind CSS v4 web platform backed by verified reviews and transparent trust & safety guarantees.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3.5-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Vite-8.3.6-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Lucide_Icons-1.70.0-F97316?logo=lucide&logoColor=white" alt="Lucide React" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License MIT" />
</p>

---

## 📖 Overview

**Skillbridge Africa** bridges the trust gap in the informal artisan economy across African metropolises (Lagos, Nairobi, Accra, Kigali, Johannesburg, and beyond). Hiring an artisan should never feel like a gamble. Skillbridge Africa provides customers with verified craftsmanship, transparent community reviews, proximity-based discovery, and a robust dispute resolution guarantee.

---

## ✨ Key Features & Interactive Capabilities

### 🔍 1. Smart Discovery & Hero Search
- **Dual-Input Live Search**: Instant queries by trade (*Electrician, Plumber, Tailor, Carpenter, etc.*) and location (*Yaba, Surulere, Ikeja, Lekki, Lagos*).
- **Interactive Quick-Pill Tags**: One-click preset filters for popular trades.
- **Dynamic Handlers**: Seamlessly forwards search queries straight into the interactive artisan directory modal.

### 📱 2. Dual-Phone Interactive Showcase
- **Map View (Back Phone)**:
  - Simulated interactive map with artisan location pins and ratings (`4.9`, `4.8`, `4.7`, `4.6`).
  - Active location indicator and nearby artisans roster sorted by distance.
- **Profile Card (Front Phone)**:
  - Verified craftsman profile (*Chidi Okafor*, 9 yrs experience, 128 verified reviews, 4.9 rating).
  - Skill badges (*Wiring, Inverters, Fault Finding, Lighting*).
  - Skillbridge Trust & Safety guarantee box.
  - Interactive **Star Bookmark** toggle and **Book Artisan** direct CTA.
  - Verified customer review snippet (*Ngozi E.*).

### 🛡️ 3. Trust Signals & Safety Architecture
- Four key trust pillars:
  - 🟡 **Reviews You Can Rely On**: Verified customers only; no phantom ratings.
  - 🟢 **Close To You**: Distance-sorted artisans to cut transit delays and fees.
  - 🟠 **We Keep Watch**: Continuous monitoring with zero tolerance for misconduct.
  - 🟣 **Star Your Favourites**: Save and rebook go-to artisans anytime.
- **4-Stage Progressive Resolution Guarantee**:
  - `01` Complaint Received ➔ `02` Profile Suspended ➔ `03` Neutral Investigation ➔ `04` Binding Resolution.

### 🛠️ 4. Trades Directory Grid
- Curated categories covering 8 essential trade sectors:
  - 🚰 **Plumbing**
  - ⚡ **Electrical**
  - 🪚 **Carpentry**
  - ✂️ **Tailoring & Fashion**
  - 🚗 **Auto Mechanics**
  - 💇 **Hair & Beauty**
  - 🎨 **Painting & Tiling**
  - 🔥 **Welding & Fabrication**
- Clicking any trade instantly launches the artisan directory filtered to that specialty.

### 💬 5. Complete Modal Flows
- **`FindArtisanModal`**: Searchable artisan directory with real-time filters, trade tags, location chips, availability status (*Available today / tomorrow*), and direct booking triggers.
- **`BookingModal`**: Fast booking request with date/time selection, service address verification, and instant confirmation feedback.
- **`ArtisanModal`**: Craftsman onboarding form for artisans to submit applications, skill details, and WhatsApp verification contacts.

---

## 🎨 Design System & Palette

The user interface uses a warm, culturally resonant African aesthetic rooted in earth tones and forest greens:

| Color Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Forest Green** | `#0D4A30` | Primary brand color, headers, trust badges, active states |
| **Warm Terracotta** | `#CA7320` | Secondary accent, primary action buttons, avatar highlights |
| **Golden Yellow** | `#F7B928` | Star ratings, badges, highlight accents |
| **Deep Charcoal** | `#111A14` | High-contrast typography & dark banners |
| **Warm Linen** | `#FAF9F5` | Canvas background, soft paper feel |
| **Clean White** | `#FFFFFF` | Card surfaces, modal containers, inputs |

---

## 📁 Project Structure

```text
Skillbridge Africa/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, hero graphics & SVG icons
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/         # Modular React components
│   │   ├── ArtisanBanner.jsx   # Artisan onboarding CTA banner
│   │   ├── ArtisanModal.jsx    # Artisan application & registration modal
│   │   ├── BookingModal.jsx    # Artisan booking request modal
│   │   ├── FinalCta.jsx        # Bottom conversion banner
│   │   ├── FindArtisanModal.jsx# Filterable directory search modal
│   │   ├── Footer.jsx          # Site footer with links & brand details
│   │   ├── Hero.jsx            # Hero headline, dual search & app mockups
│   │   ├── HowItWorks.jsx      # 4-step workflow explainer
│   │   ├── Navbar.jsx          # Responsive nav header with mobile menu
│   │   ├── PhoneMockups.jsx    # Dual interactive mobile phone preview
│   │   ├── TradesGrid.jsx      # 8-trade interactive grid
│   │   ├── TrustAndSafety.jsx  # 4-step dispute resolution section
│   │   └── TrustSignals.jsx    # 4 core trust value cards
│   ├── App.jsx             # Main application orchestrator & state manager
│   ├── index.css           # Tailwind CSS imports & global styles
│   └── main.jsx            # React root DOM mount
├── index.html              # HTML5 entry template
├── package.json            # Dependencies & build scripts
├── vite.config.js          # Vite configuration with Tailwind CSS v4 plugin
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** (or **pnpm** / **yarn**)

### 1. Clone or Navigate to the Repository
```bash
cd "C:\Users\HP\Downloads\Skillbridge Africa"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:5173
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint Codebase
```bash
npm run lint
```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (`19.3.1`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/) (`^1.70.0`)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🗺️ Roadmap & Planned Enhancements

- [ ] **Escrow Payment Integration**: Support for Paystack, Flutterwave, and M-Pesa escrow milestone payments.
- [ ] **Instant Messaging & WhatsApp Notifications**: Direct real-time artisan chat with automated WhatsApp booking reminders.
- [ ] **Geolocation & Live Mapping**: Native Leaflet / Mapbox integration with GPS distance calculation.
- [ ] **Artisan Portfolio Gallery**: Image uploads for before/after job showcases.
- [ ] **Progressive Web App (PWA)**: Offline caching and mobile home-screen installability.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
