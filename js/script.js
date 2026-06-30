// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

function closeMenu() {
  menuToggle.classList.remove('active');
  navMenu.classList.remove('active');
}

navMenu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Header scroll effect
const header = document.getElementById('header');

function updateHeaderState() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('load', updateHeaderState);
window.addEventListener('pageshow', updateHeaderState);

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const servico = document.getElementById('servico').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const lines = [
    'Olá, NivelTI!',
    '',
    `*Nome:* ${nome}`,
    `*Empresa:* ${empresa || 'N/A'}`,
    ...(servico ? [`*Serviço:* ${servico}`] : []),
    `*WhatsApp:* ${whatsapp}`,
    `*E-mail:* ${email}`,
    `*Mensagem:* ${mensagem}`
  ];

  const params = new URLSearchParams({ text: lines.join('\n') });

  window.open(`https://wa.me/5585997961151?${params.toString()}`, '_blank', 'noopener,noreferrer');
});
