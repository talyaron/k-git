import CommunityCard from '../common/CommunityCard';
import './Community.css';

const communityData = [
  {
    id: 1,
    emoji: '👨‍🎓',
    title: 'הסטודנטים',
    description:
      'תלמידים מחוננים וממוטיבים מכל רחבי הארץ, האם החדשנות וגם המסורת. מקום שהם יכולים להיות עצמם ולהתפתח.',
  },
  {
    id: 2,
    emoji: '👩‍🏫',
    title: 'הקבוצה הפדגוגית',
    description: 'מחנכות וחינוכים מנוסים שמאמינים בכל סטודנט ויעבדו לפי המוקד שלהם ושלהם בהצלחה.',
  },
  {
    id: 3,
    emoji: '👨‍👩‍👧‍👦',
    title: 'משפחות וחברה',
    description:
      'הורים תומכים וקשרים עם הקהילה המקומית. בית ירח היא למעשה משפחה שנבנתה על בסיס ערכים מקדש.',
  },
];

export default function Community() {
  return (
    <section id="community" className="community">
      <h2 className="section-title">הקהילה שלנו</h2>
      <div className="community-grid">
        {communityData.map((item) => (
          <CommunityCard key={item.id} emoji={item.emoji} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
