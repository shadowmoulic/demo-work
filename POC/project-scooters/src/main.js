import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const cursor = document.getElementById('pencil-cursor');
const scooterWrapper = document.querySelector('.scooter-wrapper');
const slides = document.querySelectorAll('.story-slide');
const svg = document.getElementById('scooter-svg');

// --- CURSOR LOGIC ---
window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out'
  });
});

// --- SCROLLYTELLING LOGIC ---
function initScrollytelling() {
  // SVG Initial Draw
  const paths = svg.querySelectorAll('path, circle');
  paths.forEach(path => {
    const length = path instanceof SVGCircleElement ? 2 * Math.PI * path.r.baseVal.value : path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 4,
      ease: 'power4.inOut'
    });
  });

  // Main Pinning and Movement
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.story-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5 // Smoother scrub
    }
  });

  // Shift scooter to the left and add subtle 3D rotation
  tl.to(scooterWrapper, {
    x: -200,
    rotateY: -15,
    rotateX: 5,
    scale: 0.9,
    ease: 'none'
  });

  // Animate Data Tags
  gsap.to('.data-tag', {
    scrollTrigger: {
      trigger: '#slide-1',
      start: 'top center',
      end: 'bottom top',
      toggleActions: 'play reverse play reverse'
    },
    opacity: 1,
    y: -20,
    stagger: 0.1,
    duration: 1
  });

  // Slide Activations
  slides.forEach((slide, i) => {
    // Make the first slide active by default
    if (i === 0) slide.classList.add('active');

    ScrollTrigger.create({
      trigger: slide,
      start: 'top 80%', // Triggers much earlier
      end: 'bottom 20%',
      onEnter: () => slide.classList.add('active'),
      onLeave: () => { if(i !== 0 || window.scrollY > 100) slide.classList.remove('active') },
      onEnterBack: () => slide.classList.add('active'),
      onLeaveBack: () => slide.classList.remove('active')
    });
  });
}

// --- TECHNICAL VISUALIZATION (Alpha Core Neural Grid) ---
function initTechViz() {
  const viz = document.getElementById('tech-viz');
  if (!viz) return;

  viz.innerHTML = ''; // Clear placeholder
  
  // Create a high-density neural grid
  const cols = 25;
  const rows = 15;
  
  for (let i = 0; i < cols * rows; i++) {
    const dot = document.createElement('div');
    dot.className = 'neural-dot';
    dot.style.position = 'absolute';
    dot.style.width = '2px';
    dot.style.height = '2px';
    dot.style.background = 'var(--accent-color)';
    dot.style.borderRadius = '50%';
    dot.style.opacity = '0.1';
    
    const x = (i % cols) * (100 / cols);
    const y = Math.floor(i / cols) * (100 / rows);
    
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    viz.appendChild(dot);
  }

  // Animate dots on scroll
  gsap.to('.neural-dot', {
    scrollTrigger: {
      trigger: viz,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    },
    opacity: 0.8,
    scale: 3,
    stagger: {
      amount: 2,
      grid: [rows, cols],
      from: 'center'
    }
  });

  // Random "Data Pulses"
  setInterval(() => {
    const dots = document.querySelectorAll('.neural-dot');
    const randomIdx = Math.floor(Math.random() * dots.length);
    gsap.fromTo(dots[randomIdx], 
      { opacity: 1, scale: 5, backgroundColor: '#fff' },
      { opacity: 0.1, scale: 1, backgroundColor: 'var(--accent-color)', duration: 1 }
    );
  }, 100);
}

// --- INITIALIZE ---
window.onload = () => {
  initScrollytelling();
  initTechViz();
};
