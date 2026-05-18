/* ==========================================================================
   NV Classes - Interactive Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initNavbarScroll();
    initMobileMenu();
    initInteractiveHover();
});

/* 1. Custom Animated Cursor */
function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dot.style.top = `${mouseY}px`;
        dot.style.left = `${mouseX}px`;
    });

    // Smooth trailing animation for ring using requestAnimationFrame
    function renderCursor() {
        // Easing factor for ring trailing
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.top = `${ringY}px`;
        ring.style.left = `${ringX}px`;

        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Add interactive hover states
    const interactiveSelectors = 'a, button, input, select, textarea, .course-card, .result-card, .why-card, .faq-header, .video-preview';
    const interactives = document.querySelectorAll(interactiveSelectors);

    interactives.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}

/* 2. Sticky Navbar Scroll Effect */
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

/* 3. Mobile Menu Toggle */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        toggleBtn.innerHTML = isOpen ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-line"></i>';
    });

    // Close menu when link is clicked
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
        });
    });
}

/* 4. Testimonial Tab Switching */
function switchTab(tabId) {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    if (tabId === 'parents') {
        tabButtons[0].classList.add("active");
        document.getElementById("parents-tab").classList.add("active");
    } else {
        tabButtons[1].classList.add("active");
        document.getElementById("students-tab").classList.add("active");
    }
}

/* 5. FAQ Accordion Toggle */
function toggleFaq(headerEl) {
    const itemEl = headerEl.parentElement;
    const bodyEl = headerEl.nextElementSibling;

    const isActive = itemEl.classList.contains("active");

    // Close all other FAQs in accordion for clean UX
    document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-body").style.maxHeight = null;
    });

    if (!isActive) {
        itemEl.classList.add("active");
        bodyEl.style.maxHeight = bodyEl.scrollHeight + 30 + "px";
    }
}

/* 6. Modal Management */
function openModal(type = 'counselling', prefillCourse = 'IIT-JEE') {
    const modal = document.getElementById("cta-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalCourse = document.getElementById("modal-course");

    if (!modal) return;

    if (type === 'admission') {
        modalTitle.textContent = "Apply for NV Admission Test";
        modalDesc.textContent = "Take the first step towards securing your child's seat in Bangalore's premier competitive coaching batches.";
    } else {
        modalTitle.textContent = "Book Free Expert Counselling";
        modalDesc.textContent = "Speak directly with our academic directors to chart out the perfect success roadmap for your child.";
    }

    if (modalCourse && prefillCourse) {
        // match select option if possible
        for (let i = 0; i < modalCourse.options.length; i++) {
            if (modalCourse.options[i].value.includes(prefillCourse)) {
                modalCourse.selectedIndex = i;
                break;
            }
        }
    }

    modal.classList.add("open");
}

function closeModal() {
    const modal = document.getElementById("cta-modal");
    if (modal) modal.classList.remove("open");
}

/* Close modal on ESC key or clicking outside */
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

document.addEventListener("click", (e) => {
    const modal = document.getElementById("cta-modal");
    if (modal && e.target === modal) {
        closeModal();
    }
});

/* 7. Form Handlers & Toast Notification */
function handleFormSubmit(e) {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById("admission-form");

    submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = 'Submit Request <i class="ri-send-plane-fill"></i>';
        submitBtn.disabled = false;
        form.reset();
        showToast("Application Submitted Successfully!", "Our academic counselor will contact you via WhatsApp within 2 hours.");
    }, 1200);
}

function handleModalSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("modal-form");
    const button = form.querySelector("button[type='submit']");

    button.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Confirming...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = 'Confirm Booking <i class="ri-check-line"></i>';
        button.disabled = false;
        closeModal();
        form.reset();
        showToast("Counselling Session Confirmed!", "We have received your details. An SMS and WhatsApp confirmation has been dispatched.");
    }, 1200);
}

function showToast(titleText, descText) {
    const toast = document.getElementById("success-toast");
    if (!toast) return;

    toast.querySelector("h4").textContent = titleText;
    toast.querySelector("p").textContent = descText;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 5000);
}

/* 8. Video Player Modal Simulation */
function playVideoModal(videoUrl) {
    showToast("Starting High-Quality Video Stream", "Loading parent experience video testimony...");
}

/* Dynamic Hover Helper for Premium Feel */
function initInteractiveHover() {
    // Add micro-tilt to topper and campus cards
    const tiltCards = document.querySelectorAll(".media-card, .campus-card");
    tiltCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (y - centerY) / 25;
            const tiltY = (centerX - x) / 25;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s ease";
        });

        card.addEventListener("mouseenter", () => {
            card.style.transition = "none";
        });
    });
}
