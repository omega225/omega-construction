// Omega Construction — Main JS

// ─── Mobile Nav Toggle ───────────────────────────────────────────────────────
(function initMobileNav() {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
})();

// ─── Scroll-based Nav Background ─────────────────────────────────────────────
(function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
      nav.classList.remove('nav-transparent');
    } else {
      nav.classList.remove('nav-scrolled');
      nav.classList.add('nav-transparent');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load
})();

// ─── Smooth-scroll Anchor Handler ────────────────────────────────────────────
(function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
(function initAccordion() {
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-accordion-trigger]');
    if (!trigger) return;

    const item = trigger.closest('[data-accordion-item]');
    const panel = item ? item.querySelector('[data-accordion-panel]') : null;
    const chevron = trigger.querySelector('[data-accordion-chevron]');
    if (!item || !panel) return;

    const isOpen = !panel.classList.contains('hidden');

    // Close all open items
    document.querySelectorAll('[data-accordion-item]').forEach(function (el) {
      el.querySelector('[data-accordion-panel]').classList.add('hidden');
      const ch = el.querySelector('[data-accordion-chevron]');
      if (ch) ch.classList.remove('rotate-180');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      panel.classList.remove('hidden');
      if (chevron) chevron.classList.add('rotate-180');
    }
  });
})();

// ─── Project Filter ───────────────────────────────────────────────────────────
(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      // Update active button styles
      filterBtns.forEach(function (b) {
        b.classList.remove('filter-active');
        b.classList.add('filter-inactive');
      });
      btn.classList.add('filter-active');
      btn.classList.remove('filter-inactive');

      // Show/hide cards
      document.querySelectorAll('[data-type]').forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

// ─── Lightbox ────────────────────────────────────────────────────────────────
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  function openLightbox(card) {
    const img = card.querySelector('img');
    const name = card.getAttribute('data-name') || '';
    const location = card.getAttribute('data-location') || '';
    const scope = card.getAttribute('data-scope') || '';
    const year = card.getAttribute('data-year') || '';

    lightbox.querySelector('#lb-image').src = img ? img.src : '';
    lightbox.querySelector('#lb-name').textContent = name;
    lightbox.querySelector('#lb-location').textContent = location;
    lightbox.querySelector('#lb-scope').textContent = scope;
    lightbox.querySelector('#lb-year').textContent = year;

    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-lightbox-trigger]');
    if (trigger) {
      const card = trigger.closest('[data-type]');
      if (card) openLightbox(card);
      return;
    }

    // Close on outside click
    if (e.target === lightbox || e.target.closest('#lb-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();

// ─── Contact Form Validation ──────────────────────────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    let err = field.parentElement.querySelector('.field-error');
    if (!err) {
      err = document.createElement('p');
      err.className = 'field-error text-red-600 text-sm mt-1';
      field.parentElement.appendChild(err);
    }
    err.textContent = message;
    field.classList.add('border-red-500');
  }

  function clearErrors() {
    form.querySelectorAll('.field-error').forEach(function (el) { el.remove(); });
    form.querySelectorAll('.border-red-500').forEach(function (el) {
      el.classList.remove('border-red-500');
    });
  }

  form.addEventListener('submit', function (e) {
    clearErrors();
    let valid = true;

    const name = document.getElementById('field-name');
    const email = document.getElementById('field-email');
    const desc = document.getElementById('field-description');

    if (!name || !name.value.trim()) {
      showError('field-name', 'Full name is required.');
      valid = false;
    }
    if (!email || !email.value.trim()) {
      showError('field-email', 'Email address is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError('field-email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!desc || !desc.value.trim()) {
      showError('field-description', 'Project description is required.');
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });

  // Handle Formspree AJAX success (optional enhancement)
  form.addEventListener('formspree:success', function () {
    form.innerHTML = '<p class="text-center text-lg font-semibold text-navy py-12">Thank you! We\'ll be in touch within 1 business day.</p>';
  });
})();
