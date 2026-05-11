import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

// --- BOKEH ENGINE ---
function initBokeh() {
  const canvas = document.getElementById('bokeh-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 150 + 50;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < -200 || this.x > canvas.width + 200) this.reset();
      if (this.y < -200 || this.y > canvas.height + 200) this.reset();
    }
    draw() {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
      gradient.addColorStop(0, `rgba(212, 175, 55, ${this.opacity})`);
      gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 15; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
}

// --- LUXURY LIGHT ENGINE & CURSOR ---
function initLightEngine() {
  const cursor = document.getElementById('cursor');
  let mouse = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0 };
  let velocity = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    const dx = mouse.x - lastMouse.x;
    const dy = mouse.y - lastMouse.y;
    velocity = Math.sqrt(dx*dx + dy*dy);
    
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;

    const xPct = (mouse.x / window.innerWidth) * 100;
    const yPct = (mouse.y / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${xPct}%`);
    document.documentElement.style.setProperty('--mouse-y', `${yPct}%`);

    // Magnetic Glitch Effect
    const skew = Math.min(velocity * 0.5, 45);
    const scale = 1 + Math.min(velocity * 0.005, 0.5);
    
    gsap.to(cursor, {
      x: mouse.x,
      y: mouse.y,
      skewX: dx * 0.2,
      skewY: dy * 0.2,
      scaleX: scale,
      scaleY: 1 / scale,
      duration: 0.2,
      ease: 'power2.out'
    });
  });
}

// --- BREATHING TYPOGRAPHY ---
function initBreathingTitle() {
  gsap.fromTo('.breathing-title', 
    { scale: 0.98, letterSpacing: '-0.02em' },
    { 
      scale: 1, 
      letterSpacing: '0.01em', 
      duration: 8, 
      repeat: -1, 
      yoyo: true, 
      ease: 'sine.inOut' 
    }
  );
}

// --- CINEMATIC SCROLL FLOW ---
function initScrollFlow() {
  // Hero Paralax
  gsap.to('.hero-content', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    opacity: 0,
    scale: 0.95
  });

  // Section Fades & Image Zooms
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const text = section.querySelector('h2, p');
    const img = section.querySelector('.luxury-img');

    if (text) {
      gsap.from(text, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 2.5,
        ease: 'power3.out'
      });
    }

    if (img) {
      gsap.to(img, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          scrub: true
        },
        scale: 1,
        y: -30
      });
    }
  });

  // Silk Thread Morphing
  const thread = document.getElementById('thread-path');
  ScrollTrigger.create({
    trigger: '.atmosphere',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      const d = `M0,500 Q250,${500 - p * 400} 500,500 T1000,500`;
      if (thread) thread.setAttribute('d', d);
    }
  });

  // Luxury Seal Drawing
  gsap.to('#seal-path', {
    scrollTrigger: {
      trigger: '#luxury-seal',
      start: 'top 80%',
    },
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut'
  });

  // Zenith De-blur (Smooth Fog Dissolve)
  gsap.to('.zenith-content h2', {
    scrollTrigger: {
      trigger: '.atmosphere',
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1.5,
    },
    filter: 'blur(0px)',
    opacity: 1,
    letterSpacing: '0.05em',
    scale: 1,
    ease: 'none'
  });
}

// --- SILK LOOM PRELOADER ---
function initPreloader() {
  const strands = document.querySelectorAll('.silk-strand');
  const preloader = document.getElementById('preloader');
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = 'auto';
      preloader.style.display = 'none';
      initApp();
    }
  });

  // Prepare strands
  strands.forEach(s => {
    const len = s.getTotalLength();
    s.style.strokeDasharray = len;
    s.style.strokeDashoffset = len;
    s.style.opacity = 1;
  });

  tl.to('#preloader-text', { opacity: 0.5, duration: 0.5 })
    .to(strands, { strokeDashoffset: 0, duration: 1.2, stagger: 0.1, ease: 'power2.inOut' })
    .to(strands, { 
      strokeDashoffset: (i, el) => -el.getTotalLength(), 
      duration: 0.8, 
      ease: 'power2.in',
      stagger: 0.05 
    }, '+=0.2')
    .to(preloader, { opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.3');
}

function initApp() {
  initBokeh();
  initLightEngine();
  initBreathingTitle();
  initScrollFlow();
  gsap.from('main', { opacity: 0, y: 20, duration: 2, ease: 'power3.out' });
}

// --- INITIALIZE ---
window.addEventListener('load', () => {
  initPreloader();
});
