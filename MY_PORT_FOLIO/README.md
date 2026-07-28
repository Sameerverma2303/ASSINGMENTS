# 🚀 Multi-Page Developer Portfolio

An ultra-premium, responsive, and beginner-friendly developer portfolio website built strictly using **HTML5, CSS3, and JavaScript**.

---

## 🌟 Multi-Page Structure

Instead of a single scrolling page, this portfolio is organized into separate, dedicated pages:

- **`index.html` (Home Page)**:
  - Hero introduction with Profile Photo frame (`assets/images/profile.png`).
  - Quick Stats Grid (Completed Projects, Years Coding, Code Quality).
  - Background & Philosophy summary.
  - Comprehensive Tech Stack (**NumPy, Pandas, JavaScript, React, TypeScript, Python, HTML5, CSS3, SQL, Git**).
  - Featured 3 Projects preview.
  - Career Timeline & Highlights.
  - Call-to-action banner.

- **`projects.html` (Projects Page)**:
  - 6 Sample Project Cards with preview images (`project1.png` to `project6.png`).
  - Filter buttons (`All`, `Data Science`, `Web Apps`, `TypeScript & React`).
  - Live Demo buttons & GitHub code links.

- **`contact.html` (Contact Page)**:
  - Contact Details card (Email, Phone, Location, SLA response time, Socials).
  - Interactive Contact Form with Inquiry Type dropdown select.
  - Frequently Asked Questions (FAQ) Accordion.

---

## 📂 Workspace File Structure

```text
portfolio/
├── index.html            # Home page with bio, stats, tech stack & highlights
├── projects.html         # Dedicated Projects page with 6 projects & filter bar
├── contact.html          # Dedicated Contact page with form & FAQ accordion
├── style.css             # Unified CSS design system & glassmorphism theme
├── script.js            # JavaScript logic (theme persistence, filters, form, FAQ)
├── README.md             # Customization guide
└── assets/
    └── images/
        ├── profile.png   # Profile photo placeholder
        ├── project1.png  # Project 1 Image (Data Analytics Dashboard)
        ├── project2.png  # Project 2 Image (E-Commerce Storefront)
        ├── project3.png  # Project 3 Image (Smart Task Manager)
        ├── project4.png  # Project 4 Image (Predictive ML App)
        ├── project5.png  # Project 5 Image (Social Media Analytics)
        └── project6.png  # Project 6 Image (Financial Tracker)
```

---

## 📝 How to Customize

1. **Replace Profile Photo**:
   - Save your photo into `assets/images/` (e.g. `assets/images/my-photo.jpg`).
   - Open `index.html` and change `src="assets/images/profile.png"` to `src="assets/images/my-photo.jpg"`.

2. **Update Contact Details**:
   - Open `contact.html` and replace `alex.developer@example.com` and `+1 (555) 019-2834` with your real email and phone number.

3. **Edit Projects**:
   - Open `projects.html` to update project titles, descriptions, image paths, and GitHub links.

---

## 💻 How to Run Locally

Open `index.html` in any web browser, or run a local server:

```bash
npx http-server -p 3000
```
Then visit `http://127.0.0.1:3000`.
