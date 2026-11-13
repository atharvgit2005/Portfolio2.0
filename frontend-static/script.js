// Theme toggle
const themeToggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize theme from localStorage or OS preference
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

// Smooth scroll for in-page anchors
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Contact form mock handler
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';

    const data = Object.fromEntries(new FormData(form).entries());

    // Demo: simulate async send
    try {
      await new Promise((res) => setTimeout(res, 800));
      statusEl.textContent = 'Thanks! Your message was sent (demo).';
      form.reset();
    } catch (err) {
      statusEl.textContent = 'Something went wrong. Please try again later.';
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
