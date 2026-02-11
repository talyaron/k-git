# Developer Guide - Beit Yerach React

Complete guide for developers contributing to the project.

---

## 📋 Table of Contents

1. [Project Setup](#project-setup)
2. [Architecture](#architecture)
3. [Component Guidelines](#component-guidelines)
4. [Styling](#styling)
5. [Common Tasks](#common-tasks)
6. [Git Workflow](#git-workflow)
7. [Troubleshooting](#troubleshooting)

---

## Project Setup

### Prerequisites
- Node.js v16+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### First Time Setup

```bash
# Clone or navigate to project
cd beit-yerach-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** - Easy component scaffolding
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Thunder Client** - API testing (if needed)

---

## Architecture

### Component Organization

```
components/
├── common/
│   ├── Navigation.jsx      (Small, focused component)
│   ├── Navigation.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── AcademicCard.jsx    (Reusable card)
│   ├── AcademicCard.css
│   └── ...
├── sections/
│   ├── Hero.jsx            (Large page section)
│   ├── Hero.css
│   ├── About.jsx
│   ├── About.css
│   └── ...
```

### How They Work

**`common/`** components:
- Small, reusable pieces
- Receive data via props
- Examples: cards, buttons, items
- Used by multiple sections

**`sections/`** components:
- Large page sections
- Define their own data
- Compose multiple common components
- Have one id per section for navigation

### Data Flow

```
App.jsx imports all sections
  ↓
Each section imports common components
  ↓
Common components receive data as props
  ↓
Styles are scoped (CSS in same folder)
```

---

## Component Guidelines

### 1. Component Size
- **Target**: 50-150 lines of code
- **Keep it small** - easier to maintain and test
- **One responsibility per component**

### 2. Naming Conventions

```javascript
// File names - PascalCase
AcademicCard.jsx
Navigation.jsx

// CSS classes - kebab-case
.academic-card
.nav-links

// Component names - PascalCase
export default function AcademicCard() {}
```

### 3. Component Template

```jsx
// src/components/common/ExampleCard.jsx
export default function ExampleCard({ title, description }) {
  return (
    <div className="example-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### 4. Props Pattern

Always use destructuring:
```javascript
// ✅ Good
function Card({ title, description, icon }) {}

// ❌ Avoid
function Card(props) {
  const { title } = props;
}
```

### 5. Component Composition

```jsx
// Section uses multiple common components
export default function Academics() {
  const data = [...];

  return (
    <section id="academics">
      <h2>Title</h2>
      <div className="grid">
        {data.map(item => (
          <AcademicCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
```

---

## Styling

### CSS Scoping

**Each component owns its CSS file:**

```
components/
├── AcademicCard.jsx
├── AcademicCard.css    ← Scoped to this component
```

### Global Styles

Available in `src/styles/global.css`:
- CSS variables (colors, animations)
- Animations definitions
- Reset styles

### CSS Variables Usage

```css
/* In any component CSS file */
.my-element {
  color: var(--lake-blue);      /* #1a5f7a */
  background: var(--cream);     /* #f5f1e8 */
  border-color: var(--accent);  /* #d4a574 */
}
```

### Responsive Design

Always include media queries:

```css
.element {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .element {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .element {
    font-size: 1.2rem;
  }
}
```

### RTL Support

Remember: **The site is Hebrew (RTL)**

```css
.section {
  direction: rtl;  /* Don't forget this! */
}

/* Use logical properties when possible */
.card {
  padding-right: 2rem;  /* Right = start */
  margin-left: auto;    /* Left = end */
}
```

---

## Common Tasks

### Add a New Card Component

1. **Create the component:**
```jsx
// src/components/common/TestimonyCard.jsx
export default function TestimonyCard({ author, text }) {
  return (
    <div className="testimony-card">
      <p className="text">"{text}"</p>
      <p className="author">— {author}</p>
    </div>
  );
}
```

2. **Create the styles:**
```css
/* src/components/common/TestimonyCard.css */
.testimony-card {
  background: white;
  padding: 2rem;
  border-left: 4px solid var(--accent);
  border-radius: 8px;
  direction: rtl;
}

.testimony-card .text {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.testimony-card .author {
  font-weight: 600;
  color: var(--lake-blue);
}
```

3. **Use it in a section:**
```jsx
// src/components/sections/Testimonials.jsx
import TestimonyCard from '../common/TestimonyCard';

const testimonials = [
  { id: 1, author: 'סטודנט', text: 'בית ירח שינתה את חיי...' },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonies</h2>
      <div className="grid">
        {testimonials.map(item => (
          <TestimonyCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
```

4. **Add to App.jsx:**
```jsx
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <>
      {/* ... other sections ... */}
      <Testimonials />
    </>
  );
}
```

5. **Add navigation link:**
```jsx
// In Navigation.jsx
const navLinks = [
  // ... existing links ...
  { href: '#testimonials', text: 'עדויות' },
];
```

### Update Section Title

```jsx
// Any section, e.g., About.jsx
export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">איזה כותרת חדשה</h2>
      {/* ... rest ... */}
    </section>
  );
}
```

### Change Color Scheme

1. **Edit constants:**
```javascript
// src/constants/colors.js
export const colors = {
  lakeBlue: '#NEW_COLOR',
  // ... update others ...
};
```

2. **Edit CSS variables:**
```css
/* src/styles/global.css */
:root {
  --lake-blue: #NEW_COLOR;
  /* ... update others ... */
}
```

### Add Responsive Behavior

```css
/* Mobile-first approach */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: 1.5rem;
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: 2rem;
    padding: 3rem;
  }
}
```

---

## Git Workflow

### Branch Naming

```bash
feature/add-testimonials
fix/hero-animation-bug
style/update-colors
docs/add-deployment-guide
```

### Commit Messages

```bash
# Feature
git commit -m "feat: add testimonials section"

# Fix
git commit -m "fix: hero animation jank on mobile"

# Style
git commit -m "style: update primary color"

# Documentation
git commit -m "docs: add API documentation"
```

### Pull Request

1. Keep PRs small and focused
2. One feature per PR
3. Test locally before pushing
4. Include description of changes

### Example Workflow

```bash
# Create feature branch
git checkout -b feature/add-gallery

# Make changes and commit
git add .
git commit -m "feat: add gallery section with lightbox"

# Push to remote
git push origin feature/add-gallery

# Create PR on GitHub
# Wait for review and merge
```

---

## Troubleshooting

### Dev Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000

# Or kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Styles Not Updating

```bash
# Clear Vite cache
rm -rf .vite

# Restart dev server
npm run dev
```

### Component Not Showing

1. Check import paths (case-sensitive on Linux)
2. Verify component exports default
3. Check id attribute matches navigation link
4. Ensure CSS file exists in same folder

### Build Errors

```bash
# Check for TypeScript/JavaScript errors
npm run lint

# Rebuild from scratch
npm run build -- --force
```

### Images Not Loading

- Use relative paths: `./image.jpg`
- Or absolute from public folder: `/image.jpg`
- Check image exists in correct folder

---

## Performance Tips

1. **Lazy load images**
   ```jsx
   <img loading="lazy" src="image.jpg" alt="desc" />
   ```

2. **Minimize large animations**
   - Use CSS animations over JavaScript
   - Limit particle count in Hero

3. **Code splitting** (advanced)
   - Vite handles this automatically
   - Components are small by default

4. **Monitor bundle size**
   ```bash
   npm run build
   # Check dist folder size
   ```

---

## Code Review Checklist

Before submitting a PR:

- [ ] Component is < 150 lines
- [ ] CSS file exists in same folder
- [ ] Mobile responsive (tested on 480px+)
- [ ] Hebrew RTL support maintained
- [ ] No console warnings/errors
- [ ] Props are documented (with example)
- [ ] Color uses CSS variables
- [ ] Commit messages are clear
- [ ] Component tested in dev server

---

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

**Happy coding! 🚀**

For questions, reach out to the team or check the main README.md
