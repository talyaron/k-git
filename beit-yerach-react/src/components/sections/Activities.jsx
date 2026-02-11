import ActivityItem from '../common/ActivityItem';
import './Activities.css';

const activitiesData = [
  {
    id: 1,
    icon: '🏕️',
    title: 'טיולים וקמפינג',
    description: 'חוקרים את הטבע של הגליל בטיולים בשטח וקמפים הנוצרים זיכרונות של חיים.',
  },
  {
    id: 2,
    icon: '🏐',
    title: 'ספורט וכושר',
    description: 'כדורעף, כדורסל, הליכה, יוגה וטיולי אופניים לאורך הכנרת.',
  },
  {
    id: 3,
    icon: '🎭',
    title: 'תיאטרון ותרבות',
    description: 'קבוצות בימה, הצגות חיות ואירועי תרבות במהלך השנה.',
  },
  {
    id: 4,
    icon: '🤝',
    title: 'התנדבות קהילתית',
    description: 'פרויקטים צדקה, עזרה לקהילה מקומית ותרומה חברתית משמעותית.',
  },
  {
    id: 5,
    icon: '🎵',
    title: 'מוזיקה ואומנות',
    description: 'להקה, כור זמר, סדנאות אומנות וקונצרטים סטודנטים.',
  },
  {
    id: 6,
    icon: '🌱',
    title: 'משמר וסביבה',
    description: 'פרויקטים סביבתיים, גינת צמחי מרפא וקיימות ירוקה.',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="activities">
      <h2 className="section-title">פעילויות וחוויות</h2>
      <div className="activities-grid">
        {activitiesData.map((item) => (
          <ActivityItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
