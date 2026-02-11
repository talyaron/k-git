# Beit Yerach High School Website

A modern, responsive website for Beit Yerach High School built with React + Vite. Designed for team collaboration with modular, small components and organized file structure.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd beit-yerach-react
npm install
```

### Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

The project is organized with **small, modular files** to enable team collaboration:

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── AcademicCard.jsx
│   │   ├── AcademicCard.css
│   │   ├── ActivityItem.jsx
│   │   ├── ActivityItem.css
│   │   ├── CommunityCard.jsx
│   │   ├── CommunityCard.css
│   │   ├── ContactItem.jsx
│   │   └── ContactItem.css
│   └── sections/            # Page sections
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── About.jsx
│       ├── About.css
│       ├── Academics.jsx
│       ├── Academics.css
│       ├── Activities.jsx
│       ├── Activities.css
│       ├── Community.jsx
│       ├── Community.css
│       ├── Contact.jsx
│       └── Contact.css
├── constants/
│   └── colors.js            # Color palette configuration
├── styles/
│   └── global.css           # Global styles & animations
├── App.jsx                  # Main app component
├── index.css                # Root styles
└── main.jsx                 # Entry point
```

---

## 🎨 Component Organization

Each component has its own folder with:
- **JSX file** - React component logic
- **CSS file** - Scoped styles for that component

### Example Component

```jsx
// components/common/AcademicCard.jsx
export default function AcademicCard({ icon, title, description }) {
  return (
    <div className="academic-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

```css
/* components/common/AcademicCard.css */
.academic-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  /* styles */
}
```

---

## 👥 Team Collaboration Guide

### Small File Sizes
- Each component file is ~50-150 lines
- Each CSS file is ~30-80 lines
- Easy to review, modify, and avoid merge conflicts

### How to Extend

**Adding a new card component:**
1. Create `components/common/NewCard.jsx`
2. Create `components/common/NewCard.css`
3. Import and use in the appropriate section
4. Add data to the section's component

**Updating styles:**
- Each component owns its CSS file
- No global style conflicts
- Easy to find and modify component styles

**Creating a new section:**
1. Create `components/sections/NewSection.jsx`
2. Create `components/sections/NewSection.css`
3. Import in `App.jsx`
4. Add HTML id for navigation linking

---

## 🎨 Design System

### Colors (in `constants/colors.js`)
```javascript
--lake-blue: #1a5f7a
--sky-blue: #4a9fd8
--light-blue: #7ec8e3
--green: #2d7a4a
--accent: #d4a574
--cream: #f5f1e8
```

Update the color palette in one place, used everywhere.

### Typography
- Primary font: 'Segoe UI' (system fallback)
- Supports Hebrew (RTL direction)

### Animations
Available in `global.css`:
- `slideUp` - Fade in with upward motion
- `kenBurns` - Subtle zoom effect for images

---

## 📱 Responsive Design

All components are mobile-responsive with breakpoints:
- **Desktop**: Full layout
- **Tablet** (max 768px): Adjusted grid, smaller fonts
- **Mobile** (max 480px): Single column, minimal padding

---

## 🔧 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

---

## 🌍 Internationalization (i18n)

The site is built in **Hebrew (RTL)**:
- `dir="rtl"` on HTML tag
- `direction: rtl` in section CSS files
- Contact developer to add English version or multi-language support

---

## 🚀 Deployment

### Vite Build Output
```bash
npm run build
# Creates optimized dist/ folder
```

### Deploy to:
- **Vercel**: Connect GitHub repo, auto-deploy on push
- **Netlify**: Drag & drop dist/ folder or connect GitHub
- **GitHub Pages**: Configure vite.config.js with base URL
- **Traditional hosting**: Upload dist/ contents to web server

### Example Vercel Deployment
```bash
npm i -g vercel
vercel
```

---

## 📝 Content Updates

To update content, edit the data directly in component files:

**Example - Update Academics:**
```javascript
// In Academics.jsx, modify academicsData array
const academicsData = [
  {
    id: 1,
    icon: '📚',
    title: 'Your Program Name',
    description: 'Your description here',
  },
  // ...
];
```

---

## ✅ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## 📄 License

© 2026 Beit Yerach High School. All rights reserved.

---

## 🤝 Contributing

When adding features:
1. Keep components small (< 150 LOC)
2. One component = one directory with JSX + CSS
3. Use semantic HTML
4. Test on mobile
5. Follow the existing naming conventions

---

## ❓ FAQ

**Q: How do I change the school colors?**
A: Update `constants/colors.js` and the CSS variables in `styles/global.css`

**Q: How do I add a new section?**
A: Create a folder in `components/sections/`, add JSX + CSS, then import in App.jsx

**Q: Can I use external libraries?**
A: Yes! Install via npm and import. Keep the project lightweight.

**Q: How do I add navigation to a new section?**
A: Add an `id` attribute to your section and a link in Navigation.jsx

---

For questions or support, contact the development team.
