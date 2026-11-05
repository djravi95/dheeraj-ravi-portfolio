# Dheeraj Ravi — Portfolio Dashboard

An interactive resume dashboard that presents **Dheeraj Ravi's** professional profile as a modern, analytics-style single-page website.

🔗 **Live site:** [dheeraj-ravi.vercel.app](https://dheeraj-ravi.vercel.app)

---

## ✨ Features

- **Overview hero** — name, title, and contact links (email / phone / LinkedIn / location)
- **Animated stat cards** — 9+ years, 60% manual-research reduction, 99% pipeline reliability, 6 companies
- **Skills** — grouped into AI & Automation, Data & Analytics, Cloud & Data Engineering, Geospatial, and Languages
- **Experience timeline** — all roles with company, dates, location, and responsibilities
- **Projects** and **Education & Certifications** cards
- **Dark / light theme toggle** (persisted in `localStorage`)
- **Fully responsive** — mobile slide-out navigation, smooth scrolling, active-section highlighting
- **Scroll-reveal animations** and animated counters

## 🛠 Tech Stack

- Plain **HTML5**, **CSS3**, and **vanilla JavaScript** — no framework, no build step
- [Vercel](https://vercel.com) for hosting
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) fonts

## 📁 Project Structure

```
resume-dashboard/
├── index.html          # Page structure & sections
├── styles.css          # Styling + dark/light theme (CSS variables)
├── script.js           # Resume data, rendering, and interactivity
├── Dheeraj_Resume.pdf  # Downloadable resume (served at /Dheeraj_Resume.pdf)
├── .gitignore
└── .vercelignore
```

All resume content lives in the `skills`, `experience`, `projects`, and `certifications` arrays at the top of `script.js` — edit those to update the site.

## 🚀 Run Locally

No dependencies required. Serve the folder with any static server:

```bash
# Python
python3 -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve .
```

Or simply open `index.html` in a browser.

## ☁️ Deploy to Vercel

```bash
npm i -g vercel      # install the Vercel CLI
vercel login         # one-time sign-in
vercel deploy --prod # deploy to production
```

The project is linked to the Vercel project **`dheeraj-ravi`**.

## 🧑‍💻 Author

**Dheeraj Ravi** — Data & AI Solutions · AI Workflow Automation · Analytics Engineering · Cloud Data Platforms

- 📧 djravi95@gmail.com
- 🔗 [linkedin.com/in/dheerajravi995](https://linkedin.com/in/dheerajravi995)
- 📍 Hyderabad, India — open to remote & international roles

## 📄 License

MIT
