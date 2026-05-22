// GATE IIT Redesign JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Courses Tab Switcher (Category filter) ---
    const courseTabLinks = document.querySelectorAll('.course-tab-link');
    const courseContainers = document.querySelectorAll('.courses-list-container');

    if (courseTabLinks.length > 0 && courseContainers.length > 0) {
        courseTabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Deactivate all tab headers
                courseTabLinks.forEach(b => b.classList.remove('active'));
                // Activate clicked tab
                link.classList.add('active');

                // Deactivate all lists
                courseContainers.forEach(container => container.classList.remove('active'));

                // Get target list ID and activate it
                const category = link.getAttribute('data-category');
                const targetList = document.getElementById(`${category}-list`);
                if (targetList) {
                    targetList.classList.add('active');
                }
            });
        });
    }

    // --- Faculty Showcase Pagination (Load More) ---
    const facultyCards = document.querySelectorAll('.faculty-minimalist-grid .faculty-minimal-card');
    const loadMoreFacultyBtn = document.getElementById('loadMoreFaculty');

    if (facultyCards.length > 8 && loadMoreFacultyBtn) {
        // Initially hide cards beyond index 7 (first 8)
        for (let i = 8; i < facultyCards.length; i++) {
            facultyCards[i].style.display = 'none';
        }

        loadMoreFacultyBtn.addEventListener('click', () => {
            const isExpanding = loadMoreFacultyBtn.getAttribute('data-expanded') === 'false';
            
            if (isExpanding) {
                // Show all
                facultyCards.forEach(card => card.style.display = '');
                loadMoreFacultyBtn.innerHTML = 'Show Less Faculty <i class="fa-solid fa-chevron-up"></i>';
                loadMoreFacultyBtn.setAttribute('data-expanded', 'true');
            } else {
                // Hide beyond 8
                for (let i = 8; i < facultyCards.length; i++) {
                    facultyCards[i].style.display = 'none';
                }
                loadMoreFacultyBtn.innerHTML = 'View All 13 Elite Faculty Members <i class="fa-solid fa-chevron-down"></i>';
                loadMoreFacultyBtn.setAttribute('data-expanded', 'false');
                
                // Scroll back to faculty header
                const facultySection = document.getElementById('faculty');
                if (facultySection) {
                    facultySection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question-simple');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            const answer = question.nextElementSibling;

            // Close all open FAQs
            document.querySelectorAll('.faq-item-simple').forEach(item => {
                item.classList.remove('active');
                const itemAnswer = item.querySelector('.faq-answer-simple');
                if (itemAnswer) {
                    itemAnswer.style.maxHeight = null;
                }
            });

            if (!isActive) {
                faqItem.classList.add('active');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
        });
    });

    // --- Lead Form Handler & WhatsApp Redirection ---
    const leadFormFooter = document.getElementById('leadFormFooter');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

    let latestSubmissionData = null;

    function handleLeadFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        
        // Gather data
        const name = form.querySelector('[name="name"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim();
        const course = form.querySelector('[name="course"]').value;
        const location = form.querySelector('[name="location"]') ? form.querySelector('[name="location"]').value : 'JP Nagar Campus';
        
        // Phone Validation (simple 10 digit)
        const cleanPhone = phone.replace(/[^0-9]/g, '');
        if (cleanPhone.length < 10) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        latestSubmissionData = { name, phone: cleanPhone, course, location };

        // Show Success Modal
        if (successModal) {
            successModal.classList.add('active');
        }

        form.reset();
    }

    if (leadFormFooter) {
        leadFormFooter.addEventListener('submit', handleLeadFormSubmit);
    }

    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }

    if (modalWhatsAppBtn) {
        modalWhatsAppBtn.addEventListener('click', () => {
            if (latestSubmissionData) {
                const { name, course, location } = latestSubmissionData;
                
                // Formulate message
                const message = `Hi GATE IIT, my name is ${name}. I am looking to join the ${course} coaching batch in ${location}. Please provide counselling details and class timings.`;
                
                // URL encode
                const encodedText = encodeURIComponent(message);
                
                // Redirect to official GATE IIT primary number (+918867329839)
                const waUrl = `https://wa.me/918867329839?text=${encodedText}`;
                
                // Close modal and redirect
                successModal.classList.remove('active');
                window.open(waUrl, '_blank');
            }
        });
    }

    // Close modal clicking outside content
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }
});
