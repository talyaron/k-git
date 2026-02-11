# Setup & Run Instructions

## 📦 Project Overview

**Beit Yerach High School React Website**
- Built with: React 19 + Vite 7
- Language: Hebrew (RTL)
- Design: Modern, responsive, modular

---

## 🚀 Getting Started

### Minimum Requirements
```
Node.js: v16 or higher
npm: v8 or higher
```

Check your versions:
```bash
node --version
npm --version
```

### Step 1: Navigate to Project

```bash
cd beit-yerach-react
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`.

### Step 3: Start Development Server

```bash
npm run dev
```

✨ **Your site is now running at http://localhost:5173**

### Step 4: Start Editing!

Open any file in `src/` and save. The page updates automatically (Hot Module Reload).

---

## 🎯 Available Commands

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run dev` | Start dev server | Runs at localhost:5173 |
| `npm run build` | Build for production | Creates `dist/` folder |
| `npm run preview` | Preview production build locally | Runs built version |
| `npm run lint` | Check code quality | Shows lint errors |

---

## 📁 Project Structure

```
beit-yerach-react/
├── src/
│   ├── components/
│   │   ├── common/          ← Reusable UI components
│   │   │   ├── Navigation.jsx + Navigation.css
│   │   │   ├── Footer.jsx + Footer.css
│   │   │   ├── AcademicCard.jsx + AcademicCard.css
│   │   │   ├── ActivityItem.jsx + ActivityItem.css
│   │   │   ├── CommunityCard.jsx + CommunityCard.css
│   │   │   └── ContactItem.jsx + ContactItem.css
│   │   └── sections/        ← Page sections
│   │       ├── Hero.jsx + Hero.css
│   │       ├── About.jsx + About.css
│   │       ├── Academics.jsx + Academics.css
│   │       ├── Activities.jsx + Activities.css
│   │       ├── Community.jsx + Community.css
│   │       └── Contact.jsx + Contact.css
│   ├── constants/
│   │   └── colors.js        ← Centralized color palette
│   ├── styles/
│   │   └── global.css       ← Global styles & animations
│   ├── App.jsx              ← Main component (imports sections)
│   ├── index.css            ← Root CSS
│   └── main.jsx             ← Vite entry point
├── public/                  ← Static assets
├── dist/                    ← Production build (created by npm run build)
├── package.json             ← Project metadata & dependencies
├── vite.config.js           ← Vite configuration
├── README.md                ← Full documentation
├── DEVELOPER_GUIDE.md       ← Guide for developers
├── QUICK_START.md           ← Quick start guide
└── SETUP.md                 ← This file
```

---

## 💡 Key Points

### Component Organization
- **Small files** - Each component is 50-150 lines
- **Paired files** - Each JSX has a matching CSS file
- **Easy collaboration** - Multiple developers can work on different components

### How to Find Things
- **Navigation buttons?** → `components/common/Navigation.jsx`
- **Academic cards?** → `components/common/AcademicCard.jsx`
- **Hero animation?** → `components/sections/Hero.jsx`
- **Colors?** → `constants/colors.js`

### Making Changes
1. Find the component file
2. Edit the JSX or CSS
3. Save and see changes instantly
4. No rebuild needed during development

---

## 🔧 Common Tasks

### Update Content

Edit data directly in component files:

```jsx
// src/components/sections/Academics.jsx
const academicsData = [
  {
    id: 1,
    icon: '📚',
    title: 'Your New Title',  // ← Change this
    description: 'Your description here',  // ← And this
  },
];
```

### Change Colors

Update one file:
```css
/* src/styles/global.css */
:root {
  --lake-blue: #NEW_COLOR;    /* Change here */
  --accent: #ANOTHER_COLOR;
}
```

### Add New Section

1. Create `src/components/sections/YourSection.jsx`
2. Create `src/components/sections/YourSection.css`
3. Import in `src/App.jsx`:
```jsx
import YourSection from './components/sections/YourSection';

function App() {
  return (
    <>
      {/* ... existing sections ... */}
      <YourSection />
    </>
  );
}
```

---

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files:
- `index.html` - The main page
- `assets/` - CSS and JavaScript bundles

**To test the production build:**
```bash
npm run preview
```

---

## 🌍 Deployment

### Using Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Using Netlify

```bash
npm run build
# Then drag dist/ folder to https://app.netlify.com/drop
```

### Using Traditional Hosting

```bash
npm run build
# Upload contents of dist/ folder to your web server
```

### Using GitHub Pages

```bash
# Update vite.config.js:
export default {
  base: '/repository-name/',
}

npm run build
# Commit dist/ folder and configure GitHub Pages
```

---

## 🆘 Troubleshooting

### "Command not found: npm"
- Install Node.js from https://nodejs.org
- Restart terminal after installation

### "Port 5173 already in use"
```bash
npm run dev -- --port 3000
```

### Styles not updating
```bash
# Restart dev server
# Press Ctrl+C to stop, then run:
npm run dev
```

### Node modules installation fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails with errors
```bash
# Check for issues
npm run lint

# Clean and rebuild
rm -rf dist
npm run build
```

---

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Developer Guide**: See `DEVELOPER_GUIDE.md`
- **Quick Start**: See `QUICK_START.md`
- **React Docs**: https://react.dev
- **Vite Docs**: https://vite.dev

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the server
- [ ] Site opens at http://localhost:5173
- [ ] Page displays correctly
- [ ] Hero animation plays
- [ ] Navigation links work
- [ ] Mobile responsive (test at 480px width)
- [ ] `npm run build` creates dist/ folder
- [ ] `npm run preview` shows production build

---

## 🎉 You're Ready!

```bash
npm run dev
```

Start editing and building! 🚀

---

**Questions?** Check README.md or DEVELOPER_GUIDE.md for more details.
