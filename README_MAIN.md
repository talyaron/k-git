# 🌊 Beit Yerach High School Website

> Beautiful, modern website for Beit Yerach High School near the Sea of Galilee
> Built with React + Vite | Fully responsive | Hebrew RTL support

## 📚 Two Versions Available

### 1️⃣ Static HTML (Quick Start)
```bash
Open: beit-yerach.html in your browser
No setup needed! Ready to deploy immediately.
```

### 2️⃣ React + Vite (Recommended for Development)
```bash
cd beit-yerach-react
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## 🎯 Quick Navigation

### 🚀 New to the Project?
Start here: [`beit-yerach-react/SETUP.md`](./beit-yerach-react/SETUP.md)
- Installation instructions
- Basic commands
- Verification checklist

### ⚡ Want to Start Coding?
Read: [`beit-yerach-react/QUICK_START.md`](./beit-yerach-react/QUICK_START.md)
- 3-minute quick start
- How to make changes
- Where to edit content

### 👥 Working in a Team?
Read: [`beit-yerach-react/GIT_WORKFLOW_GUIDE.md`](./beit-yerach-react/GIT_WORKFLOW_GUIDE.md) ⭐
- Git basics for beginners
- Safe workflow steps
- How to prevent conflicts
- Common scenarios
- Cheat sheet included!

### 🔧 Full Development Guide?
Read: [`beit-yerach-react/DEVELOPER_GUIDE.md`](./beit-yerach-react/DEVELOPER_GUIDE.md)
- Component guidelines
- Styling patterns
- Common tasks
- Git workflow
- Troubleshooting

### 📖 Complete Project Overview?
Read: [`PROJECT_SUMMARY.md`](./PROJECT_SUMMARY.md)
- Project statistics
- Architecture overview
- Deployment options
- Best practices

---

## 📂 Project Structure at a Glance

```
beit-yerach-react/
├── src/
│   ├── components/
│   │   ├── common/         ← Reusable UI components (6)
│   │   └── sections/       ← Page sections (6)
│   ├── constants/colors.js ← Color palette
│   ├── styles/global.css   ← Global styles
│   └── App.jsx             ← Main component
├── Documentation/
│   ├── SETUP.md            ← Install & run
│   ├── QUICK_START.md      ← 3-minute guide
│   ├── DEVELOPER_GUIDE.md  ← Full dev guide
│   ├── GIT_WORKFLOW_GUIDE.md ← Git for beginners ⭐
│   └── README.md           ← Complete docs
└── package.json
```

---

## ✨ Features

### 🎨 Design
- Modern, responsive layout
- Hero section with particle animation
- Hebrew (RTL) support throughout
- Mobile-first responsive design
- Beautiful color scheme inspired by Sea of Galilee

### 💻 Development
- Hot Module Reload (instant updates)
- Small, modular components (~60 lines each)
- Easy to extend and customize
- No external dependencies (React only)
- Production-optimized build (66KB gzipped)

### 📱 Responsive
- Desktop: Full layout
- Tablet (768px): Adjusted grid
- Mobile (480px): Single column
- Ultra-mobile: Minimal layout

### 👥 Team-Friendly
- Small files = rare merge conflicts
- Each component is independent
- Clear file organization
- Great documentation
- Beginner-friendly git guide included

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ ([download](https://nodejs.org))
- npm v8+
- Git
- Code editor (VS Code recommended)

### Installation (2 minutes)

```bash
# 1. Navigate to project
cd beit-yerach-react

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

### Make Your First Change

1. Edit `src/components/sections/About.jsx`
2. Change a title
3. Save the file
4. Watch the browser update instantly! ✨

---

## 🎓 Learning Path

### Day 1: Get It Running
- [x] Install Node.js
- [x] Run `npm install`
- [x] Run `npm run dev`
- [x] See it working at localhost:5173

### Day 2: Make Changes
- [ ] Read `QUICK_START.md`
- [ ] Edit a component
- [ ] Change a color
- [ ] Test on mobile

### Day 3: Create a Component
- [ ] Read `DEVELOPER_GUIDE.md` (Component Guidelines)
- [ ] Create a new card component
- [ ] Use it in a section
- [ ] Test it works

### Day 4: Collaborate Safely
- [ ] Read `GIT_WORKFLOW_GUIDE.md`
- [ ] Create a feature branch
- [ ] Make changes
- [ ] Create a Pull Request
- [ ] Get it reviewed

---

## 📋 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Check code quality
```

---

## 🌍 Deployment

### Deploy to Vercel (Fastest)
```bash
npm i -g vercel
vercel
# Follow the prompts!
```

### Deploy to Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```

### Deploy Anywhere
```bash
npm run build
# Upload contents of dist/ folder to your web server
```

See [`SETUP.md`](./beit-yerach-react/SETUP.md) for more deployment options.

---

## 🎯 Common Tasks

### Update Content
Edit data directly in component files:
```jsx
// src/components/sections/Academics.jsx
const academicsData = [
  { title: 'New Title', description: 'New description' }
];
```

### Change Colors
Update one file:
```css
/* src/styles/global.css */
:root {
  --lake-blue: #NEW_COLOR;
}
```

### Add a New Section
1. Create `src/components/sections/YourSection.jsx`
2. Create `src/components/sections/YourSection.css`
3. Import in `src/App.jsx`
4. Add navigation link

See [`DEVELOPER_GUIDE.md`](./beit-yerach-react/DEVELOPER_GUIDE.md) for detailed examples.

---

## 👥 Team Collaboration

### The Safe Workflow

```
🌳 main (protected)
   ↓
🌿 Create feature branch
   ↓
✏️ Make changes locally
   ↓
🧪 Test thoroughly
   ↓
💾 Commit & push
   ↓
📝 Create Pull Request
   ↓
👀 Get review
   ↓
✅ Merge when approved
```

### Branch Naming
```
feature/add-gallery
fix/hero-animation-bug
style/update-colors
docs/add-guide
```

**For complete git guide:** See [`GIT_WORKFLOW_GUIDE.md`](./beit-yerach-react/GIT_WORKFLOW_GUIDE.md) ⭐

---

## 📊 Project Statistics

### Code Metrics
- **Components**: 12 unique components
- **Total Files**: 35 (JSX + CSS)
- **Average Component Size**: 60 lines
- **Total JSX**: ~800 lines
- **Total CSS**: ~1,200 lines

### Performance
- **CSS**: 2.06 KB gzipped
- **JavaScript**: 63.82 KB gzipped (includes React)
- **Total Bundle**: ~66 KB gzipped
- **Build Time**: 549ms

### Team Metrics
- **File Conflicts**: Rare (small files)
- **Review Time**: Quick (short files)
- **Learning Curve**: Gentle (well documented)
- **Extensibility**: High (modular design)

---

## 📚 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| **SETUP.md** | Installation & commands | 5 min |
| **QUICK_START.md** | Get running quickly | 5 min |
| **README.md** | Full documentation | 15 min |
| **DEVELOPER_GUIDE.md** | Advanced development | 40 min |
| **GIT_WORKFLOW_GUIDE.md** | Safe team workflow ⭐ | 20 min |
| **PROJECT_SUMMARY.md** | Project overview | 10 min |

---

## ✅ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ Responsive at all screen sizes

---

## 🆘 Troubleshooting

### "Port 5173 already in use"
```bash
npm run dev -- --port 3000
```

### "npm install fails"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Styles not updating"
```bash
# Restart dev server
npm run dev
```

### "Not sure what to do?"
- Check the relevant guide file
- Ask a team lead
- Check the troubleshooting section in `DEVELOPER_GUIDE.md`

---

## 🎉 You're Ready!

Everything you need is included:

✅ Two working versions (HTML + React)
✅ Complete documentation (5 files)
✅ Small, modular components
✅ Production-ready build
✅ Beginner-friendly git guide
✅ Deployment instructions

### Start Now:
```bash
cd beit-yerach-react
npm install
npm run dev
```

### Ask Questions:
- Check the documentation
- Read `GIT_WORKFLOW_GUIDE.md` for team questions ⭐
- Ask your team lead

### Deploy:
```bash
npm run build
# Upload dist/ folder
```

---

## 💡 Pro Tips

📌 **Pin the Git Guide** - Print `GIT_WORKFLOW_GUIDE.md` and keep it at your desk!

🎨 **Customize Colors** - All colors are in one file (`src/styles/global.css`)

📱 **Test Early** - Test responsive design at 480px, 768px, and 1024px widths

👀 **Code Review** - Always review your own PR before asking for feedback

🔗 **Keep Components Small** - Aim for 50-150 lines per component

---

## 📞 Support

- 📖 Read the documentation files
- 💬 Ask your team lead
- 🐛 Check troubleshooting sections
- 🤝 Help other team members

---

## 📄 License

© 2026 Beit Yerach High School. All rights reserved.

---

## 🌟 Credits

Built with:
- ⚛️ React 19
- ⚡ Vite 7
- 💅 Modern CSS
- 💡 Modular architecture

---

**Last Updated**: 2026-02-11

**Happy coding! 🚀**

---

## 🎯 Quick Links

- [Setup Instructions](./beit-yerach-react/SETUP.md)
- [Quick Start](./beit-yerach-react/QUICK_START.md)
- [Developer Guide](./beit-yerach-react/DEVELOPER_GUIDE.md)
- [Git Workflow Guide](./beit-yerach-react/GIT_WORKFLOW_GUIDE.md) ⭐
- [Project Summary](./PROJECT_SUMMARY.md)

---

**Choose your path:**
- 🚀 Just want to run it? → [`SETUP.md`](./beit-yerach-react/SETUP.md)
- ⚡ Want quick reference? → [`QUICK_START.md`](./beit-yerach-react/QUICK_START.md)
- 👥 Working in a team? → [`GIT_WORKFLOW_GUIDE.md`](./beit-yerach-react/GIT_WORKFLOW_GUIDE.md) ⭐
- 🔧 Full development? → [`DEVELOPER_GUIDE.md`](./beit-yerach-react/DEVELOPER_GUIDE.md)
