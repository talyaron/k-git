import { useEffect, useRef, useState } from 'react';
import './About.css';

const funFacts = [
  {
    icon: '🌊',
    title: '5 דקות מהכנרת',
    text: 'המרחק מבית הספר לחוף. חלק מהתלמידים טוענים שהם "הלכו לשירותים" וחזרו רטובים. אנחנו לא שואלים שאלות.',
    punchline: 'הנוף שווה יותר מאלף מילים במבחן',
  },
  {
    icon: '🌡️',
    title: '300 ימי שמש בשנה',
    text: 'בזמן שתל אביב מתלוננת על הגשם ואילת על החום - אנחנו פשוט מושלמים. כן, אנחנו גם צנועים.',
    punchline: 'ויטמין D בחינם. מרשם רופא לא נדרש',
  },
  {
    icon: '🐟',
    title: 'שיעור ביולוגיה חי',
    text: 'למה ללמוד על דגים מספר כשאפשר ללכת לראות אותם? המורה לביולוגיה אומרת "פתחו ספר" והתלמידים פותחים חלון.',
    punchline: 'הדגים לא נבחנים. הם פשוט שוחים',
  },
  {
    icon: '🏔️',
    title: '210 מטר מתחת לפני הים',
    text: 'גיאוגרפית אנחנו בית הספר הכי נמוך. אקדמית? ההפך הגמור. זה הפרדוקס של בית ירח.',
    punchline: 'נמוכים בגובה, גבוהים בשאיפות',
  },
  {
    icon: '🏛️',
    title: '5,000 שנות היסטוריה',
    text: 'בית ירח זה אתר ארכיאולוגי מתקופת הברונזה. כשמורה ההיסטוריה אומר "בואו נחפור בנושא" - הוא מתכוון את זה ממש.',
    punchline: 'היסטוריה זה לא רק תאריכים. זה גם שכבות אדמה',
  },
  {
    icon: '🧪',
    title: '3 מעבדות מתקדמות',
    text: 'כימיה, פיזיקה וביוטכנולוגיה. הפיצוץ האחרון היה מתוכנן. כנראה. המורה טוען שכן.',
    punchline: 'מה שקורה במעבדה נשאר במעבדה. ובתקרה',
  },
  {
    icon: '🚴',
    title: 'מסלול אופניים צמוד',
    text: 'שיעור ספורט = רכיבה עם נוף לכנרת. יש תלמידים שביקשו ספורט כל יום. המורים סירבו. הרגליים שלהם ביקשו.',
    punchline: 'הכושר עולה, הציונים עולים, הרגליים צועקות',
  },
];

const timelineData = [
  {
    year: '1994',
    title: 'הקמת בית הספר',
    text: 'קבוצה של אנשי חינוך חלמה על בית ספר ליד הכנרת. כולם אמרו "אתם משוגעים". הם אמרו "תודה" - והמשיכו.',
    joke: 'דרישת סף למורים: תואר ראשון + שיגעון מוכח',
  },
  {
    year: '2003',
    title: 'הרחבת הקמפוס',
    text: 'בניין חדש, מעבדות מודרניות, ומגרש ספורט עם נוף שגורם לשחקנים לעצור באמצע המשחק ולצלם.',
    joke: 'המשחק נעצר 4 פעמים בגלל שקיעות. שיא ארצי',
  },
  {
    year: '2015',
    title: 'מצוינות אקדמית',
    text: '95% הצלחה בבגרות. התלמידים הוכיחו שאפשר ללמוד ברמה גבוהה גם בלי לראות בניין של 30 קומות מהחלון.',
    joke: 'הסוד? אין סוד. פשוט מורים מדהימים (ומפחידים)',
  },
  {
    year: '2024',
    title: 'חדשנות ו-AI',
    text: 'מגמת סייבר, בינה מלאכותית ורובוטיקה. הרובוט הראשון שבנינו ניסה לברוח לכנרת. אנחנו לגמרי מבינים אותו.',
    joke: 'גם הרובוטים שלנו מעדיפים חוף על שיעור',
  },
];

const whyUsData = [
  {
    icon: '🏖️',
    title: 'מיקום שפשוט לא הוגן',
    text: 'בתי ספר אחרים מראים סרטוני טבע ב-YouTube. אנחנו פותחים דלת. הכנרת, הגולן, נחל הירדן - הכל כאן. סליחה על ההתרברבות (לא באמת סליחה).',
    joke: 'בית ספר אחר: "הנה תמונה של אגם". אנחנו: "הנה אגם"',
    color: 'blue',
  },
  {
    icon: '🧠',
    title: 'חינוך שלא נרדם ממנו',
    text: '12 מגמות, מסלולים אישיים, ומורים שזוכרים את השם שלך (ואת כל התירוצים שלך מהשנה שעברה).',
    joke: 'ניסינו שיעור משעמם פעם אחת. ב-1997. מורה ההיסטוריה עדיין מתנצל',
    color: 'green',
  },
  {
    icon: '🤝',
    title: 'משפחה (עם פחות ויכוחים)',
    text: 'קהילה אמיתית. עם אירועים, חגיגות, אוכל של הורים באירועים, ומורה שמביא גיטרה למסיבות ואף אחד לא מעז לבקש ממנו להפסיק.',
    joke: 'הויכוח הכי גדול בהיסטוריה: פלאפל או שווארמה בטיול שנתי',
    color: 'orange',
  },
  {
    icon: '🚀',
    title: 'מכינים אתכם לעולם האמיתי',
    text: 'סדנאות יזמות, פרויקטים אמיתיים, וכישורי חיים. הבוגרים שלנו מגיעים לצבא ואנשים שואלים "איפה למדת? אתה יודע דברים!"',
    joke: 'ציטוט בוגר: "בית ירח לימד אותי הכל. חוץ מלקום ב-6 בבוקר"',
    color: 'purple',
  },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function useCounter(target, isVisible) {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!isVisible || animated.current) return;
    animated.current = true;
    let start = null;
    const duration = 2000;

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    }

    requestAnimationFrame(step);
  }, [isVisible, target]);

  return count;
}

function StatBox({ target, label, isVisible }) {
  const count = useCounter(target, isVisible);
  return (
    <div className="about-stat">
      <span className="stat-number">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function TimelineItem({ year, title, text, joke, index }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`timeline-item ${isVisible ? 'visible' : ''} ${index % 2 === 0 ? 'even' : 'odd'}`}
    >
      <div className="timeline-dot" />
      <div className="timeline-card">
        <span className="timeline-year">{year}</span>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="timeline-joke">{joke}</div>
      </div>
    </div>
  );
}

export default function About() {
  const [headerRef, headerVisible] = useInView();
  const [introRef, introVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  const [timelineHeaderRef, timelineHeaderVisible] = useInView();
  const [whyRef, whyVisible] = useInView();

  return (
    <section id="about" className="about-section">
      {/* Header */}
      <div ref={headerRef} className={`section-header ${headerVisible ? 'visible' : ''}`}>
        <span className="section-label">מי אנחנו (באמת)</span>
        <h2 className="section-title">אודות בית ירח</h2>
        <p className="section-subtitle">
          בית ספר שבו הכנרת היא לוח המודעות, השמש היא השעון, והטבע הוא המורה הכי ותיק (ועקשן)
        </p>
      </div>

      {/* Intro */}
      <div ref={introRef} className={`about-intro ${introVisible ? 'visible' : ''}`}>
        <div className="about-text">
          <p className="lead">
            בית ירח היא לא סתם עוד בית ספר עם מצגת PowerPoint יפה. היא מקום שבו תלמידים מגלים מי
            הם באמת, ליד אגם שקיים כבר 5,000 שנה (אז כן, הוא ראה הכל. גם את ה-TikTok שלכם).
          </p>
          <p>
            אנחנו משלבים בין לימודים ברמה הגבוהה ביותר לבין חוויות שטח שגורמות לבתי ספר אחרים לבכות
            מקנאה. כי בואו נודה - קשה ללמד ביולוגיה ימית כשהים הכי קרוב אליך הוא שלולית בחצר.
          </p>
          <div className="about-highlight">
            <p>
              <strong>הפילוסופיה שלנו:</strong> חינוך צריך לפתוח חלונות, לא לסגור דלתות. תלמיד שלומד
              ליד הכנרת לומד פי שניים. ותלמיד שרואה את הנוף מהחלון - פשוט לא ממציא תירוצים לברוח
              מהשיעור. (לרוב. אנחנו ריאליסטיים.)
            </p>
          </div>
          <p>
            ממוקמים על גבעה עם נוף שמוכיח שמישהו למעלה אוהב אותנו, אנחנו מעניקים לתלמידים חוויה
            שממזגת בין חוכמה עתיקה לחדשנות מודרנית. זה כמו לשלב את ויקיפדיה עם טיול שנתי - רק
            שאצלנו זה כל יום, ובלי הפופ-אפים של "תרמו לויקיפדיה".
          </p>
        </div>
        <div className="about-visual">
          <div ref={statsRef} className="about-visual-card">
            <h3>המספרים מדברים</h3>
            <p className="visual-subtitle">(ואנחנו לא ממציאים. טוב, אולי עיגלנו קצת)</p>
            <div className="about-stats">
              <StatBox target={30} label="שנות ניסיון" isVisible={statsVisible} />
              <StatBox target={95} label="% הצלחה בבגרות" isVisible={statsVisible} />
              <StatBox target={50} label="מורים מקצועיים" isVisible={statsVisible} />
              <StatBox target={12} label="מגמות לימוד" isVisible={statsVisible} />
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts Marquee */}
      <div className="funfacts-wrapper">
        <div className="funfacts-track">
          {[...funFacts, ...funFacts].map((fact, i) => (
            <div className="funfact-card" key={i}>
              <span className="funfact-icon">{fact.icon}</span>
              <h4>{fact.title}</h4>
              <p>{fact.text}</p>
              <div className="funfact-punchline">{fact.punchline}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="about-timeline">
        <div ref={timelineHeaderRef} className={`section-header mini ${timelineHeaderVisible ? 'visible' : ''}`}>
          <span className="section-label">ציר הזמן</span>
          <h3 className="timeline-heading">הסיפור שלנו</h3>
          <p className="section-subtitle">
            מהתחלה של "אתם משוגעים" ועד "איפה נרשמים?" - הדרך הייתה שווה כל רגע
          </p>
        </div>
        {timelineData.map((item, i) => (
          <TimelineItem key={item.year} index={i} {...item} />
        ))}
      </div>

      {/* Why Us */}
      <div ref={whyRef} className={`about-why-us ${whyVisible ? 'visible' : ''}`}>
        <h3 className="why-title">למה דווקא בית ירח?</h3>
        <p className="why-subtitle">כי יש הבדל בין ללמוד לבין להישאר ער בזמן שלומדים</p>
        <div className="why-grid">
          {whyUsData.map((card, i) => (
            <div className={`why-card why-card--${card.color}`} key={i}>
              <span className="why-icon">{card.icon}</span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <div className="why-joke">{card.joke}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
