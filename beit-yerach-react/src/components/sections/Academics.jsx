import AcademicCard from '../common/AcademicCard';
import './Academics.css';

const academicsData = [
  {
    id: 1,
    icon: '📚',
    title: 'מדעי הטבע',
    description: 'חקר בעלי חיים, צומח ותופעות טבעיות בסביבה שלנו. שילוב בין תיאוריה לעבודה מעשית בשטח.',
  },
  {
    id: 2,
    icon: '🔬',
    title: 'מדעים וטכנולוגיה',
    description:
      'למידה מדעית מקדמת עם מעבדות מודרניות וציוד טכנולוגי. החוקרים יכולים לבחור בתבחני מתקדמים.',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'מנהיגות ותיכנון',
    description:
      'פיתוח כישורים מנהיגותיים דרך פרויקטים קהילתיים, התנדבות וחירותים של עתיד.',
  },
  {
    id: 4,
    icon: '🌍',
    title: 'לימודי תרבות',
    description:
      'הבנת תיאום בין תרבויות, קריאה עמוקה של טקסטים וביטוי יצירתי דרך אומנות.',
  },
  {
    id: 5,
    icon: '💻',
    title: 'דיגיטל ותכנות',
    description: 'אתרים, אפליקציות ובעיות חישוביות. למידה דרך עשייה במסגרת פרויקטים אמיתיים.',
  },
  {
    id: 6,
    icon: '🎨',
    title: 'אומנות וביטוי',
    description: 'צילום, ציור, מוזיקה ותיאטרון. פתח את הכישרון שלך בתחום הבנתך.',
  },
];

export default function Academics() {
  return (
    <section id="academics" className="academics">
      <h2 className="section-title">לימודים מעולים</h2>
      <div className="academic-grid">
        {academicsData.map((item) => (
          <AcademicCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
