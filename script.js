/* ============================================
   Michelle DaSilva Portfolio — JavaScript
   ============================================ */

/* --- Mobile Navigation --- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  const links  = document.querySelectorAll('.nav-link');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on nav link click
  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();


/* --- Scroll-triggered Fade-in (Intersection Observer) --- */
(function () {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make everything visible immediately
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();


/* --- Active Nav Link on Scroll --- */
(function () {
  var sections = document.querySelectorAll('main [id]');
  var navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  var sectionMap = {};
  sections.forEach(function (section) {
    sectionMap[section.id] = section;
  });

  function setActive() {
    var scrollY = window.scrollY + 100;
    var currentId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();


/* --- Contact Form Validation & Submission --- */
(function () {
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  if (!form) return;

  function showError(fieldId, msg) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (error) error.textContent = msg;
  }

  function clearError(fieldId) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('error');
    if (error) error.textContent = '';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    var valid = true;
    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    clearError('name');
    clearError('email');
    clearError('message');

    if (!name) {
      showError('name', 'Please enter your name.');
      valid = false;
    }

    if (!email) {
      showError('email', 'Please enter your email address.');
      valid = false;
    } else if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!message) {
      showError('message', 'Please enter a message.');
      valid = false;
    }

    return valid;
  }

  // Live validation on blur
  ['name', 'email', 'message'].forEach(function (id) {
    var field = document.getElementById(id);
    if (!field) return;
    field.addEventListener('blur', function () {
      validate();
    });
    field.addEventListener('input', function () {
      clearError(id);
      field.classList.remove('error');
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) return;

    var submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          if (success) {
            success.removeAttribute('hidden');
          }
        } else {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
          alert('Something went wrong. Please try again or email me directly.');
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        alert('Something went wrong. Please try again or email me directly.');
      });
  });
})();


/* --- Theme Toggle --- */
(function () {
  const toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  const html = document.documentElement;

  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', function () {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();
