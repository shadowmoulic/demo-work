/* ==========================================================================
   EXCEL ACADEMICS - Interactive Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initNavbarScroll();
    initMobileMenu();
    initCustomCursor();
});

/* 1. Sticky Navbar Scroll Effect */
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

/* Custom Animated Cursor */
function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function render() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, label, .faq-head, .res-tab-btn, .course-card");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}

/* 2. Mobile Menu Toggle */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        toggleBtn.innerHTML = isOpen ? '<i class="ri-close-fill"></i>' : '<i class="ri-menu-line"></i>';
    });

    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
        });
    });
}

/* 3. Results Filtering */
function filterResults(category) {
    const tabButtons = document.querySelectorAll(".res-tab-btn");
    tabButtons.forEach(btn => btn.classList.remove("active"));

    const neetGallery = document.getElementById("neet-results-gallery");
    const kcetGallery = document.getElementById("kcet-results-gallery");

    if (category === 'neet') {
        tabButtons[0].classList.add("active");
        if (neetGallery) neetGallery.style.display = "block";
        if (kcetGallery) kcetGallery.style.display = "none";
    } else if (category === 'kcet') {
        tabButtons[1].classList.add("active");
        if (neetGallery) neetGallery.style.display = "none";
        if (kcetGallery) kcetGallery.style.display = "block";
    } else {
        tabButtons[2].classList.add("active");
        if (neetGallery) neetGallery.style.display = "block";
        if (kcetGallery) kcetGallery.style.display = "block";
    }
}

/* 4. Testimonial Tab Switching */
function switchTesti(mode) {
    const tButtons = document.querySelectorAll(".t-btn");
    const sStories = document.getElementById("students-stories");
    const pStories = document.getElementById("parents-stories");

    tButtons.forEach(btn => btn.classList.remove("active"));

    if (mode === 'students') {
        tButtons[0].classList.add("active");
        if (sStories) sStories.style.display = "block";
        if (pStories) pStories.style.display = "none";
    } else {
        tButtons[1].classList.add("active");
        if (sStories) sStories.style.display = "none";
        if (pStories) pStories.style.display = "block";
    }
}

/* 5. FAQ Accordion Toggle */
function toggleFaq(headEl) {
    const cardEl = headEl.parentElement;
    const bodyEl = headEl.nextElementSibling;

    const isActive = cardEl.classList.contains("active");

    document.querySelectorAll(".faq-card").forEach(card => {
        card.classList.remove("active");
        card.querySelector(".faq-body").style.maxHeight = null;
    });

    if (!isActive) {
        cardEl.classList.add("active");
        bodyEl.style.maxHeight = bodyEl.scrollHeight + 30 + "px";
    }
}

/* 6. Modal Management */
function openModal(type = 'counselling', prefillCourse = '') {
    const modal = document.getElementById("custom-modal");
    const mHead = document.getElementById("m-heading");
    const mSub = document.getElementById("m-sub");
    const mCourse = document.getElementById("m-course");

    if (!modal) return;

    if (type === 'crash') {
        mHead.textContent = "Apply for NEET / KCET Crash Course 2026";
        mSub.textContent = "Secure early admission into our intensive Re-NEET and short-term repeater batches.";
    } else {
        mHead.textContent = "Book Free Expert Counselling Session";
        mSub.textContent = "Connect with our senior academic directors to chart out the perfect success roadmap.";
    }

    if (mCourse && prefillCourse) {
        for (let i = 0; i < mCourse.options.length; i++) {
            if (mCourse.options[i].text.toLowerCase().includes(prefillCourse.toLowerCase()) ||
                mCourse.options[i].value.toLowerCase().includes(prefillCourse.toLowerCase())) {
                mCourse.selectedIndex = i;
                break;
            }
        }
    }

    modal.classList.add("open");
}

function closeModal() {
    const modal = document.getElementById("custom-modal");
    if (modal) modal.classList.remove("open");
}

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

document.addEventListener("click", (e) => {
    const modal = document.getElementById("custom-modal");
    if (modal && e.target === modal) {
        closeModal();
    }
});

/* 7. Form Handlers & Toast Popup */
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById("formSubmitBtn");
    const form = document.getElementById("lead-form");

    btn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Submitting Inquiry...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Submit Admission Inquiry <i class="ri-send-plane-fill"></i>';
        btn.disabled = false;
        form.reset();
        showToast("Inquiry Submitted Successfully!", "Our admission counselor will reach out via WhatsApp / Call within 2 hours.");
    }, 1200);
}

function handleModalSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("modal-form");
    const btn = form.querySelector("button[type='submit']");

    btn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Reserving Seat...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Confirm Reservation <i class="ri-check-line"></i>';
        btn.disabled = false;
        closeModal();
        form.reset();
        showToast("Reservation Confirmed!", "We have successfully registered your inquiry. Confirmation dispatched via SMS.");
    }, 1200);
}

function showToast(titleText, descText) {
    const toast = document.getElementById("toast-msg");
    if (!toast) return;

    toast.querySelector("h4").textContent = titleText;
    toast.querySelector("p").textContent = descText;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 5000);
}
