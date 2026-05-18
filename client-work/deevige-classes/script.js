/**
 * Deevige Classes Pvt Ltd - Premium EdTech Landing Page Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initModals();
    initFAQ();
    initStatsCounters();
});

/* ==========================================================================
   1. NAVBAR SCROLL & ACTIVE LINK EFFECTS
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id], header[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Scrolled styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlight
        let currentSectionId = '';
        if (window.scrollY < 100) {
            currentSectionId = 'hero';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });
        }

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ==========================================================================
   2. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

/* ==========================================================================
   3. MODAL DIALOG MANAGEMENT
   ========================================================================== */
function initModals() {
    const modalTriggerBtns = document.querySelectorAll('.open-modal-btn');
    const modalCloseElements = document.querySelectorAll('.modal-close');
    const modal = document.getElementById('enrollModal');
    const courseSelect = document.getElementById('modalCourseSelect');

    modalTriggerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const coursePref = btn.getAttribute('data-course');
            if (coursePref && courseSelect) {
                courseSelect.value = coursePref;
            }
            if (modal) {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Prevent bg scrolling
            }
        });
    });

    modalCloseElements.forEach(elem => {
        elem.addEventListener('click', () => {
            closeModal();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('enrollModal');
    if (modal && modal.classList.contains('open')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/* ==========================================================================
   4. FAQ ACCORDION HANDLER
   ========================================================================== */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Optional: Close all other open accordions
            faqQuestions.forEach(q => q.setAttribute('aria-expanded', 'false'));

            // Toggle current
            question.setAttribute('aria-expanded', !isExpanded);
        });
    });
}

/* ==========================================================================
   5. NUMBER COUNTERS ON SCROLL
   ========================================================================== */
function initStatsCounters() {
    const counters = document.querySelectorAll('.stat-count');
    const speed = 200; // Lower is faster

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / speed;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count) + '+';
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = (target >= 1000 ? target.toLocaleString() : target) + (target === 98 ? '%' : '+');
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                obs.unobserve(entry.target); // Only count once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   6. FORM SUBMISSIONS & TOAST MANAGEMENT
   ========================================================================== */
function handleFormSubmit(event, formId) {
    event.preventDefault();
    const form = document.getElementById(formId);

    // Close modal if submitted from modal
    if (formId === 'modalLeadForm') {
        closeModal();
    }

    if (form) {
        form.reset();
    }

    showToast();
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput) {
        emailInput.value = '';
    }
    showToast();
}

function showToast() {
    const toast = document.getElementById('successToast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
            closeToast();
        }, 5000);
    }
}

function closeToast() {
    const toast = document.getElementById('successToast');
    if (toast && toast.classList.contains('show')) {
        toast.classList.remove('show');
    }
}
