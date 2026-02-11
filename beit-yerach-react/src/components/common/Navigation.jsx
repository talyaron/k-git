import { useState, useEffect } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import './Navigation.css';

export default function Navigation() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '#about', text: 'אודות' },
    { href: '#history', text: 'היסטוריה' },
    { href: '#academics', text: 'לימודים' },
    { href: '#activities', text: 'פעילויות' },
    { href: '#community', text: 'קהילה' },
    { href: '#contact', text: 'יצירת קשר' },
  ];

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="nav">
      <div className="nav-logo">בית ירח</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
        <li>
          <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
