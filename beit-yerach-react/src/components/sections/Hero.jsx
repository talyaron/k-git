import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="video-background">
        <img
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1920&auto=format&fit=crop"
          alt="Sea of Galilee View"
        />
      </div>
      <div className="hero-overlay"></div>
      <canvas ref={canvasRef} id="particles-canvas"></canvas>
      <div className="hero-content">
        <h1>
          בית ירח <small>Beit Yerach High School</small>
        </h1>
        <p>חינוך מעולה ליד המים היפים של כנרת, בעמק הירדן</p>
        <a href="#about" className="cta-button">
          גלה עוד
        </a>
      </div>
    </section>
  );
}
