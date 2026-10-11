// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
}

// Contact form -> opens the visitor's email app with the message filled in
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(d.get('subject') || 'Enquiry from website');
    const body = encodeURIComponent(
      `Name: ${d.get('name')}\nCompany: ${d.get('company') || '-'}\nEmail: ${d.get('email')}\n\n${d.get('message')}`
    );
    window.location.href = `mailto:israkhossainpantho105@gmail.com?subject=${subject}&body=${body}`;
  });
}
