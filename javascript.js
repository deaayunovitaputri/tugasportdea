// hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
  });
});


// aktifkan link navbar saat scroll
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {

  let sectionAktif = '';

  sections.forEach(function(section) {
    
    if (window.scrollY >= section.offsetTop - 80) {
      sectionAktif = section.id;
    }
  });

  
  menuLinks.forEach(function(link) {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + sectionAktif) {
      link.classList.add('active');
    }
  });

});


// form kontak
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  
  e.preventDefault();

  
  const tombol = this.querySelector('button[type="submit"]');
  const teksAsli = tombol.innerHTML;

  
  tombol.innerHTML = '✅ Pesan Terkirim!';
  tombol.disabled = true;
  tombol.style.backgroundColor = '#16a34a';
  tombol.style.borderColor = '#16a34a';

  
  setTimeout(function() {
    tombol.innerHTML = teksAsli;
    tombol.disabled = false;
    tombol.style.backgroundColor = '';
    tombol.style.borderColor = '';
    contactForm.reset();
  }, 3000);

});


// animasi muncul saat scroll
const elemenAnimasi = document.querySelectorAll(
  '.skill-card, .project-card, .timeline-item, .contact-item, .about-info'
);

const observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {
    
    if (entry.isIntersecting) {
      entry.target.classList.add('muncul'); 
      observer.unobserve(entry.target);     
    }
  });

}, {
  threshold: 0.1 
});

elemenAnimasi.forEach(function(elemen) {
  elemen.style.opacity    = '0';
  elemen.style.transform  = 'translateY(20px)';
  elemen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(elemen);
});

const styleAnimasi = document.createElement('style');
styleAnimasi.innerHTML = '.muncul { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(styleAnimasi);