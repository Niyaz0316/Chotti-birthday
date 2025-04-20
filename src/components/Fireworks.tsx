
import { useEffect, useRef } from 'react';

export const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const fireworks: any[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.alpha = 1;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1;
        this.alpha -= 0.01;
      }
    }

    function createFirework() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.5); // Launch fireworks in upper half
      const colors = ['#ff69b4', '#7b68ee', '#ffd700', '#ff6347', '#00ff7f', '#ff1493', '#00ffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      for (let i = 0; i < 100; i++) { // Increased particle count
        particles.push(new Particle(x, y, color));
      }
    }

    let lastFirework = 0;

    function animate(timestamp: number) {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastFirework > 300) { // Increased frequency
        createFirework();
        lastFirework = timestamp;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].draw();
        particles[i].update();

        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      particles.length = 0;
      fireworks.length = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};
