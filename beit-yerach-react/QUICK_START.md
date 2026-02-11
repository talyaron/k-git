# Quick Start Guide - Beit Yerach React App

## 🎯 Get Started in 3 Steps

### Step 1: Navigate to Project
```bash
cd beit-yerach-react
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

The app will open at **http://localhost:5173** 🎉

---

## 📝 What You Get

✅ Full Beit Yerach High School website
✅ Beautiful responsive design
✅ Hero section with particle animation
✅ Navigation with smooth scrolling
✅ About, Academics, Activities, Community sections
✅ Contact information
✅ Hebrew (RTL) support

---

## 🛠️ Make Changes

All components are in `src/components/`:

- **`common/`** - Reusable UI components (cards, buttons, etc.)
- **`sections/`** - Page sections (Hero, About, Contact, etc.)

Each component has a `.jsx` file (logic) and `.css` file (styles).

### Example: Update Academics Title

Edit `src/components/sections/Academics.jsx`:
```javascript
<h2 className="section-title">Your New Title Here</h2>
```

Save and see the change instantly! (Hot Module Reload)

---

## 🚀 Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready to deploy.

---

## 📂 Project Structure at a Glance

```
beit-yerach-react/
├── src/
│   ├── components/
│   │   ├── common/     ← Reusable components
│   │   └── sections/   ← Page sections
│   ├── constants/
│   │   └── colors.js   ← All colors in one place
│   ├── styles/
│   │   └── global.css  ← Global animations & reset
│   ├── App.jsx         ← Main component
│   └── main.jsx        ← Entry point
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Easy Customizations

### Change Colors

Edit `src/constants/colors.js` and `src/styles/global.css`:
```javascript
--lake-blue: #1a5f7a   // Change this!
--accent: #d4a574       // And this!
```

### Update Content

Data is defined in each section component. Example in `Academics.jsx`:
```javascript
const academicsData = [
  { id: 1, title: 'Your Title', description: 'Your description' },
  // Add more...
];
```

### Add New Section

1. Create `src/components/sections/YourSection.jsx`
2. Create `src/components/sections/YourSection.css`
3. Import in `src/App.jsx`
4. Add navigation link in `Navigation.jsx`

---

## 💡 Pro Tips

- Use VS Code for the best experience
- Install the "ES7+ React/Redux/React-Native snippets" extension
- Keep components small (< 150 lines)
- Each component owns its CSS file
- Test on mobile: `npm run dev` then open on your phone

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Want to see the production build?**
```bash
npm run build
npm run preview
```

**Missing dependencies?**
```bash
npm install
```

---

## 📖 Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- See full README.md for advanced topics

---

**Happy coding! 🚀**
