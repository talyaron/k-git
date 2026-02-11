import './ActivityItem.css';

export default function ActivityItem({ icon, title, description }) {
  return (
    <div className="activity-item">
      <div className="activity-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
