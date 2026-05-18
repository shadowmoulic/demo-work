/* ==========================================================================
   BODHIH EXECUTIVE TTT - STREAMLINED UX SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initInteractiveCards();
});

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(9, 12, 18, 0.95)';
            navbar.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.background = 'rgba(9, 12, 18, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        navLinks.classList.add('open');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

/* --- Dynamic Spotlight Hover Micro-Interaction --- */
function initInteractiveCards() {
    const cards = document.querySelectorAll('.interactive-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}

function selectBatch(batchName) {
    const formCohort = document.getElementById('formCohort');
    if (formCohort) {
        for (let option of formCohort.options) {
            if (option.value.includes(batchName.split(' • ')[0])) {
                formCohort.value = option.value;
                break;
            }
        }
    }
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
        consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function submitMicroCapture(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const origText = btn.innerHTML;
    
    btn.innerHTML = 'Verifying...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = origText;
        btn.disabled = false;
        e.target.reset();
        showSuccessModal();
    }, 800);
}

function submitConsultation(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const origText = btn.innerHTML;
    
    btn.innerHTML = 'Submitting Request... <span class="arrow">&rarr;</span>';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = origText;
        btn.disabled = false;
        e.target.reset();
        showSuccessModal();
    }, 1000);
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking outside card or pressing escape
window.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('successModal');
        if (modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
