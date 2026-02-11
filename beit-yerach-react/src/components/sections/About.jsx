import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">אודות בית ירח</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            בית ירח היא בית ספר תיכון מובנה המוקדש לחינוך איכותי במקום המיוחד של עמק
            הירדן, סמוך לכנרת. המכללה משלבת בין לימודים מתקדמים ופעילויות חברתיות
            באמצע הטבע.
          </p>
          <div className="about-highlight">
            <p>
              <strong>תשומת לב:</strong> בתנובת בית הספר תושם דגש על פתיחת חלונות לעולם דרך
              חקר, טבע וחברה. תלמידינו לומדים בסביבה שמעורה משהו מיוחד ומשפיע.
            </p>
          </div>
          <p>
            ממוקמים על גבעה המשקיפה אל כנרת, אנחנו מעניקים לתלמידים חוויה חינוכית ייחודית
            הממזגת בין הלימודים העתיקים לחדשנות.
          </p>
        </div>
        <div className="about-highlight">
          <h3>🌊 מיקום ייחודי</h3>
          <p>סמוך לכנרת (ים של גליל)</p>
          <p className="secondary">עמק הירדן היפה</p>
          <p className="highlight-text">תלמידים מכל רחבי הארץ</p>
        </div>
      </div>
    </section>
  );
}
