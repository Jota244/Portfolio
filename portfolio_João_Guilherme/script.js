// =============================================
// SCROLL REVEAL
// =============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// =============================================
// NAV ACTIVE LINK ON SCROLL
// =============================================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  links.forEach(link => {
    const href = link.getAttribute('href');
    link.style.color = href === '#' + current
      ? 'var(--text)'
      : '';
  });
});


// =============================================
// SMOOTH SCROLL para links internos
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
