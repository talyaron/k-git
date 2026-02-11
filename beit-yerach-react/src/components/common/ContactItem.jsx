import './ContactItem.css';

export default function ContactItem({ icon, title, lines }) {
  return (
    <div className="contact-item">
      <h3>
        {icon} {title}
      </h3>
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
}
