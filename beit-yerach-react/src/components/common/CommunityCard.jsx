import './CommunityCard.css';

export default function CommunityCard({ emoji, title, description }) {
  return (
    <div className="community-card">
      <h3>
        {emoji} {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
