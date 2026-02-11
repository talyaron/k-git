import './Navigation.css';

export default function Navigation() {
  const navLinks = [
    { href: '#about', text: 'אודות' },
    { href: '#academics', text: 'לימודים' },
    { href: '#activities', text: 'פעילויות' },
    { href: '#community', text: 'קהילה' },
    { href: '#contact', text: 'יצירת קשר' },
  ];

  return (
    <nav className="nav">
      <div className="nav-logo">בית ירח</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
