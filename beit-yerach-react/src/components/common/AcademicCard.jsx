import './AcademicCard.css';

export default function AcademicCard({ icon, title, description }) {
  return (
    <div className="academic-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
