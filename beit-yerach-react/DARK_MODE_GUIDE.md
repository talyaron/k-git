# 🌙 Dark Mode Implementation Guide

Complete guide to the dark mode feature in Beit Yerach website.

---

## 🎯 Overview

Dark mode is fully integrated into the website with:
- ✅ Automatic system preference detection
- ✅ User preference persistence (localStorage)
- ✅ Smooth transitions between modes
- ✅ All components styled for dark mode
- ✅ Toggle button in navigation
- ✅ 0.3s smooth animation

---

## 🚀 How It Works

### Features

1. **System Preference Detection**
   - Checks user's OS dark mode preference on first load
   - Applies automatic dark/light mode matching

2. **User Preference Storage**
   - Saves user preference to localStorage
   - Remembers choice on future visits
   - User preference overrides system preference

3. **Toggle Button**
   - Moon emoji (🌙) in light mode
   - Sun emoji (☀️) in dark mode
   - Located in navigation bar (far right)
   - Smooth rotation animation on hover

4. **Smooth Transitions**
   - All color changes animate smoothly (0.3s)
   - No jarring transitions
   - All text, backgrounds, borders update together

---

## 🎨 Dark Mode Colors

### Light Mode (Default)
```css
--bg-primary: #f5f1e8      /* Cream background */
--bg-secondary: #fafaf7    /* Light gray */
--bg-tertiary: #ffffff     /* White */
--text-primary: #1a1a1a    /* Dark text */
--text-secondary: #666666  /* Gray text */
```

### Dark Mode
```css
--bg-primary: #0f0f0f      /* Very dark */
--bg-secondary: #1a1a1a    /* Dark gray */
--bg-tertiary: #2a2a2a     /* Darker gray */
--text-primary: #e8e8e8    /* Light text */
--text-secondary: #b0b0b0  /* Light gray */
```

### Accent Colors
Colors adapt to both modes:
- Lake Blue: Brighter in dark mode for readability
- Green: Enhanced in dark mode
- Accent: Warmer tone in dark mode

---

## 📁 Files Involved

### Core Implementation
- **`src/hooks/useDarkMode.js`** - Dark mode logic
- **`src/styles/global.css`** - CSS variables & transitions
- **`src/components/common/Navigation.jsx`** - Toggle button

### Updated Components

All components updated to use CSS variables:
- Navigation
- Hero
- About
- Academics
- Activities
- Community
- Contact
- Footer

Plus all card components:
- AcademicCard
- ActivityItem
- CommunityCard
- ContactItem

---

## 🔧 How the Hook Works

### useDarkMode Hook

Located in `src/hooks/useDarkMode.js`

```javascript
const { isDarkMode, toggleDarkMode } = useDarkMode();
```

**Functionality:**
1. Checks localStorage for saved preference
2. If no saved preference, checks system preference
3. Applies `dark-mode` class to `<html>` element
4. `toggleDarkMode()` switches between modes
5. Saves preference to localStorage

---

## 🎯 Using Dark Mode in Components

### Example: Using the Hook

```jsx
import useDarkMode from '../../hooks/useDarkMode';

export default function MyComponent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}
```

### Example: CSS Dark Mode Styling

```css
/* Light mode (default) */
.my-element {
  background: var(--bg-tertiary);  /* White in light, #2a2a2a in dark */
  color: var(--text-primary);      /* Dark text in light, light in dark */
}

/* Optional: Override for dark mode if needed */
html.dark-mode .my-element {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```

---

## 📝 CSS Variable Reference

### Background Colors
```css
--bg-primary       /* Main background (gradients often use this) */
--bg-secondary     /* Alternate background for contrast */
--bg-tertiary      /* Cards, boxes, containers */
```

### Text Colors
```css
--text-primary     /* Main text */
--text-secondary   /* Muted text, descriptions */
```

### Semantic Colors
```css
--lake-blue        /* Primary blue (adaptive in dark mode) */
--sky-blue         /* Secondary blue */
--light-blue       /* Accent blue */
--green            /* Primary green */
--light-green      /* Accent green */
--accent           /* Accent color (gold/warm) */
```

### Utility
```css
--border-color     /* Borders adapt to mode */
```

---

## ✅ Testing Dark Mode

### Manual Testing

1. **Toggle Button**
   - Click moon/sun icon in navigation
   - Page should smoothly transition
   - Button icon should change

2. **System Preference**
   - Clear localStorage: `localStorage.clear()`
   - Refresh page
   - Check your OS dark mode setting
   - Should match automatically

3. **Persistence**
   - Toggle dark mode
   - Refresh page
   - Mode should persist

4. **Component Visibility**
   - Check all text is readable
   - Check contrast ratios
   - Verify images look good
   - Test on mobile

### Browser DevTools

```javascript
// Check current mode
document.documentElement.classList.contains('dark-mode')

// Check localStorage
localStorage.getItem('darkMode')

// Manually toggle
document.documentElement.classList.toggle('dark-mode')
localStorage.setItem('darkMode', 'true')
```

---

## 🎨 Customizing Dark Mode

### Change Dark Mode Colors

Edit `src/styles/global.css`:

```css
html.dark-mode {
  /* Change these colors */
  --bg-primary: #121212;    /* Your new dark background */
  --text-primary: #ffffff;  /* Your new light text */
  --lake-blue: #5ba8e0;     /* Lighter blue for dark mode */
}
```

### Add Dark Mode Style to Component

If a component needs special dark mode styling:

```css
/* Light mode default */
.my-component {
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Dark mode override */
html.dark-mode .my-component {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```

### Use CSS Variables Everywhere

Bad (hardcoded colors):
```css
.card {
  background: white;
  color: black;
}
```

Good (uses variables):
```css
.card {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
```

---

## 🐛 Troubleshooting

### Dark Mode Not Working

1. **Check if hook is mounted**
   - Navigation uses `useState` to prevent hydration issues
   - Only renders after mount

2. **Check localStorage**
   ```javascript
   localStorage.getItem('darkMode')
   ```

3. **Check CSS variables**
   - Open DevTools
   - Inspect element
   - Check if `dark-mode` class is on `<html>`

4. **Check browser console**
   - No errors should appear
   - Check for CSS variable issues

### Colors Not Updating

1. **Check variable names**
   - Typos in CSS variable names?
   - Should use `var(--variable-name)`

2. **Check specificity**
   - Dark mode styles might have low specificity
   - Use `html.dark-mode .class` for higher specificity

3. **Check transitions**
   - Add `transition` to elements that change

### Text Not Readable

1. **Check contrast**
   - Light text on dark background should have good contrast
   - Dark text on light background should have good contrast

2. **Check color variables**
   - Verify text color variable matches mode
   - Use `--text-primary` for main text
   - Use `--text-secondary` for muted text

---

## 📚 Best Practices

✅ **DO:**
- Use CSS variables for all colors
- Add transitions to color changes
- Test both light and dark modes
- Check contrast ratios for accessibility
- Use semantic variable names

❌ **DON'T:**
- Hardcode colors directly
- Forget about dark mode styling
- Use low contrast colors
- Forget transitions (jarring changes)
- Ignore accessibility

---

## 🔄 Dark Mode Across Different Sections

### Light Backgrounds (white/cream)
- About
- Activities

These automatically become darker when dark mode is active via `--bg-tertiary`.

### Gradient Backgrounds
- Academics
- Community
- Hero

These use CSS variables in gradients:
```css
background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
```

Gradients automatically adapt to dark mode!

### Dark Backgrounds
- Hero overlay
- Contact section
- Footer

Special dark mode colors applied:
```css
html.dark-mode #contact {
  background: linear-gradient(135deg, #0d1f2d 0%, #051018 100%);
}
```

---

## 💡 Tips

### Smooth Transitions
Add transitions to all color-changing properties:
```css
.element {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### Testing Accessibility
- Use contrast checker: https://webaim.org/resources/contrastchecker/
- Both light and dark modes should have good contrast
- Aim for WCAG AA (4.5:1 for text)

### Performance
- No JavaScript animations
- Pure CSS variables and transitions
- Minimal DOM changes
- Instant toggle response

---

## 🎉 Summary

Dark mode is:
- ✅ Automatic (respects system preference)
- ✅ Persistent (remembers user choice)
- ✅ Smooth (0.3s transitions)
- ✅ Complete (all components styled)
- ✅ Accessible (good contrast)
- ✅ Easy to customize (CSS variables)

Simply use CSS variables for colors, and dark mode works everywhere!

---

## 📞 Need Help?

- Check CSS variables in `src/styles/global.css`
- Check component CSS for dark mode styles
- Check browser DevTools for element styles
- Test in DevTools Dark Mode emulation (F12 → Three dots → Rendering → Emulate CSS media feature prefers-color-scheme)

---

**Last Updated**: 2026-02-11

Happy dark mode development! 🌙

