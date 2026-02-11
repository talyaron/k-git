import ContactItem from '../common/ContactItem';
import './Contact.css';

const contactData = [
  {
    id: 1,
    icon: '📍',
    title: 'כתובת',
    lines: ['עמק הירדן', 'סמוך לכנרת (ים של גליל)', 'ישראל'],
  },
  {
    id: 2,
    icon: '📞',
    title: 'טלפון',
    lines: ['+972 (0)4-XXX-XXXX', 'לתלמידים חדשים', 'שעות: ראשון-חמישי'],
  },
  {
    id: 3,
    icon: '✉️',
    title: 'דוא״ל',
    lines: ['info@beityerach.edu.il', 'admissions@beityerach.edu.il', 'לבדיקות קבלה'],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">יצירת קשר</h2>
      <div className="contact-info">
        {contactData.map((item) => (
          <ContactItem key={item.id} icon={item.icon} title={item.title} lines={item.lines} />
        ))}
      </div>
    </section>
  );
}
