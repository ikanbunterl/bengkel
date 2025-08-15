// === Toggle Menu di HP ===
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === Modal Booking ===
const modal = document.getElementById('bookingModal');

function openBookingModal() {
  modal.style.display = 'flex';
}

function closeBookingModal() {
  modal.style.display = 'none';
}

// Tutup modal jika klik di luar
window.onclick = function(event) {
  if (event.target === modal) {
    closeBookingModal();
  }
};

// Alert setelah submit form
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih! Booking Anda telah dikirim. Kami akan segera hubungi Anda.');
  closeBookingModal();
  this.reset();
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    }
  });
});

// === Scroll to Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Scroll Reveal Animation ===
const revealElements = () => {
  const reveals = document.querySelectorAll('.service-card, .testimonial, .gallery-item');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealElements);
document.addEventListener('DOMContentLoaded', revealElements);