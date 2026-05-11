import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURATION ---
const CONFIG = {
  particleCount: 12000,
  glowColor: '#FF1A1A',
  pulseRadius: 8,
  mouseEase: 0.08
};

// --- THREE.JS ENGINE ---
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

camera.position.z = 12;

// Pulse Particles
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(CONFIG.particleCount * 3);
const colors = new Float32Array(CONFIG.particleCount * 3);
const sizes = new Float32Array(CONFIG.particleCount);

const color = new THREE.Color(CONFIG.glowColor);

for (let i = 0; i < CONFIG.particleCount; i++) {
  const i3 = i * 3;
  // Spherical distribution
  const phi = Math.acos(-1 + (2 * i) / CONFIG.particleCount);
  const theta = Math.sqrt(CONFIG.particleCount * Math.PI) * phi;
  
  const radius = Math.random() * CONFIG.pulseRadius;
  
  positions[i3] = Math.cos(theta) * Math.sin(phi) * radius;
  positions[i3 + 1] = Math.sin(theta) * Math.sin(phi) * radius;
  positions[i3 + 2] = Math.cos(phi) * radius;
  
  colors[i3] = color.r;
  colors[i3 + 1] = color.g;
  colors[i3 + 2] = color.b;
  
  sizes[i] = Math.random() * 1.5;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const material = new THREE.PointsMaterial({
  size: 0.02,
  vertexColors: true,
  transparent: true,
  opacity: 0.4,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// --- SCROLL ANIMATIONS ---
function initScrollFlow() {
  // Kinetic Hero Text
  gsap.to('.kinetic-title', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    x: 200,
    opacity: 0,
    skewX: 20,
    scale: 1.2
  });

  // Horizontal Scroll for Core Systems
  const horizontalSection = document.querySelector('.horizontal-scroll');
  gsap.to(horizontalSection, {
    xPercent: -75,
    ease: "none",
    scrollTrigger: {
      trigger: ".core-systems",
      pin: true,
      scrub: 1,
      end: () => "+=" + horizontalSection.offsetWidth
    }
  });

  // Pulse Intensity on Scroll
  gsap.to(material, {
    opacity: 1,
    size: 0.04,
    scrollTrigger: {
      trigger: '.manifesto',
      start: 'top center',
      end: 'bottom top',
      scrub: true
    }
  });

  // Particle Rotation Acceleration
  gsap.to(particles.rotation, {
    y: Math.PI * 4,
    scrollTrigger: {
      trigger: '#smooth-content',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    }
  });
}

// --- WARP SEQUENCE ---
document.getElementById('submit-btn').addEventListener('click', () => {
  const overlay = document.getElementById('warp-overlay');
  const modal = document.getElementById('warp-modal');
  
  // 01. Screen Shake & Audio
  gsap.to('main', { x: 'random(-10, 10)', y: 'random(-10, 10)', duration: 0.1, repeat: 10, yoyo: true });
  
  // Create warp sound
  const warpOsc = new (window.AudioContext || window.webkitAudioContext)();
  const osc = warpOsc.createOscillator();
  const gain = warpOsc.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(40, warpOsc.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, warpOsc.currentTime + 1.5);
  gain.gain.setValueAtTime(0.2, warpOsc.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, warpOsc.currentTime + 2);
  osc.connect(gain);
  gain.connect(warpOsc.destination);
  osc.start();
  osc.stop(warpOsc.currentTime + 2);

  // 02. Hyperspace Jump
  gsap.to(camera.position, { z: -50, duration: 2, ease: 'power4.in' });
  gsap.to(particles.scale, { x: 10, y: 10, z: 10, duration: 2, ease: 'power4.in' });
  gsap.to(material, { opacity: 0, duration: 1.5, delay: 0.5 });

  // 03. Reveal Modal
  setTimeout(() => {
    overlay.style.display = 'flex';
    gsap.to(modal, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' });
    
    // Generate tracer ID
    document.getElementById('tracer-id').innerText = `TRACER_ID: ${Math.random().toString(16).slice(2, 8).toUpperCase()}-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;
  }, 1800);
});

// --- RENDER LOOP ---
const state = {
  mouse: { x: 0, y: 0 },
  targetMouse: { x: 0, y: 0 },
  time: 0
};

window.addEventListener('mousemove', (e) => {
  state.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  state.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
  state.time += 0.005;
  requestAnimationFrame(animate);
  
  state.mouse.x += (state.targetMouse.x - state.mouse.x) * CONFIG.mouseEase;
  state.mouse.y += (state.targetMouse.y - state.mouse.y) * CONFIG.mouseEase;
  
  particles.rotation.y += 0.001;
  particles.rotation.x = state.mouse.y * 0.1;
  particles.rotation.z = state.mouse.x * 0.1;
  
  // Dynamic Pulse Wave
  const pos = particles.geometry.attributes.position.array;
  for (let i = 0; i < CONFIG.particleCount; i++) {
    const i3 = i * 3;
    const x = pos[i3];
    const y = pos[i3 + 1];
    const z = pos[i3 + 2];
    const dist = Math.sqrt(x*x + y*y + z*z);
    
    const wave = Math.sin(state.time * 2 + dist * 0.5) * 0.002;
    pos[i3] += x * wave;
    pos[i3 + 1] += y * wave;
    pos[i3 + 2] += z * wave;
  }
  particles.geometry.attributes.position.needsUpdate = true;
  
  renderer.render(scene, camera);
}

// --- INITIALIZE ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

initScrollFlow();
animate();
