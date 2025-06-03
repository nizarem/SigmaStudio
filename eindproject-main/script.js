// COOKIE-BANNER
window.addEventListener('load', function () {
  if (!localStorage.getItem('cookieAccepted')) {
    const banner = document.createElement('div');
    banner.innerHTML = `
      <div style="position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 1rem; text-align: center; z-index: 100;">
        Deze website gebruikt cookies voor een betere ervaring.
        <button id="acceptCookies" style="margin-left: 10px; padding: 0.5rem 1rem;">Akkoord</button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById('acceptCookies').onclick = () => {
      localStorage.setItem('cookieAccepted', 'true');
      banner.remove();
    };
  }
});

// SCROLL-TO-TOP KNOP
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆️';
scrollBtn.className = 'scrollTop';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 60px;
  right: 20px;
  padding: 0.5rem 1rem;
  display: none;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
document.body.appendChild(scrollBtn);

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// FORMULIERVALIDATIE
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        alert('Gelieve alle velden in te vullen.');
        e.preventDefault();
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000); // elke 3 seconden
});
