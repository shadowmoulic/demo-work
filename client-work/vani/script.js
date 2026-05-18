document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Sticky Header on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other active items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Modal Handling
  const modalOverlay = document.getElementById('counselingModal');
  const modalClose = document.querySelector('.modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const examTarget = btn.getAttribute('data-exam') || 'GATE 2027/28';
      const modalSelect = modalOverlay.querySelector('select[name="exam"]');
      if (modalSelect && examTarget) {
        // Pre-select exam if matching option exists
        for(let option of modalSelect.options) {
          if (option.value.includes(examTarget) || examTarget.includes(option.value)) {
            option.selected = true;
            break;
          }
        }
      }
      modalOverlay.classList.add('active');
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // Form Submissions Handler
  const forms = document.querySelectorAll('.counseling-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Booking Your Session...';

      // Simulate API call
      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Show alert
        const alertBox = form.querySelector('.alert-box') || form.parentElement.querySelector('.alert-box');
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.textContent = '🎉 Successfully Booked! Our Senior Academic Counselor will call you within 15 minutes.';
          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 6000);
        } else {
          alert('🎉 Successfully Booked! Our Senior Academic Counselor will call you within 15 minutes.');
        }

        // Close modal if submitted inside modal
        if (form.closest('.modal-overlay')) {
          setTimeout(() => {
            modalOverlay.classList.remove('active');
          }, 2000);
        }
      }, 1500);
    });
  });

  // Smooth scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
